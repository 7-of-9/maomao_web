import React from 'react'
import { Provider } from 'mobx-react'
import Error from 'next/error'
import 'isomorphic-fetch'
import _ from 'lodash'
import { initStore } from '../stores/home'
import { initUIStore } from '../stores/ui'
import { initTermStore } from '../stores/term'
import { initNotificationStore } from '../stores/notification'
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
    const notificationStore = initNotificationStore(isServer)
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
    let shareUrlId = query && query.shareUrlId ? Number(query.shareUrlId) : -1
    let userShareId = query && query.userShareId ? Number(query.userShareId) : -1
    store.getUserOwn(0)
    store.getUserFriends(0)
    const term = initTermStore(isServer, findTerms, termsInfo)
    return { isServer, ...store, ...uiStore, ...term, ...notificationStore, findTerms, termsInfo, statusCode, profileUrl, currentUser, urlId, shareUrlId, userShareId }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.userAgent, props.user, false)
    this.uiStore = initUIStore(props.isServer)
    this.notificationStore = initNotificationStore(props.isServer)
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
    if (this.store.isLogin && this.store.user) {
      this.setState({ profileUrl: `/${this.store.user.nav_id}` })
    }
    this.setState({
      urlId: this.props.urlId,
      shareUrlId: this.props.shareUrlId,
      userShareId: this.props.userShareId
    })
    this.term.getTopicTree()
    this.term.getFollowedTopics()
    this.store.getUserOwn(0)
    if (this.props.userShareId > 0) {
      this.store.getUserFriends(0, this.props.userShareId)
    } else {
      if (this.store.friendsPage === 0) {
        this.store.getUserFriends(0)
      }
    }
  }

  componentDidMount () {
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
    if (Number(this.state.urlId) > 0 || Number(this.state.shareUrlId) > 0) {
      const { urlId, shareUrlId } = this.state
      console.log('test share url', shareUrlId)
      this.uiStore.toggleSplitView(true)
      if (urlId > 0) {
        this.term.getSelectDiscoverItem(urlId, discoveryItem => {
          this.uiStore.selectDiscoveryItem(discoveryItem)
        })
      } else if (shareUrlId > 0) {
        this.store.getSelectSharedItem(shareUrlId, discoveryItem => {
          this.uiStore.selectDiscoveryItem(discoveryItem)
        })
      }
    } else {
      this.uiStore.toggleSplitView(false)
    }
    const { userShareId } = this.state
    if (userShareId > 0) {
      this.store.getUserFriends(0, userShareId)
    } else {
      if (this.store.friendsPage === 0) {
        this.store.getUserFriends(0)
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    // back button on browser logic
    const { query } = nextProps.url
    // fetch data based on the new query
    const { findTerms, profileUrl, urlId, shareUrlId, userShareId, topicShareName } = query
    if (profileUrl) {
      if (profileUrl !== this.state.profileUrl) {
        this.setState({ profileUrl })
      }
      this.term.setCurrentTerms([])
      this.uiStore.backToRootDiscovery()
    } else if ((urlId || shareUrlId) && !findTerms) {
      this.term.setCurrentTerms([])
      this.uiStore.selectDiscoveryTerm(-1)
      this.term.getRootDiscover(0)
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
    } else if (!profileUrl && !(urlId || shareUrlId)) {
      this.term.setCurrentTerms([])
    }
    if (urlId && urlId !== this.state.urlId && (!shareUrlId || shareUrlId <= 0)) {
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
    } else if (!urlId) {
      this.setState({ urlId: -1 })
    }
    if (shareUrlId && shareUrlId !== this.state.shareUrlId && (!urlId || urlId <= 0)) {
      this.setState({ shareUrlId })
      if (Number(shareUrlId) > 0) {
        // preview current item
        this.uiStore.toggleSplitView(true)
        this.store.getSelectSharedItem(shareUrlId, discoveryItem => {
          this.uiStore.selectDiscoveryItem(discoveryItem)
        })
      } else {
        this.uiStore.toggleSplitView(false)
      }
    } else if (!shareUrlId) {
      this.setState({ shareUrlId: -1 })
    }
    if (userShareId > 0 && userShareId !== this.state.userShareId) {
      this.store.getUserFriends(0, userShareId)
    } else {
      if (this.store.friendsPage === 0) {
        this.store.getUserFriends(0)
      }
    }
  }

  isDiscoverMode = () => {
    return (this.term.findTerms && this.term.findTerms.length > 0) || this.term.userData.user_id || this.state.urlId > 0 || this.state.shareUrlId > 0 || this.state.profileUrl.length > 0 || this.store.isLogin
  }

  render () {
    if (_.isNumber(this.props.statusCode)) {
      return <Error statusCode={this.props.statusCode} />
    }
    const { profileUrl, urlId, shareUrlId } = this.state
    return (
      <Provider store={this.store} term={this.term} ui={this.uiStore} notificationStore={this.notificationStore}>
        {
          this.isDiscoverMode()
            ? <div className='discover'>
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <Discover profileUrl={profileUrl} urlId={Number(urlId)} shareUrlId={Number(shareUrlId)} />
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
