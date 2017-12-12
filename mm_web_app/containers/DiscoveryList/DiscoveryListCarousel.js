import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import Carousel from '../../components/Carousel'

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

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.page !== nextState.page && this.props.items === nextProps.items) {
      return false
    }
    return true
  }

  handlePage = (evt) => {
    if (evt.property.name === 'position') {
      this.setState({ page: evt.property.value })
      const { discoveries } = this.props.term
      if (Math.floor(discoveries.length / this.props.chunkSize) - 1 <= evt.property.value && this.props.disc) {
        this.loadMore()
      }
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
      navContainerClass: 'carousel-nav owl-nav owl-nav-discover',
      stageOuterClass: 'carousel-outer owl-stage-outer',
      stageClass: 'carousel-stage owl-stage',
      nav: true,
      dots: false,
      autoWidth: true,
      startPosition: page,
      lazyLoad: true,
      lazyContent: true
    }
    return <Carousel
      settings={settings}
      className='carousel-wrapper' style={{ width: chunkSize * 250 / 2, padding: 0 }}
      onChange={this.handlePage}
    >
      {items.length ? items : <div /> }
    </Carousel>
  }
}

export default DiscoveryListCarousel
