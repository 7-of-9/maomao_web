import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import _ from 'lodash'
import styled from 'styled-components'
import Link from 'next/link'
import DiscoveryItem from './DiscoveryItem'
import DiscoveryListCarousel from './DiscoveryListCarousel'
import DiscoveryListLoading from '../../components/Loading/DiscoveryListLoading'
import SkelDiscoveryItem from '../../components/Skeleton/SkelDiscoveryItem'
import logger from '../../utils/logger'

const H3 = styled.h3`
  border-bottom: 2px solid #1ea1f2;
  padding-bottom: 8px;
`

function generateChunk(items, chunkSize, hasMore, isLoading) {
  const chunks = [].concat.apply([],
    items.map(function (elem, i) {
      return i % chunkSize ? [] : [items.slice(i, i + chunkSize)]
    })
  )
  if (hasMore || isLoading) {
    if (chunks && chunks.length) {
      const lastLength = chunks[chunks.length - 1].length
      if (lastLength === chunkSize) {
        chunks.push(<DiscoveryListLoading number={chunkSize} />)
      } else {
        for (var i = 0; i < chunkSize - lastLength; i++) {
          chunks[chunks.length - 1].push(<SkelDiscoveryItem key={i} />)
        }
      }
    } else {
      chunks.push(<DiscoveryListLoading number={chunkSize} />)
    }  
  }
  return chunks
}

