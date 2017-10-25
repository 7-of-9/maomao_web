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
import DiscoveryRoot from './DiscoveryRoot'
import DiscoveryItem from './DiscoveryItem'
import DiscoveryDetail from './DiscoveryDetail'
import Loading from '../../components/Loading'
import { isSameStringOnUrl } from '../../utils/helper'
import logger from '../../utils/logger'

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
    this.props.ui.selectDiscoveryItem(item)
    this.props.ui.toggleSplitView(true)
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
    const { findTerms } = toJS(this.props.term)
    const exist = findTerms.find(n => n === _.toLower(term.term_name))
    if (!(exist && exist.length)) {
      findTerms.push(_.toLower(term.term_name))
      this.props.term.resetPagination()
      this.props.term.getTermDiscover(term.term_id)
      this.props.term.addNewTerm(term)
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
  }

  onBack = (term) => {
    const position = _.findIndex(this.props.term.findTerms, item => isSameStringOnUrl(item, term.term_name))
    const terms = _.dropRight(this.props.term.findTerms, this.props.term.findTerms.length - position)
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
    } else {
      if (this.props.urlId > 0) {
        const href = `/?urlId=${this.props.urlId}`
        Router.push(
          {
            pathname: '/',
            query: { urlId: this.props.urlId }
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
    if (this.props.ui.isRootView) {
      this.props.term.loadMore()
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
    } else if (this.props.store.userId > 0) {
      const { user } = this.props.store
      if (user) {
        this.props.term.restoreLastPagination()
        Router.push({ pathname: '/', query: { profileUrl: `/${user.nav_id}` } }, `/${user.nav_id}`, { shallow: true })
      } else {
        Router.push('/')
      }
    } else {
      Router.push('/')
    }
  }

  renderTermList = (ingoreTerms, discoveryTermId, terms, urlId) => {
    if (this.props.term.isLoading) {
      return <Loading isLoading />
    }
    const items = []
    if (terms.length) {
      const topics = _.find(terms, item => item.termId === discoveryTermId)
      if (topics && topics.discoveries && topics.discoveries.length) {
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
      }
    }
    const { discoveries } = this.props.term
    _.forEach(discoveries, (item, index) => {
      /* eslint-disable camelcase */
      if (item.main_term_id) {
        const term = this.getCurrentTerm(item.main_term_id)
        const subTerm = this.getCurrentTerm(item.sub_term_id)
        if (urlId !== item.disc_url_id) {
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
      }
    })
    return items
  }

  renderDetail = () => {
    const { isSplitView, spliterWidth, discoveryUrlId, discoveryTermId, selectedDiscoveryItem: { disc_url_id: urlId, url, title, utc, main_term_id: termId, main_term_related_suggestions_term_ids: termIds } } = toJS(this.props.ui)
    const { terms, findTerms, termsInfo } = toJS(this.props.term)
    const ingoreTerms = []
    _.forEach(findTerms, item => {
      const term = _.find(termsInfo.terms, term => isSameStringOnUrl(term.term_name, item))
      if (term) {
        const { term_id: termId } = term
        ingoreTerms.push(termId)
      }
    })
    if (termId && termId !== -1) {
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
        <div className='discovery-list' style={{ width: '100%', height: 'calc(100vh - 140px)' }}>
          <SplitPane
            split='vertical'
            minSize={330}
            maxSize={window.innerWidth - 330}
            defaultSize={window.innerWidth / 2}
            style={{ position: 'relative', overflow: 'visible' }}
            onDragStarted={this.onDragStarted}
            onDragFinished={this.onDragFinished}
            onChange={width => this.onSplitChange(width)}
            pane2Style={{ overflow: 'auto' }}
            >
            <Sticky>
              <div id='overlay' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'none', opacity: 0 }} />
              <DiscoveryDetail
                items={items}
                title={title}
                termIds={termIds}
                url={url}
                utc={utc}
                onSelectTerm={this.onSelectChildTerm}
                width={'100%'}
              />
            </Sticky>
            <div className='split-view'>
              <DiscoveryPath
                onBack={this.onBack}
                onSelectChildTerm={this.onSelectChildTerm}
              />
              {this.renderTermList(ingoreTerms, discoveryTermId, terms, urlId)}
            </div>
          </SplitPane>
          <div className='close_button' onClick={this.closePreview} style={{left: (spliterWidth || window.innerWidth / 2) - 15}} />
        </div>
      )
    }
    if (discoveryTermId > 0) {
      return this.renderTermList(ingoreTerms, discoveryTermId, terms, urlId)
    }
    return (
      <div className='discovery-list' style={{ width: '100%', minHeight: window.innerHeight }}>
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
      </div>
    )
  }

  renderRootList = () => {
    return (
      <div className='discovery-list'>
        <DiscoveryRoot
          getCurrentTerm={this.getCurrentTerm}
          onSelect={this.onSelect}
          onSelectChildTerm={this.onSelectChildTerm}
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
    return (
      <div className='topic-tree'>
        {
          !(this.props.ui.isRootView || isSplitView) &&
          <DiscoveryPath
            onBack={this.onBack}
            onSelectChildTerm={this.onSelectChildTerm}
          />
        }
        <ReactResizeDetector handleWidth handleHeight onResize={this.onChangeLayoutSize} />
        <div className='main-inner'>
          <div className='container-masonry'>
            <div ref={(el) => { this.animateEl = el }} className={this.props.ui.animateClassName}>

              { !this.props.ui.isRootView
                ? this.renderDetail()
                : [
                  <InfiniteScroll
                    key='infinite-scroll-container'
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.props.term.hasLoadMore}
                    loader={<Loading isLoading />}
                     >
                    <div className='discover-root'>
                      { this.renderRootList() }
                    </div>
                  </InfiniteScroll>,
                  <Loading key='loading-for-main-scroll-container' isLoading={this.props.ui.isRootView && this.props.term.isLoading} />]
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscoveryList
