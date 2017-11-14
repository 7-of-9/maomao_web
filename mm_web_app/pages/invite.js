import React from 'react'
import { Provider, observer } from 'mobx-react'
import _ from 'lodash'
import { initStore } from '../stores/home'
import { initStore as initInviteStore } from '../stores/invite'
import { initUIStore } from '../stores/ui'
import { initTermStore } from '../stores/term'
import Home from '../containers/Home'
import stylesheet from '../styles/index.scss'
import logger from '../utils/logger'

@observer
export default class Invite extends React.Component {
  static async getInitialProps ({ req, query: { code, shareInfo } }) {
    const isServer = !!req
    let userAgent = ''
    if (req && req.headers && req.headers['user-agent']) {
      userAgent = req.headers['user-agent']
    }
    const user = req && req.session ? req.session.currentUser : null
    logger.info('user', user)
    const store = initStore(isServer, userAgent, user, false)
    const inviteStore = initInviteStore(isServer, userAgent, user, code, shareInfo)
    const uiStore = initUIStore(isServer)
    logger.info('Invite', code, shareInfo)
    const bgImageResult = await inviteStore.searchBgImage()
    try {
      logger.info('bgImageResult', bgImageResult)
      const { result } = bgImageResult.data
      const images = _.filter(result, item => item.img && item.img.length > 0)
      if (images.length > 0) {
        inviteStore.bgImage = images[Math.floor(Math.random() * images.length)].img
      } else {
        inviteStore.bgImage = ''
      }
    } catch (err) {
      inviteStore.bgImage = ''
    }
    const term = initTermStore(isServer, [], { terms: [] })
    return { isServer, ...store, ...uiStore, ...term, ...inviteStore }
  }

  constructor (props) {
    super(props)
    logger.info('Invite', props)
    this.uiStore = initUIStore(props.isServer)
    this.term = initTermStore(props.isServer, props.findTerms, props.termsInfo)
    this.inviteStore = initInviteStore(props.isServer, props.userAgent, props.user, props.shareCode, props.shareInfo)
    this.inviteStore.bgImage = props.bgImage
    this.inviteStore.checkEnvironment()
    this.store = initStore(props.isServer, props.userAgent, props.user, false)
    this.store.checkEnvironment()
    this.store.shareInfo = this.inviteStore.shareInfo
    this.store.shareCode = this.inviteStore.shareCode
  }

  componentWillMount () {
    this.term.getTopicTree()
  }

  componentDidMount () {
    logger.info('Invite componentDidMount', this)
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          logger.log('service worker registration successful')
        })
        .catch(err => {
          logger.info('service worker registration failed', err.message)
        })
    }

    if (this.store.isLogin) {
      this.inviteStore.acceptInviteCode()
      this.uiStore.redirectToSpecialUrl(true)
      this.uiStore.addNotification('You will redirect to your profile.')
      window.location.href = '/'
    }
  }

  render () {
    logger.info('Invite render')
    return (
      <Provider store={this.store} term={this.term} ui={this.uiStore} inviteStore={this.inviteStore}>
        <div className='invite'>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Home />
        </div>
      </Provider>
    )
  }
}
