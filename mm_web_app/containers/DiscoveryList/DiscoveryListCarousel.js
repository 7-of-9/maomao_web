import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import Carousel from '../../components/Carousel'
import logger from '../../utils/logger'
import DiscoveryListLoading from '../../components/Loading/DiscoveryListLoading'

@inject('term')
class DiscoveryListCarousel extends Component {
  static propTypes = {
    items: PropTypes.array,
    disc: PropTypes.bool,
    chunkSize: PropTypes.number
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
    logger.info('DiscoveryListCarousel shouldComponentUpdate', nextProps.chunkSize, nextProps.items, this.props.items)
    if (this.state.page !== nextState.page && this.props.items === nextProps.items) {
      return false
    }
    logger.info('DiscoveryListCarousel shouldComponentUpdate')
    return true
  }

  componentDidMount () {
    logger.info('DiscoveryListCarousel componentDidMount', this.props.chunkSize)
  }

  handlePage = (index) => {
    this.setState({ page: index })
    const { discoveries } = this.props.term
    if (Math.floor(discoveries.length / this.props.chunkSize) - 1 <= index && this.props.disc) {
      this.loadMore()
    }
  }

  loadMore = () => {
    if (this.props.term.hasLoadMore) {
      this.props.term.loadMore()
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
      {items.length ? items : <DiscoveryListLoading number={chunkSize} /> }
    </Carousel>
  }
}

export default DiscoveryListCarousel
