/**
*
* DiscoveryNavigation
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
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

  renderNavigationItems (selectedItems) {
    const validTerms = _.filter(selectedItems, item => item.term_name !== '...')
    const { followedTopics } = toJS(this.props.term)
    if (validTerms && validTerms.length) {
      return _.map(validTerms, (term) => {
        let followed = false
        if (followedTopics && followedTopics.topics) {
          followed = !!followedTopics.topics.find(x => x.term_id === term.term_id)
        }
        return (
          <div
            className='selected-topic'
            key={`topic-${term.term_id}`}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${term.img || '/static/images/no-image.png'}) `,
              backgroundSize: 'cover',
              cursor: 'pointer',
              padding: '4px 120px 4px 8px'
            }}
            onClick={() => {
              this.selectTerm(term)
            }}
          >
            <p className='blur-bg'>
              <span className='text-topic'>{term.term_name}</span>
            </p>
            <div className='topic-follow' style={{
              position: 'absolute',
              right: -14,
              bottom: -5
            }}>
              <label className='label'>
                <input className='label__checkbox' type='checkbox' checked={followed} onChange={() => this.changeFollow(term.term_id, followed, term.term_name)} />
                <span className='label__text'>
                  <span className='label__check'>
                    <i className='fa fa-check icon' />
                  </span>
                </span>
              </label>
            </div>
          </div>
        )
      })
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
        settings={{
          variableWidth: true,
          infinite: false,
          centerMode: false
        }}
        className='slick-nav-small'
        >
        {
          this.renderNavigationItems(items)
        }
      </Carousel>
    )
  }
}

export default DiscoveryNavigation