@inject('term')
@inject('store')
@inject('ui')
@observer
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
    const chunkSize = Math.floor((this.props.rightWidth || window.innerWidth) / 250) * 2
    this.setState({ chunkSize: chunkSize > 12 ? 12 : chunkSize })
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  componentWillReceiveProps (nextProps) {
    logger.info('DiscoveryRoot componentWillReceiveProps', nextProps)
    const chunkSize = Math.floor((nextProps.rightWidth || window.innerWidth) / 250) * 2
    if (nextProps.rightWidth && chunkSize !== this.state.chunkSize) {
      this.setState({ chunkSize: chunkSize > 12 ? 12 : chunkSize })
    }
  }

  componentWillUpdate () {
    logger.info('DiscoveryRoot componentWillUpdate')
  }

  updateDimensions = () => {
    const chunkSize = Math.floor((this.props.rightWidth || window.innerWidth) / 250) * 2
    if (chunkSize !== this.state.chunkSize) {
      this.setState({ chunkSize: chunkSize > 12 ? 12 : chunkSize })
    }
  }

  render () {
    const itemDiscoveries = []
    const itemsOwn = []
    const itemsFriends = []
    const { discoveries, hasLoadMore, isProcessingRootDiscover, loadMore } = this.props.term
    const { urlId, shareUrlId } = this.props
    const {
      ownStream,
      friendsStream,
      friendsHasMore,
      ownHasMore,
      isProcessingFriendsStream,
      isProcessingOwnStream,
      friendsTopics,
      ownTopics
    } = this.props.store
    _.forEach(ownStream, (item, index) => {
      const currentTopics = _.filter(ownTopics, topic => topic.urlIds && _.indexOf(topic.urlIds, item.url_id) !== -1)
      const maxLevel = _.maxBy(currentTopics, 'level')
      const topic = _.filter(currentTopics, item => item.level === maxLevel.level)[0]
      if (topic) {
        const term = this.props.getCurrentTerm(topic.id) || { term_name: topic.name, term_id: topic.id }
        itemsOwn.push(
          <DiscoveryItem
            key={`${item.url_id}-${item.href}-${index}`}
            main_term_name={term.term_name}
            main_term_img={term.img}
            main_term_id={term.term_id}
            main_term={term}
            onSelect={this.props.onSelect}
            onSelectTerm={this.props.onSelectChildTerm}
            onSelectUser={this.props.onSelectUser}
            selected={shareUrlId === item.url_id}
            url={item.href} 
            desc={item.href} 
            {...item}
        />)
      } else {
        itemsOwn.push(
          <DiscoveryItem
            key={`${item.url_id}-${item.href}-${index}`}
            onSelect={this.props.onSelect}
            onSelectUser={this.props.onSelectUser}
            selected={shareUrlId === item.url_id}
            url={item.href} 
            desc={item.href} 
            {...item}
        />)
      }
    })
    _.forEach(friendsStream, (item, index) => {
      const currentTopics = _.filter(friendsTopics, topic => topic.urlIds && _.indexOf(topic.urlIds, item.url_id) !== -1)
      const maxLevel = _.maxBy(currentTopics, 'level')
      const topic = _.filter(currentTopics, item => item.level === maxLevel.level)[0]
      if (topic) {
        const term = this.props.getCurrentTerm(topic.id) || { term_name: topic.name, term_id: topic.id }
        itemsFriends.push(
          <DiscoveryItem
            key={`${item.url_id}-${item.href}-${index}`}
            main_term_name={term.term_name}
            main_term_img={term.img}
            main_term_id={term.term_id}
            main_term={term}
            onSelect={this.props.onSelect}
            onSelectTerm={this.props.onSelectChildTerm}
            onSelectUser={this.props.onSelectUser}
            selected={shareUrlId === item.url_id}
            url={item.href} 
            desc={item.href}
            {...item}
        />)
      } else {
        itemsFriends.push(
          <DiscoveryItem
            key={`${item.url_id}-${item.href}-${index}`}
            onSelect={this.props.onSelect}
            onSelectUser={this.props.onSelectUser}
            selected={shareUrlId === item.url_id}
            url={item.href} 
            desc={item.href}
            {...item}
        />)
      }
    })
    _.forEach(discoveries, (item, index) => {
      /* eslint-disable camelcase */
      if (item.main_term_id) {
        let term = this.props.getCurrentTerm(item.main_term_id) || { term_name: '...'}
        let subTerm = this.props.getCurrentTerm(item.sub_term_id) || { term_name: '...'}
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
    const width = chunkSize * 250 / 2
    console.log('wlwlwl', itemsFriends)
    const itemDiscoveriesChunk = generateChunk(itemDiscoveries, chunkSize, hasLoadMore, isProcessingRootDiscover)
    const itemsFriendsChunk = generateChunk(itemsFriends, chunkSize, friendsHasMore, isProcessingFriendsStream)
    const itemsOwnChunk = generateChunk(itemsOwn, chunkSize, ownHasMore, isProcessingOwnStream)
    if (chunkSize === 0) {
      return <DiscoveryListLoading number={12} />
    }
    console.log(itemDiscoveriesChunk, itemDiscoveries, discoveries)
    return <div>
      <H3>Discoveries</H3>
      <div style={{ display: 'inline-block', width: '100%' }}>
        {!!itemDiscoveriesChunk.length && <DiscoveryListCarousel
          items={itemDiscoveriesChunk}
          chunkSize={chunkSize}
          width={width}
          hasMore={hasLoadMore}
          type='disc'
        />}
        {((itemDiscoveriesChunk.length > 1 && isProcessingRootDiscover) || (!!itemDiscoveriesChunk.length && !isProcessingRootDiscover)) ||
        <Link
          as={`/topics`}
          prefetch
          href={{
            pathname: '/topics'
          }}
        >
          <button className="btn" style={{ margin: '16px 0 64px 0' }}>Follow some topics now</button>
        </Link>}
      </div>
      <H3>Friend Stream</H3>
      <div style={{ display: 'inline-block', width: '100%' }}>
        {!!itemsFriendsChunk.length && <DiscoveryListCarousel
          items={itemsFriendsChunk}
          chunkSize={chunkSize}
          width={width}
          hasMore={friendsHasMore}
          type='friend'
        />}
        {((itemsFriendsChunk.length > 1 && isProcessingFriendsStream) || (!!itemsFriendsChunk.length && !isProcessingFriendsStream)) || <p style={{ margin: '16px 0 64px 0' }}>Ask yoour friend to share</p>}
      </div>
      <H3>My Stream</H3>
      <div style={{ display: 'inline-block', width: '100%' }}>
        {!!itemsOwnChunk.length && <DiscoveryListCarousel
          items={itemsOwnChunk}
          chunkSize={chunkSize}
          width={width}
          hasMore={ownHasMore}
          type='own'
        />}
        {((itemsOwnChunk.length > 1 && isProcessingOwnStream) || (!!itemsOwnChunk.length && !isProcessingOwnStream)) || <p style={{ margin: '16px 0 64px 0' }}>You dont have history yet, go install maomao chrome extension</p> }
      </div>
    </div>
  }
}

export default DiscoveryRoot
