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
    logger.info('selectedItems', selectedItems)
    const validTerms = _.filter(selectedItems, item => item.term_name !== '...')
    if (validTerms && validTerms.length) {
      return _.map(validTerms, (term) => (<div className='selected-topic' key={`topic-${term.term_id}`} style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${term.img || '/static/images/no-image.png'}) `,
        backgroundSize: 'cover',
        cursor: 'pointer'
      }} onClick={() => this.selectTerm(term)}>
        <p className='blur-bg'>
          <span className='text-topic'>{term.term_name}</span>
        </p>
      </div>))
    } else {
      return <div />
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
