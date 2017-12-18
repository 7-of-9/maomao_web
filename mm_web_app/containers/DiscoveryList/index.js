/**
*
* DiscoveryList
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import _ from 'lodash'
import Sticky from 'react-sticky-el'
import ReactResizeDetector from 'react-resize-detector'
import SplitPane from 'react-split-pane'
import dynamic from 'next/dynamic'
import DiscoveryPath from './DiscoveryPath'
import DiscoveryItem from './DiscoveryItem'
import DiscoveryDetail from './DiscoveryDetail'
import { isSameStringOnUrl } from '../../utils/helper'
import DiscoveryListLoading from '../../components/Loading/DiscoveryListLoading'
import logger from '../../utils/logger'

const DiscoveryRoot = dynamic(import('./DiscoveryRoot'), {
  ssr: false,
  loading: () => <div className='grid-auto'><DiscoveryListLoading number={20} /></div>
})

@inject('term')
@inject('store')
@inject('ui')
@observer
class DiscoveryList extends Component {
  static propTypes = {
    profileUrl: PropTypes.string.isRequired,
    urlId: PropTypes.number.isRequired
  }

  static defaultProps = {
    profileUrl: '',
    urlId: -1
  }

  componentWillReceiveProps (nextProps) {
    logger.warn('DiscoveryList componentWillReceiveProps')
  }

  onSelect = (item) => {
    this.props.ui.selectDiscoveryItem(item)
    console.log(item)
    this.props.ui.toggleSplitView(true)
    if (item.main_term && item.disc_url_id) {
      const { findTerms } = toJS(this.props.term)
      const href = `/${findTerms.join('/')}?urlId=${item.disc_url_id}`
      Router.push(
        {
          pathname: '/',
          query: { findTerms, urlId: item.disc_url_id }
        },
        href,
        { shallow: true }
      )
    } else if (item.url_id) {
      const { userShare } = this.props.store
      const href = userShare.user_id ? `/user-stream/${userShare.fullname}-${userShare.user_id}/?shareUrlId=${item.url_id}` : `/?shareUrlId=${item.url_id}`
      Router.push(
        {
          pathname: '/',
          query: { shareUrlId: item.url_id, userShareId: userShare.user_id }
        },
        href,
        { shallow: true }
      )
    }
  }

  onSelectChildTerm = (term) => {
    const { findTerms } = toJS(this.props.term)
    const { shareUrlId, urlId } = this.props
    const exist = findTerms.find(n => n === _.toLower(term.term_name))
    if (!(exist && exist.length)) {
      findTerms.push(_.toLower(term.term_name))
      this.props.term.resetPagination()
      this.props.term.getTermDiscover(term.term_id)
      this.props.term.addNewTerm(term)
      this.props.term.setCurrentUserData({})
      this.props.term.setCurrentShareTerm({})
      const href = urlId > 0 ? `/${findTerms.join('/')}?urlId=${urlId}` : shareUrlId > 0 ? `/${findTerms.join('/')}?shareUrlId=${shareUrlId}` : `/${findTerms.join('/')}`
      Router.push(
        {
          pathname: '/',
          query: urlId > 0 ? { findTerms, urlId } : { findTerms, shareUrlId }
        },
        href,
        { shallow: true }
      )
    }
  }

  onSelectChildTermDetail = (term) => {
    this.props.term.setCurrentUserData({})
    this.props.term.setCurrentShareTerm({})
    this.props.term.setCurrentTerms([].concat(term.term_name))
    this.props.term.resetPagination()
    this.props.term.getTermDiscover(term.term_id)
    this.props.term.addNewTerm(term)
    const href = this.props.urlId > 0 ? `/${term.term_name}?urlId=${this.props.urlId}` : `/${term.term_name}`
    Router.push(
      {
        pathname: '/',
        query: { findTerms: term.term_name, urlId: this.props.urlId }
      },
      href,
      { shallow: true }
    )
  }

  onSelectUser = (fromUser) => {
    if (fromUser) {
      const { shareUrlId, urlId } = this.props
      const href = urlId > 0 ? `/user-stream/${fromUser.fullname}-${fromUser.user_id}/?urlId=${urlId}`
                  : shareUrlId > 0 ? `/user-stream/${fromUser.fullname}-${fromUser.user_id}/?shareUrlId=${shareUrlId}`
                  : `/user-stream/${fromUser.fullname}-${fromUser.user_id}`
      Router.push(
        {
          pathname: '/',
          query: urlId > 0 ? { userShareId: fromUser.user_id, urlId } : { userShareId: fromUser.user_id, shareUrlId }
        },
        href,
        { shallow: true }
      ).then(() => window.scrollTo(0, 0))
    }
  }

  onBack = (term) => {
    const { shareUrlId, urlId } = this.props
    const position = _.findIndex(this.props.term.findTerms, item => isSameStringOnUrl(item, term.term_name))
    const terms = _.dropRight(this.props.term.findTerms, this.props.term.findTerms.length - position)
    if (terms.length) {
      const href = urlId > 0 ? `/${terms.join('/')}?urlId=${urlId}` : shareUrlId > 0 ? `/${terms.join('/')}?shareUrlId=${shareUrlId}` : `/${terms.join('/')}`
      Router.push(
        {
          pathname: '/',
          query: { findTerms: terms, urlId, shareUrlId }
        },
        href,
        { shallow: true }
      )
    } else if (term.shareTerm) {
      this.props.term.setCurrentShareTerm({})
      if (shareUrlId > 0) {
        const href = `/user-stream/${term.userData.fullname}-${term.userData.user_id}?shareUrlId=${shareUrlId}`
        Router.push(
          {
            pathname: '/',
            query: { shareUrlId, userShareId: term.userData.user_id }
          },
          href,
          { shallow: true }
        )
      } else {
        const href = `/user-stream/${term.userData.fullname}-${term.userData.user_id}`
        Router.push(
          {
            pathname: '/',
            query: { userShareId: term.userData.user_id }
          },
          href,
          { shallow: true }
        )
      }
    } else if (term.userData && !term.shareTerm) {
      this.props.term.setCurrentUserData({})
      this.props.term.setCurrentShareTerm({})
      if (shareUrlId > 0) {
        const href = `/?shareUrlId=${shareUrlId}`
        Router.push(
          {
            pathname: '/',
            query: { shareUrlId }
          },
          href,
          { shallow: true }
        )
      } else if (this.props.store.userId > 0) {
        const { user } = this.props.store
        if (user) {
          Router.push({ pathname: '/', query: { profileUrl: `/${user.nav_id}` } }, `/${user.nav_id}`)
          this.props.term.restoreLastPagination()
        } else {
          Router.push('/')
        }
      } else {
        Router.push('/')
      }
    } else {
      if (urlId > 0) {
        const href = `/?urlId=${urlId}`
        Router.push(
          {
            pathname: '/',
            query: { urlId }
          },
          href,
          { shallow: true }
        )
      } else if (shareUrlId > 0) {
        const href = `/?shareUrlId=${shareUrlId}`
        Router.push(
          {
            pathname: '/',
            query: { shareUrlId }
          },
          href,
          { shallow: true }
        )
      } else if (this.props.store.userId > 0) {
        const { user } = this.props.store
        if (user) {
          Router.push({ pathname: '/', query: { profileUrl: `/${user.nav_id}` } }, `/${user.nav_id}`)
          this.props.term.restoreLastPagination()
        } else {
          Router.push('/')
        }
      } else {
        Router.push('/')
      }
    }
  }

  onChangeLayoutSize = () => {
    this.setState({
      innerWidth: window.innerWidth
    })
  }

  getCurrentTerm = (termId) => {
    if (this.props.term.termsCache[termId]) {
      return toJS(this.props.term.termsCache[termId])
    } else {
      return false
    }
  }

  cleanClassName = () => {
    logger.info('DiscoveryList cleanClassName', this.animateEl)
    /* global $ */
    if (this.animateEl && typeof $ !== 'undefined') {
      $(this.animateEl).removeClass('bounceInLeft animated bounceInRight')
    }
  }

  onDragStarted = (width) => {
    const overlay = document.querySelector('#overlay')
    if (overlay) {
      overlay.style.display = 'block'
    }
  }

  onDragFinished = (width) => {
    const overlay = document.querySelector('#overlay')
    if (overlay) {
      overlay.style.display = 'none'
    }
    this.forceRenderForSticky()
  }

  onSplitChange = (width) => {
    if (width) {
      this.props.ui.resizeSplitter(width)
    }
  }

  forceRenderForSticky = () => {
    if (document.querySelector('div[class=" sticky"]')) {
      // scroll down 1px for re-render for sticky
      /* global $ */
      $(window).scrollTop($(window).scrollTop() + 1)
    }
  }

  closePreview = () => {
    this.props.ui.toggleSplitView(false)
    this.props.ui.removeDiscoveryItem()
    this.props.ui.resizeSplitter(window.innerWidth / 2)
    this.setState({
      innerWidth: window.innerWidth
    })
    const { findTerms } = toJS(this.props.term)
    const { userShare } = this.props.store
    if (findTerms.length) {
      const href = `/${findTerms.join('/')}`
      Router.push(
        {
          pathname: '/',
          query: { findTerms }
        },
        href,
        { shallow: true }
      )
    } else if (userShare.user_id) {
      const href = `/user-stream/${userShare.fullname}-${userShare.user_id}/`
      Router.push(
        {
          pathname: '/',
          query: { shareUrlId: item.url_id, userShareId: userShare.user_id }
        },
        href,
        { shallow: true }
      )
    } else if (this.props.store.userId > 0) {
      const { user } = this.props.store
      if (user) {
        Router.push({ pathname: '/', query: { profileUrl: `/${user.nav_id}` } }, `/${user.nav_id}`, { shallow: true })
      } else {
        Router.push('/')
      }
    } else {
      Router.push('/')
    }
  }

  renderTermList = (ingoreTerms, discoveryTermId, terms, urlId, shareUrlId) => {
    if (this.props.term.isProcessingDiscoverTerm) {
      return <div className='grid-auto'><DiscoveryListLoading number={20} /></div>
    }
    let items = []
    const { discoveries, findTerms } = toJS(this.props.term)
    const { userShare, friendsStream, ownStream, friendsTopics, ownTopics, user } = this.props.store
    if (userShare.user_id) {
      if (userShare.user_id === user.id) {
        _.forEach(ownStream, (item, index) => {
          const currentTopics = _.filter(ownTopics, topic => topic.urlIds && _.indexOf(topic.urlIds, item.url_id) !== -1)
          const maxLevel = _.maxBy(currentTopics, 'level')
          const topic = _.filter(currentTopics, item => item.level === maxLevel.level)[0]
          if (topic) {
            const term = this.getCurrentTerm(topic.id) || { term_name: topic.name, term_id: topic.id }
            items.push(
              <DiscoveryItem
                key={`${item.url_id}-${item.href}-${index}`}
                main_term_name={term.term_name}
                main_term_img={term.img}
                main_term_id={term.term_id}
                main_term={term}
                onSelect={this.onSelect}
                onSelectTerm={this.onSelectChildTerm}
                onSelectUser={this.onSelectUser}
                selected={shareUrlId === item.url_id}
                url={item.href} 
                desc={item.href} 
                {...item}
            />)
          } else {
            items.push(
              <DiscoveryItem
                key={`${item.url_id}-${item.href}-${index}`}
                onSelect={this.onSelect}
                onSelectUser={this.onSelectUser}
                selected={shareUrlId === item.url_id}
                url={item.href} 
                desc={item.href} 
                {...item}
            />)
          }
        })
        return <div className='grid-auto'>{items}</div>
      }
      _.forEach(friendsStream, (item, index) => {
        const currentTopics = _.filter(friendsTopics, topic => topic.urlIds && _.indexOf(topic.urlIds, item.url_id) !== -1)
        const maxLevel = _.maxBy(currentTopics, 'level')
        const topic = _.filter(currentTopics, item => item.level === maxLevel.level)[0]
        if (topic) {
          const term = this.getCurrentTerm(topic.id) || { term_name: topic.name, term_id: topic.id }
          items.push(
            <DiscoveryItem
              key={`${item.url_id}-${item.href}-${index}`}
              main_term_name={term.term_name}
              main_term_img={term.img}
              main_term_id={term.term_id}
              main_term={term}
              onSelect={this.onSelect}
              onSelectUser={this.onSelectUser}
              onSelectTerm={this.onSelectChildTerm}
              selected={shareUrlId === item.url_id}
              url={item.href} 
              desc={item.href}
              {...item}
          />)
        } else {
          items.push(
            <DiscoveryItem
              key={`${item.url_id}-${item.href}-${index}`}
              onSelect={this.props.onSelect}
              onSelectUser={this.onSelectUser}
              selected={shareUrlId === item.url_id}
              url={item.href} 
              desc={item.href} 
              {...item}
          />)
        }
      })
      return <div className='grid-auto'>{items}</div>
    }
    if (findTerms.length) {
      const topics = _.find(terms, item => item.termId === discoveryTermId)
      if (topics && topics.discoveries && topics.discoveries.length) {
        _.forEach(topics.discoveries, (item) => {
          /* eslint-disable camelcase */
          const term = this.getCurrentTerm(item.main_term_id)
          const subTerm = this.getCurrentTerm(item.sub_term_id)
          if (term && subTerm) {
            const { img: main_term_img, term_name: main_term_name } = term
            const { img: sub_term_img, term_name: sub_term_name } = subTerm
            items.push(
              <DiscoveryItem
                key={`${item.disc_url_id}-${item.url}`}
                ingoreTerms={ingoreTerms}
                main_term_img={main_term_img}
                main_term_name={main_term_name}
                main_term={term}
                sub_term={subTerm}
                sub_term_img={sub_term_img}
                sub_term_name={sub_term_name}
                onSelect={this.onSelect}
                onSelectTerm={this.onSelectChildTerm}
                selected={urlId === item.disc_url_id}
                {...item}
              />
            )
          }
        })
        return <div className='grid-auto'>{items}</div>
      }
    }
    _.forEach(discoveries, (item, index) => {
      /* eslint-disable camelcase */
      if (item.main_term_id) {
        const term = this.getCurrentTerm(item.main_term_id)
        const subTerm = this.getCurrentTerm(item.sub_term_id)
        if (term && subTerm) {
          const { img: main_term_img, term_name: main_term_name } = term
          const { img: sub_term_img, term_name: sub_term_name } = subTerm
          items.push(
            <DiscoveryItem
              key={`${item.disc_url_id}-${item.url}`}
              ingoreTerms={ingoreTerms}
              main_term_img={main_term_img}
              main_term_name={main_term_name}
              main_term={term}
              sub_term={subTerm}
              sub_term_img={sub_term_img}
              sub_term_name={sub_term_name}
              onSelect={this.onSelect}
              onSelectTerm={this.onSelectChildTerm}
              selected={urlId === item.disc_url_id}
              {...item}
            />
          )
        }
      }
    })
    return <div className='grid-auto'>{items}</div>
  }

  renderDetail = () => {
    const { isSplitView, spliterWidth, discoveryUrlId, discoveryTermId, selectedDiscoveryItem: { disc_url_id: urlId, url_id: shareUrlId, url, title, utc, hit_utc, fromUser: userData, main_term_id: termId, main_term_related_suggestions_term_ids: termIds } } = toJS(this.props.ui)
    const { terms, findTerms, termsInfo } = toJS(this.props.term)
    const { userShare } = this.props.store
    const ingoreTerms = []
    _.forEach(findTerms, item => {
      const term = _.find(termsInfo.terms, term => isSameStringOnUrl(term.term_name, item))
      if (term) {
        const { term_id: termId } = term
        ingoreTerms.push(termId)
      }
    })
    const items = []
    if (termIds) {
      _.forEach(termIds, id => {
        if (id !== termId) {
          const term = this.getCurrentTerm(id)
          if (term) {
            items.push(term)
          }
        }
      })
    }
    const fullscreen = window.innerWidth < 690
    if (isSplitView && discoveryUrlId !== -1 && !fullscreen) {
      const rightWidth = (window.innerWidth - spliterWidth || window.innerWidth / 2) - (window.innerWidth - spliterWidth || window.innerWidth / 2) % 250
      return (
        <div className='discovery-list' style={{ width: '100%', height: '100vh' }}>
          <SplitPane
            split='vertical'
            minSize={330}
            maxSize={window.innerWidth - 330}
            defaultSize={window.innerWidth / 2}
            style={{ position: 'relative', overflow: 'visible' }}
            onDragStarted={this.onDragStarted}
            onDragFinished={this.onDragFinished}
            onChange={width => this.onSplitChange(width)}
            pane2Style={{ overflowY: 'auto', overflowX: 'hidden' }}
            >
            <Sticky>
              <div id='overlay' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'none', opacity: 0 }} />
              <DiscoveryDetail
                items={items}
                title={title}
                termIds={termIds}
                url={url}
                discoveryUrlId={discoveryUrlId}
                utc={utc || hit_utc}
                userData={userData}
                onSelectTerm={this.onSelectChildTermDetail}
                width={'100%'}
                type={shareUrlId ? 'share' : 'discovery'}
              />
            </Sticky>
            <div>
              <DiscoveryPath
                onBack={this.onBack}
                onSelectChildTerm={this.onSelectChildTerm}
              />
              <div className='split-view' style={{ width: rightWidth }}>
                { (discoveryTermId > 0 || userShare.user_id) && this.renderTermList(ingoreTerms, discoveryTermId, terms, urlId, shareUrlId)}
                { (discoveryTermId > 0 || userShare.user_id) || this.renderRootList(urlId, shareUrlId, window.innerWidth - spliterWidth)}
              </div>
            </div>
          </SplitPane>
          <div className='close_button' onClick={this.closePreview} style={{left: fullscreen ? '90%' : (spliterWidth || window.innerWidth / 2) - 15}} />
        </div>
      )
    }
    if (discoveryTermId > 0 || userShare.user_id) {
      return this.renderTermList(ingoreTerms, discoveryTermId, terms, urlId, shareUrlId)
    }
    return (
      <div className='discovery-list'>
        <DiscoveryDetail
          items={items}
          title={title}
          termIds={termIds}
          url={url}
          discoveryUrlId={discoveryUrlId}
          utc={utc || hit_utc}
          userData={userData}
          onSelectTerm={this.onSelectChildTermDetail}
          width={'100%'}
          type={shareUrlId ? 'share' : 'discovery'}
        />
        <div className='close_button' onClick={this.closePreview} style={{left: fullscreen ? '90%' : (spliterWidth || window.innerWidth / 2) - 15}} />
      </div>
    )
  }

  renderRootList = (urlId, shareUrlId, rightWidth) => {
    return (
      <div className='discovery-list'>
        <DiscoveryRoot
          getCurrentTerm={this.getCurrentTerm}
          onSelect={this.onSelect}
          onSelectChildTerm={this.onSelectChildTerm}
          onSelectShareTerm={this.onSelectShareTerm}
          onSelectUser={this.onSelectUser}
          urlId={urlId}
          shareUrlId={shareUrlId}
          rightWidth={rightWidth}
          />
      </div>
    )
  }

  preloadTermsOnBg = (discoveries, terms) => {
    const preloadTermIds = []
    if (discoveries.length && this.props.ui.isRootView) {
      _.forEach(discoveries, (item) => {
        /* eslint-disable camelcase */
        if (!preloadTermIds.includes(item.main_term_id)) preloadTermIds.push(item.main_term_id)
        if (!preloadTermIds.includes(item.sub_term_id)) preloadTermIds.push(item.sub_term_id)
      })
    }
    if (terms.length && !this.props.ui.isRootView) {
      _.forEach(terms, (term) => {
        _.forEach(term.discoveries, (item) => {
          /* eslint-disable camelcase */
          if (!preloadTermIds.includes(item.main_term_id)) preloadTermIds.push(item.main_term_id)
          if (!preloadTermIds.includes(item.sub_term_id)) preloadTermIds.push(item.sub_term_id)
        })
      })
    }
    _.forEach(preloadTermIds, termId => this.props.term.preloadTerm(termId))
  }

  componentWillUpdate () {
    logger.warn('DiscoveryList componentWillUpdate')
    this.cleanClassName()
  }

  componentWillReact () {
    const { discoveries, terms } = this.props.term
    logger.warn('DiscoveryList componentWillReact', toJS(discoveries), toJS(terms))
    this.preloadTermsOnBg(discoveries, terms)
  }

  componentDidMount () {
    logger.warn('DiscoveryList componentDidMount')
    this.props.ui.resizeSplitter(window.innerWidth / 2)
    this.setState({
      innerWidth: window.innerWidth
    })
    const { userId, userHash } = this.props.store
    this.props.term.setApiToken(userId, userHash)
  }

  render () {
    const { isSplitView } = toJS(this.props.ui)
    const { userShare } = toJS(this.props.store)
    return (
      <div className='topic-tree'>
        {
          (!(this.props.ui.isRootView || isSplitView) || (userShare.user_id && !isSplitView)) &&
          <DiscoveryPath
            onBack={this.onBack}
            onSelectChildTerm={this.onSelectChildTerm}
          />
        }
        <ReactResizeDetector handleWidth handleHeight onResize={this.onChangeLayoutSize} />
        <div className='main-inner'>
          <div className='container-masonry'>
            <div ref={(el) => { this.animateEl = el }} className={this.props.ui.animateClassName}>
              { (!this.props.ui.isRootView || userShare.user_id)
                ? this.renderDetail()
                : <div className='grid-auto'>
                  {this.renderRootList()}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoveryList
