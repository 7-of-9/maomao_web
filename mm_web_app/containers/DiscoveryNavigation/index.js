/**
*
* DiscoveryNavigation
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import dynamic from 'next/dynamic'
import _ from 'lodash'
import Loading from '../../components/Loading'
import logger from '../../utils/logger'

const Carousel = dynamic(
  import('../../components/Carousel'),
  {
    ssr: false,
    loading: () => null
  }
)

@inject('term')
@inject('ui')
@observer
class DiscoveryNavigation extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    termIds: PropTypes.array.isRequired,
    isReady: PropTypes.bool.isRequired,
    onSelectTerm: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: [],
    termIds: [],
    isReady: false,
    onSelectTerm: (term) => {}
  }

  selectTerm = (term) => {
    logger.info('DiscoveryNavigation selectDiscoveryTerm', term)
    this.props.onSelectTerm(term)
    this.props.ui.toggleSplitView(true)
  }

  componentWillReact () {
    logger.info('DiscoveryNavigation componentWillReact')
  }

  handleHoverTerm = (evt, term) => {
    const { followedTopics } = toJS(this.props.term)
    const followed = followedTopics.topics ? !!followedTopics.topics.find(x => x.term_id === term.term_id) : false
    if (term.term_name === '...' && this.props.term.termsCache[term.term_id]) {
      term = toJS(this.props.term.termsCache[term.term_id])
    }
    const termHover = {
      top: evt.target.getBoundingClientRect().top + evt.target.offsetHeight,
      left: evt.target.getBoundingClientRect().left,
      term,
      followed,
      height: evt.target.offsetHeight
    }
    this.props.ui.showTermHover(termHover)
  }

  handleLeaveHoverTerm = (term) => {
    setTimeout(() => {
      if (!this.props.ui.termHoverVisible && term.term_id === toJS(this.props.ui.termHover.term).term_id) {
        this.props.ui.hideTermHover()
      }
    }, 10)
  }

  renderNavigationItems (selectedItems) {
    logger.info('selectedItems', selectedItems)
    const validTerms = _.filter(selectedItems, item => item.term_name !== '...')
    if (validTerms && validTerms.length) {
      return _.map(validTerms, (term) => (
        <div
          className='selected-topic'
          key={`topic-${term.term_id}`}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${term.img || '/static/images/no-image.png'}) `,
            backgroundSize: 'cover',
            cursor: 'pointer'
          }}
          onClick={() => {
            this.props.ui.hideTermHover()
            this.selectTerm(term)
          }}
          onMouseEnter={(evt) => this.handleHoverTerm(evt, term)}
          onMouseLeave={() => this.handleLeaveHoverTerm(term)}
        >
          <p className='blur-bg'>
            <span className='text-topic'>{term.term_name}</span>
          </p>
        </div>
      ))
    } else {
      return (<div style={{ width: 40, height: 40 }}><Loading isLoading /></div>)
    }
  }

  componentWillMount () {
    const { items } = this.props
    logger.info('DiscoveryNavigation componentWillMount selectedItems', items)
    _.forEach(items, ({ term_id }) => this.props.term.preloadTerm(term_id))
  }

  render () {
    const { items, isReady } = this.props
    logger.info('DiscoveryNavigation render', isReady, items, this.props)
    return (
      <Carousel
        className='carousel-wrapper'
        >
        {
          this.renderNavigationItems(items)
        }
      </Carousel>
    )
  }
}

export default DiscoveryNavigation
