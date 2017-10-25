import React from 'react'
import { Provider } from 'mobx-react'
import Error from 'next/error'
import 'isomorphic-fetch'
import _ from 'lodash'
import { initStore } from '../stores/home'
import { initUIStore } from '../stores/ui'
import { initTermStore } from '../stores/term'
import { MAOMAO_API_URL } from '../containers/App/constants'
import Discover from '../containers/Discover'
import Home from '../containers/Home'
import stylesheet from '../styles/index.scss'
import { isSameStringOnUrl } from '../utils/helper'
import logger from '../utils/logger'

export default class IndexPage extends React.Component {
  state = {
    profileUrl: '',
    urlId: -1
  }

  static async getInitialProps ({ req, query }) {
    const isServer = !!req
    let userAgent = ''
    if (req && req.headers && req.headers['user-agent']) {
      userAgent = req.headers['user-agent']
    }
    const user = req && req.session ? req.session.currentUser : null
    const store = initStore(isServer, userAgent, user, false)
    const uiStore = initUIStore(isServer)
    let termsInfo = { terms: [] }
    let findTerms = []
    let statusCode = !query.profileUrl
    let profileUrl = query.profileUrl ? query.profileUrl : ''
    let currentUser = query.currentUser ? query.currentUser : null
    if (query && query.findTerms) {
      findTerms = query.findTerms
      const termsResult = await IndexPage.lockupTerms(findTerms, statusCode, termsInfo)
      logger.info('termsResult', termsResult)
      statusCode = termsResult.statusCode
      termsInfo = termsResult.termsInfo
    }
    let urlId = query && query.urlId ? Number(query.urlId) : -1
    const term = initTermStore(isServer, findTerms, termsInfo)
    return { isServer, ...store, ...uiStore, ...term, findTerms, termsInfo, statusCode, profileUrl, currentUser, urlId }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.userAgent, props.user, false)
    this.uiStore = initUIStore(props.isServer)
    this.store.checkEnvironment()
    this.term = initTermStore(props.isServer, props.findTerms, props.termsInfo)
  }

  static async lockupTerms (findTerms, statusCode, termsInfo) {
    if (_.isArray(findTerms)) {
      const lockupTerms = _.map(findTerms, item => `names[]=${item}`).join('&')
      logger.info('fetch URL', `${MAOMAO_API_URL}term/lookup?${lockupTerms}`)
      /* global fetch */
      const res = await fetch(`${MAOMAO_API_URL}term/lookup?${lockupTerms}`)
      const json = await res.json()
      statusCode = res.statusCode > 200 ? res.statusCode : false
      logger.info('fetch json', json)
      termsInfo = json
      if (_.indexOf(termsInfo.terms, null) !== -1 || termsInfo.terms.length !== findTerms.length) {
        statusCode = 404
      }
    } else {
      logger.info('fetch URL', `${MAOMAO_API_URL}term/lookup?names[]=${findTerms}`)
      /* global fetch */
      const res = await fetch(`${MAOMAO_API_URL}term/lookup?names[]=${findTerms}`)
      const json = await res.json()
      statusCode = res.statusCode > 200 ? res.statusCode : false
      logger.info('fetch json', json)
      termsInfo = json
      if (_.indexOf(termsInfo.terms, null) !== -1) {
        statusCode = 404
      }
    }
    return { statusCode, termsInfo }
  }

  componentWillMount () {
    if (this.props.profileUrl) {
      this.setState({ profileUrl: this.props.profileUrl })
    }
    if (this.props.urlId) {
      this.setState({ urlId: this.props.urlId })
    }
    if (this.store.isLogin && this.store.user) {
      this.setState({ profileUrl: `/${this.store.user.nav_id}` })
    }
    this.term.getTopicTree()
  }

  componentDidMount () {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          logger.info('service worker registration successful')
        })
        .catch(err => {
          logger.warn('service worker registration failed', err.message)
        })
    }
    const { findTerms, termsInfo } = this.term
    if (this.props.statusCode === false) {
      if (termsInfo.terms && termsInfo.terms.length) {
        const currentTerm = _.find(termsInfo.terms, item => isSameStringOnUrl(item.term_name, findTerms[findTerms.length - 1]))
        this.term.setTerms(termsInfo.terms)
        if (currentTerm && currentTerm.term_id) {
          this.uiStore.selectDiscoveryTerm(currentTerm.term_id)
          this.term.getTermDiscover(currentTerm.term_id)
        }
      }
    }
    if (Number(this.state.urlId) > 0) {
      const { urlId } = this.state
      if (urlId) {
        // preview current item
        this.uiStore.toggleSplitView(true)
        this.term.getSelectDiscoverItem(urlId, discoveryItem => {
          this.uiStore.selectDiscoveryItem(discoveryItem)
        })
      }
    } else {
      this.uiStore.toggleSplitView(false)
    }
  }

  componentWillReceiveProps (nextProps) {
    // back button on browser logic
    const { query } = nextProps.url
    // fetch data based on the new query
    const { findTerms, profileUrl, urlId } = query
    if (profileUrl) {
      if (profileUrl !== this.state.profileUrl) {
        this.setState({ profileUrl })
      }
      this.term.setCurrentTerms([])
      this.uiStore.backToRootDiscovery()
    } else if (urlId && !findTerms) {
      this.term.setCurrentTerms([])
      this.uiStore.selectDiscoveryTerm(-1)
      this.term.getRootDiscover()
    } else if (findTerms) {
      // edge case, term is a string, e.g: mm.rocks/nature
      if (_.isString(findTerms)) {
        this.term.setCurrentTerms([].concat(findTerms))
        const { termsInfo } = this.term
        const currentTerm = _.find(termsInfo.terms, item => isSameStringOnUrl(item.term_name, findTerms))
        this.term.setTerms(termsInfo.terms)
        if (currentTerm && currentTerm.term_id) {
          this.uiStore.selectDiscoveryTerm(currentTerm.term_id)
          this.term.getTermDiscover(currentTerm.term_id)
        }
      } else {
        this.term.setCurrentTerms(findTerms)
        const { termsInfo } = this.term
        const currentTerm = _.find(termsInfo.terms, item => isSameStringOnUrl(item.term_name, findTerms[findTerms.length - 1]))
        this.term.setTerms(termsInfo.terms)
        if (currentTerm && currentTerm.term_id) {
          this.uiStore.selectDiscoveryTerm(currentTerm.term_id)
          this.term.getTermDiscover(currentTerm.term_id)
        }
      }
    }
    if (urlId !== this.state.urlId) {
      this.setState({ urlId })
      if (Number(urlId) > 0) {
        // preview current item
        this.uiStore.toggleSplitView(true)
        this.term.getSelectDiscoverItem(urlId, discoveryItem => {
          this.uiStore.selectDiscoveryItem(discoveryItem)
        })
      } else {
        this.uiStore.toggleSplitView(false)
      }
    }
  }

  isDiscoverMode = () => {
    return (this.term.findTerms && this.term.findTerms.length > 0) || this.state.urlId > 0 || this.state.profileUrl.length > 0 || this.store.isLogin
  }

  render () {
    if (_.isNumber(this.props.statusCode)) {
      return <Error statusCode={this.props.statusCode} />
    }
    const { profileUrl, urlId } = this.state
    return (
      <Provider store={this.store} term={this.term} ui={this.uiStore}>
        {
          this.isDiscoverMode()
            ? <div className='discover'>
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <Discover profileUrl={profileUrl} urlId={Number(urlId)} />
            </div>
            : <div className='home'>
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <Home />
            </div>
        }
      </Provider>
    )
  }
}
