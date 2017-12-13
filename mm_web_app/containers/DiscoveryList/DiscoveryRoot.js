import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { toJS } from 'mobx'
import _ from 'lodash'
import styled from 'styled-components'
import DiscoveryItem from './DiscoveryItem'
import DiscoveryListCarousel from './DiscoveryListCarousel'
import Loading from '../../components/Loading'
import logger from '../../utils/logger'

const H3 = styled.h3`
  border-bottom: 2px solid #1ea1f2;
  padding-bottom: 8px;
`
@inject('term')
@inject('store')
@inject('ui')
class DiscoveryRoot extends Component {
  static propTypes = {
    getCurrentTerm: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onSelectChildTerm: PropTypes.func.isRequired,
    onSelectShareTerm: PropTypes.func.isRequired,
    onSelectUser: PropTypes.func.isRequired,
    urlId: PropTypes.number,
    shareUrlId: PropTypes.number,
    rightWidth: PropTypes.number
  }

  static defaultProps = {
    getCurrentTerm: () => {},
    onSelect: () => {},
    onSelectChildTerm: () => {},
    onSelectShareTerm: () => {},
    onSelectUser: () => {}
  }

  state = {
    chunkSize: 0
  }

  componentDidMount () {
    const chunkSize = this.props.rightWidth / 125 || Math.floor(window.innerWidth / 250) * 2
    this.setState({ chunkSize: chunkSize > 12 ? 12 : chunkSize })
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  componentWillReceiveProps (nextProps) {
    logger.warn('DiscoveryRoot componentWillReceiveProps', nextProps)
    const chunkSize = Math.floor((nextProps.rightWidth || window.innerWidth) / 250) * 2
    if (nextProps.rightWidth && chunkSize !== this.state.chunkSize) {
      this.setState({ chunkSize: chunkSize > 12 ? 12 : chunkSize })
    }
  }

  componentWillUpdate () {
    logger.warn('DiscoveryRoot componentWillUpdate')
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.chunkSize === nextState.chunkSize && this.props.rightWidth !== nextProps.rightWidth) {
      return false
    }
    logger.warn('DiscoveryRoot shouldComponentUpdate')
    return true
  }

  updateDimensions = () => {
    const chunkSize = Math.floor((this.props.rightWidth || window.innerWidth) / 250) * 2
    if (chunkSize !== this.state.chunkSize) {
      this.setState({ chunkSize: chunkSize > 12 ? 12 : chunkSize })
    }
  }

  loadMore = () => {
    if (this.props.term.hasLoadMore) {
      this.props.term.loadMore()
    }
  }

  render () {
    const itemDiscoveries = []
    const itemsMine = []
    const itemsFriend = []
    const { discoveries } = this.props.term
    const { urlId, shareUrlId } = this.props
    const { mine, received } = toJS(this.props.store.userHistory)
    _.forEach(received, (receivedIten, index) => {
      _.forEach(receivedIten.shares, (shareItem, index) => {
        _.forEach(shareItem.urls, (item, index) => {
          if (shareItem.type === 'topic') {
            itemsFriend.push(
              <DiscoveryItem
                key={`${item.url_id}-${item.href}-${index}`}
                main_term_img={receivedIten.avatar}
                main_term_name={receivedIten.fullname}
                sub_term_img={'/static/images/no-image.png'}
                sub_term_name={shareItem.topic_name}
                userData={receivedIten}
                shareTerm={shareItem}
                onSelectShareTerm={this.props.onSelectShareTerm}
                onSelectUser={this.props.onSelectUser}
                onSelect={this.props.onSelect}
                url={item.href}
                desc={item.href}
                selected={shareUrlId === item.url_id}
                {...item}
              />
            )
          } else {
            itemsFriend.push(
              <DiscoveryItem
                key={`${item.url_id}-${item.href}-${index}`}
                main_term_img={receivedIten.avatar}
                main_term_name={receivedIten.fullname}
                userData={receivedIten}
                onSelectUser={this.props.onSelectUser}
                onSelect={this.props.onSelect}
                url={item.href}
                desc={item.href}
                selected={shareUrlId === item.url_id}
                {...item}
              />
            )
          }
        })
      })
    })
    _.forEach(mine.urls, (item, index) => {
      itemsMine.push(
        <DiscoveryItem
          key={`${item.url_id}-${item.href}-${index}`}
          main_term_img={mine.avatar}
          main_term_name={mine.fullname}
          userData={mine}
          onSelectUser={this.props.onSelectUser}
          url={item.href}
          desc={item.href}
          onSelect={this.props.onSelect}
          selected={shareUrlId === item.url_id}
          {...item}
        />
      )
    })
    _.forEach(discoveries, (item, index) => {
      /* eslint-disable camelcase */
      if (item.main_term_id) {
        const term = this.props.getCurrentTerm(item.main_term_id)
        const subTerm = this.props.getCurrentTerm(item.sub_term_id)
        if (term && subTerm) {
          const { img: main_term_img, term_name: main_term_name } = term
          const { img: sub_term_img, term_name: sub_term_name } = subTerm
          itemDiscoveries.push(
            <DiscoveryItem
              key={`${item.disc_url_id}-${item.url}-${index}`}
              main_term_img={main_term_img}
              main_term_name={main_term_name}
              main_term={term}
              sub_term={subTerm}
              sub_term_img={sub_term_img}
              sub_term_name={sub_term_name}
              onSelect={this.props.onSelect}
              onSelectTerm={this.props.onSelectChildTerm}
              selected={urlId === item.disc_url_id}
              {...item}
            />
          )
        }
      }
    })
    const { chunkSize } = this.state
    const itemDiscoveriesChunk = [].concat.apply([],
      itemDiscoveries.map(function (elem, i) {
        return i % chunkSize ? [] : <div style={{ width: chunkSize * 250 / 2 }}> {[itemDiscoveries.slice(i, i + chunkSize)]} </div>
      })
    )
    const itemsFriendChunk = [].concat.apply([],
      itemsFriend.map(function (elem, i) {
        return i % chunkSize ? [] : <div style={{ width: chunkSize * 250 / 2 }}> {[itemsFriend.slice(i, i + chunkSize)]} </div>
      })
    )
    const itemsMineChunk = [].concat.apply([],
      itemsMine.map(function (elem, i) {
        return i % chunkSize ? [] : <div style={{ width: chunkSize * 250 / 2 }}> {[itemsMine.slice(i, i + chunkSize)]} </div>
      })
    )
    if (chunkSize === 0) {
      return <Loading isLoading />
    }
    return <div>
      {itemDiscoveriesChunk && !!itemDiscoveriesChunk.length && <div style={{ display: 'inline-block', width: '100%' }}>
        <H3>Discoveries</H3>
        <DiscoveryListCarousel
          items={itemDiscoveriesChunk}
          disc
          chunkSize={chunkSize}
        />
        <Loading isLoading={this.props.ui.isRootView && this.props.term.isLoading} />
      </div>}
      {itemsFriendChunk && !!itemsFriendChunk.length && <div style={{ display: 'inline-block', width: '100%' }}>
        <H3>Friend Stream</H3>
        <DiscoveryListCarousel
          items={itemsFriendChunk}
          chunkSize={chunkSize}
        />
        <Loading isLoading={this.props.ui.isRootView && this.props.term.isLoading} />
      </div>}
      {itemsMineChunk && !!itemsMineChunk.length && <div style={{ display: 'inline-block', width: '100%' }}>
        <H3>My Stream</H3>
        <DiscoveryListCarousel
          items={itemsMineChunk}
          chunkSize={chunkSize}
        />
        <Loading isLoading={this.props.ui.isRootView && this.props.term.isLoading} />
      </div>}
    </div>
  }
}

export default DiscoveryRoot
