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
import InfiniteScroll from 'react-infinite-scroller'
import SplitPane from 'react-split-pane'
import DiscoveryPath from './DiscoveryPath'
import DiscoveryItem from './DiscoveryItem'
import DiscoveryDetail from './DiscoveryDetail'
import Loading from '../../components/Loading'
import { isSameStringOnUrl } from '../../utils/helper'
import logger from '../../utils/logger'

// const MARGIN_FOR_SLITTER = 50

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

  onSelect = (item) => {
    logger.info('onSelect', item)
    this.props.term.removeDiscoveryItem()
    this.props.ui.selectDiscoveryItem(item)
    if (this.props.ui.discoveryTermId > 0) {
      this.props.ui.toggleSplitView(true)
    }
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
  }

  onSelectChildTerm = (term) => {
    logger.info('onSelectChildTerm term', term)
    this.props.ui.selectDiscoveryTerm(term.term_id)
    const { findTerms } = toJS(this.props.term)
    findTerms.push(_.toLower(term.term_name))
    logger.info('findTerms', findTerms)
    this.props.term.getTermDiscover(term.term_id)
    this.props.term.setCurrentTerms(findTerms)
    this.props.term.addNewTerm(term)
    this.props.term.loadNewTerm(term.term_id)
    const href = this.props.urlId > 0 ? `/${findTerms.join('/')}?urlId=${this.props.urlId}` : `/${findTerms.join('/')}`
    Router.push(
      {
        pathname: '/',
        query: { findTerms, urlId: this.props.urlId }
      },
      href,
      { shallow: true }
    )
  }

  onBack = (term) => {
    logger.info('onBack term', term)
    const position = _.findIndex(this.props.term.findTerms, item => isSameStringOnUrl(item, term.term_name))
    const terms = _.dropRight(this.props.term.findTerms, this.props.term.findTerms.length - position)
    this.props.term.setCurrentTerms(terms)
    if (terms.length) {
      const href = this.props.urlId > 0 ? `/${terms.join('/')}?urlId=${this.props.urlId}` : `/${terms.join('/')}`
      Router.push(
        {
          pathname: '/',
          query: { findTerms: terms, urlId: this.props.urlId }
        },
        href,
        { shallow: true }
      )
      const currentTerm = _.find(this.props.term.termsInfo.terms, item => isSameStringOnUrl(item.term_name, terms[terms.length - 1]))
      if (currentTerm && currentTerm.term_id) {
        this.props.ui.selectDiscoveryTerm(currentTerm.term_id)
        this.props.term.getTermDiscover(currentTerm.term_id)
      }
    } else {
      if (this.props.store.userId > 0) {
        this.props.ui.backToRootDiscovery()
        const { user } = this.props.store
        if (user) {
          Router.push({ pathname: '/', query: { profileUrl: `/${user.nav_id}` } }, `/${user.nav_id}`, { shallow: true })
        }
      } else {
        Router.push('/', '/', { shallow: true })
      }
    }
  }

  onZoomLayout = () => {
    logger.info('onZoomLayout')
    this.props.ui.resizeSplitter(window.innerWidth / 2)
    this.setState({
      innerWidth: window.innerWidth
    })
  }

  getCurrentTerm = (termId) => {
    if (this.props.term.termsCache[termId]) {
      return toJS(this.props.term.termsCache[termId])
    } else {
      return { term_id: termId, term_name: '...', img: '/static/images/no-image.png', child_suggestions: [], child_topics: [] }
    }
  }

  cleanClassName = () => {
    logger.info('DiscoveryList cleanClassName', this.animateEl)
    /* global $ */
    if (this.animateEl && typeof $ !== 'undefined') {
      $(this.animateEl).removeClass('bounceInLeft animated bounceInRight')
    }
  }

  loadMore = () => {
    logger.info('DiscoveryList loadMore')
    this.props.term.loadMore()
  }

  onDragStarted = () => {
    logger.warn('onDragStarted')
    const overlay = document.querySelector('#overlay')
    if (overlay) {
      overlay.style.display = 'block'
    }
  }

  onDragFinished = (width) => {
    logger.warn('onDragFinished', width)
    const overlay = document.querySelector('#overlay')
    if (overlay) {
      overlay.style.display = 'none'
    }
    this.props.ui.resizeSplitter(width)
    this.forceRenderForSticky()
  }

  forceRenderForSticky = () => {
    if (document.querySelector('div[class=" sticky"]')) {
      logger.warn('forceUpdate')
      // scroll down 1px for re-render for sticky
      /* global $ */
      $(window).scrollTop($(window).scrollTop() + 1)
    }
  }

  closePreview = () => {
    this.props.ui.toggleSplitView(false)
    this.props.term.removeDiscoveryItem()
    this.props.ui.removeDiscoveryItem()
    this.props.ui.resizeSplitter(window.innerWidth / 2)
    this.setState({
      innerWidth: window.innerWidth
    })
    const { findTerms } = toJS(this.props.term)
    const href = `/${findTerms.join('/')}`
    Router.push(
      {
        pathname: '/',
        query: { findTerms }
      },
      href,
      { shallow: true }
    )
  }

  renderTermList = (ingoreTerms, discoveryTermId, terms, urlId) => {
    if (this.props.term.isLoading) {
      return <Loading isLoading />
    }
    if (terms.length) {
      const topics = _.find(terms, item => item.termId === discoveryTermId)
      if (topics && topics.discoveries && topics.discoveries.length) {
        const items = []
        _.forEach(topics.discoveries, (item) => {
          /* eslint-disable camelcase */
          if (urlId !== item.disc_url_id) {
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
                  sub_term_img={sub_term_img}
                  sub_term_name={sub_term_name}
                  onSelect={this.onSelect}
                  onSelectTerm={this.onSelectChildTerm}
                  {...item}
                />
              )
            }
          }
        })
        return items
      } else {
        return (<div className='split-view'>
          <p className='text-engine animated fadeInUp'>Coming soon...</p>
        </div>)
      }
    }
  }

  renderDetail = () => {
    logger.info('renderDetail')
    const { isSplitView, discoveryUrlId, discoveryTermId, selectedDiscoveryItem: { disc_url_id: urlId, url, title, utc, main_term_id: termId, main_term_related_suggestions_term_ids: termIds } } = toJS(this.props.ui)
    const { terms, discoveryItem } = toJS(this.props.term)
    if (discoveryItem) {
      this.props.ui.selectDiscoveryItem(discoveryItem)
      if (this.props.ui.discoveryUrlId > 0) {
        this.props.ui.toggleSplitView(true)
      }
    }

    const ingoreTerms = []
    if (discoveryTermId !== -1) {
      ingoreTerms.push(discoveryTermId)
    }
    if (termId !== -1) {
      ingoreTerms.push(termId)
    }
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
    if (isSplitView && discoveryUrlId !== -1) {
      return (
        <div className='discovery-list' style={{ width: '100%', minHeight: window.innerHeight }}>
          <SplitPane
            split='vertical'
            minSize={330}
            maxSize={window.innerWidth - 330}
            defaultSize={window.innerWidth / 2}
            style={{ position: 'relative', overflow: 'visible' }}
            onDragStarted={this.onDragStarted}
            onDragFinished={this.onDragFinished}
            >
            <Sticky>
              <div id='overlay' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'none', opacity: 0 }} />
              <DiscoveryDetail
                items={items}
                title={title}
                termIds={termIds}
                url={url}
                utc={utc}
                closePreview={this.closePreview}
                onSelectTerm={this.onSelectChildTerm}
                width={'100%'}
              />
            </Sticky>
            <div className='split-view'>
              {this.renderTermList(ingoreTerms, discoveryTermId, terms, urlId)}
            </div>
          </SplitPane>
        </div>
      )
    }
    logger.info('discoveryTermId', discoveryTermId)
    if (discoveryTermId > 0) {
      return this.renderTermList(ingoreTerms, discoveryTermId, terms, urlId)
    }
    return (
      <DiscoveryDetail
        items={items}
        title={title}
        termIds={termIds}
        url={url}
        utc={utc}
        width={'100%'}
        closePreview={this.closePreview}
        onSelectTerm={this.onSelectChildTerm}
      />
    )
  }

  renderRootList = () => {
    logger.info('renderRootList')
    const items = []
    const { discoveries } = toJS(this.props.term)
    _.forEach(discoveries, (item) => {
      /* eslint-disable camelcase */
      const term = this.getCurrentTerm(item.main_term_id)
      const subTerm = this.getCurrentTerm(item.sub_term_id)
      if (term && subTerm) {
        const { img: main_term_img, term_name: main_term_name } = term
        const { img: sub_term_img, term_name: sub_term_name } = subTerm
        items.push(
          <DiscoveryItem
            key={`${item.disc_url_id}-${item.url}`}
            main_term_img={main_term_img}
            main_term_name={main_term_name}
            sub_term_img={sub_term_img}
            sub_term_name={sub_term_name}
            onSelect={this.onSelect}
            onSelectTerm={this.onSelectChildTerm}
            {...item}
          />
        )
      }
    })
    return (<div className='discovery-list'> {items} </div>)
  }

  componentWillUpdate () {
    logger.info('DiscoveryList componentWillUpdate')
    this.cleanClassName()
  }

  componentWillReact () {
    const { userId, userHash } = this.props.store
    const { page } = this.props.term
    logger.info('DiscoveryList componentWillReact', userId, userHash, page)
  }

  componentDidMount () {
    const { userId, userHash } = this.props.store
    const { page } = this.props.term
    if (userId > 0) {
      this.props.term.getRootDiscover(userId, userHash, page)
    }
    logger.info('DiscoveryList componentDidMount', userId, userHash, page)
    this.props.ui.resizeSplitter(window.innerWidth / 2)
    this.setState({
      innerWidth: window.innerWidth
    })
  }

  componentWillReceiveProps (nextProps) {
    const { discoveryItem } = toJS(nextProps.term)
    if (discoveryItem) {
      nextProps.ui.selectDiscoveryItem(discoveryItem)
      if (nextProps.ui.discoveryUrlId > 0) {
        nextProps.ui.toggleSplitView(true)
      }
    }
  }

  render () {
    const { profileUrl } = this.props
    const { spliterWidth: currentWidth } = this.props.ui
    const { animationType, discoveryUrlId, discoveryTermId } = toJS(this.props.ui)
    logger.info('DiscoveryList render ', this.props.term.hasMore)
    const animateClassName = animationType === 'LTR' ? `grid-row bounceInLeft animated` : `grid-row bounceInRight animated`
    const isRootView = discoveryUrlId === -1 && discoveryTermId === -1
    return (
      <div className='topic-tree'>
        {
          !isRootView &&
          <DiscoveryPath
            currentWidth={currentWidth}
            onBack={this.onBack}
            onSelectChildTerm={this.onSelectChildTerm}
          />
        }
        <ReactResizeDetector handleWidth handleHeight onResize={this.onZoomLayout} />
        <div className='main-inner'>
          <div className='container-masonry'>
            <div ref={(el) => { this.animateEl = el }} className={animateClassName}>
              {
                isRootView && profileUrl.length > 0 &&
                <InfiniteScroll
                  pageStart={0}
                  loadMore={this.loadMore}
                  hasMore={this.props.term.hasMore}
                  loader={<Loading isLoading />}
                >
                  <div className='discover-root'>
                    {this.renderRootList()}
                  </div>
                </InfiniteScroll>
              }
              {
                isRootView && profileUrl.length > 0 &&
                <Loading isLoading={this.props.term.isLoading} />
              }
              {!isRootView && this.renderDetail()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoveryList
