import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import Carousel from '../../components/Carousel'
import logger from '../../utils/logger'
import DiscoveryListLoading from '../../components/Loading/DiscoveryListLoading'

@inject('term')
@inject('store')
class DiscoveryListCarousel extends Component {
  static propTypes = {
    items: PropTypes.array,
    hasMore: PropTypes.bool,
    chunkSize: PropTypes.number,
    type: PropTypes.string
  }

  static defaultProps = {
    getCurrentTerm: () => {},
    onSelect: () => {},
    onSelectChildTerm: () => {},
    onSelectShareTerm: () => {},
    onSelectUser: () => {}
  }

  state = {
    page: 0
  }

  componentWillUpdate () {
    logger.info('DiscoveryListCarousel componentWillUpdate')
  }

  shouldComponentUpdate (nextProps, nextState) {
    logger.info('DiscoveryListCarousel shouldComponentUpdate')
    if (this.state.page !== nextState.page && this.props.items === nextProps.items) {
      return false
    }
    logger.info('DiscoveryListCarousel shouldComponentUpdate')
    return true
  }

  componentDidMount () {
    logger.info('DiscoveryListCarousel componentDidMount')
  }

  handlePage = (index) => {
    this.setState({ page: index })
    if (this.props.items.length - 1 <= index) {
      this.loadMore()
    }
  }

  loadMore = () => {
    if (this.props.hasMore) {
      if (this.props.type === 'disc') {
        this.props.term.loadMore()
      } else if (this.props.type === 'own') {
        this.props.store.loadMoreOwn()
      } else if (this.props.type === 'friend') {
        this.props.store.loadMoreFriends()
      }
    }
  }

  render () {
    const { items, chunkSize } = this.props
    const { page } = this.state
    const settings = {
      lazyLoad: true,
      initialSlide: page,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return <Carousel
      settings={settings}
      className='slick-nav-discover'
      style={{ width: chunkSize * 250 / 2, padding: 0 }}
      afterChange={this.handlePage}
    >
      {items.length ? items.map((elem, index) =>
        <div style={{ width: chunkSize * 250 / 2 }} key={`data-${index}`}>{elem}</div>)
        : <div style={{ width: chunkSize * 250 / 2 }} key={'load-skel'}><DiscoveryListLoading number={chunkSize} /></div> }
    </Carousel>
  }
}

export default DiscoveryListCarousel
