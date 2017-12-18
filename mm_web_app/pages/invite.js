import React from 'react'
import { Provider, observer } from 'mobx-react'
import _ from 'lodash'
import { initStore } from '../stores/home'
import { initStore as initInviteStore } from '../stores/invite'
import { initUIStore } from '../stores/ui'
import { initTermStore } from '../stores/term'
import { initNotificationStore } from '../stores/notification'
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
    const notificationStore = initNotificationStore(isServer)
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
    return { isServer, ...store, ...uiStore, ...term, ...inviteStore, ...notificationStore }
  }

  constructor (props) {
    super(props)
    logger.info('Invite', props)
    this.uiStore = initUIStore(props.isServer)
    this.term = initTermStore(props.isServer, props.findTerms, props.termsInfo)
    this.notificationStore = initNotificationStore(props.isServer)
    this.inviteStore = initInviteStore(props.isServer, props.userAgent, props.user, props.shareCode, props.shareInfo)
    this.inviteStore.bgImage = props.bgImage
    this.inviteStore.checkEnvironment()
    this.store = initStore(props.isServer, props.userAgent, props.user, false)
    this.store.checkEnvironment()
    this.store.shareInfo = this.inviteStore.shareInfo
    this.store.shareCode = this.inviteStore.shareCode
    this.inviteStore.getShareInfo()
    if (this.store.isLogin) {
      this.inviteStore.getShareUrl()
    }
  }

  componentWillMount () {
    this.term.getTopicTree()
  }

  componentDidMount () {
    logger.info('Invite componentDidMount', this.inviteStore)

    const { url_id: shareUrlId, fullname, topic_title: topicTitle, source_user_id: userId } = this.inviteStore.shareInfo
    if (shareUrlId) {
      this.notificationStore.setRedirectObject({ pathname: '/', query: { shareUrlId, shareCode: this.inviteStore.shareCode } }, `/?shareUrlId=${shareUrlId}&shareCode=${this.inviteStore.shareCode}`, { shallow: true })
    } else if (fullname) {
      if (topicTitle) {
        this.notificationStore.setRedirectObject({ pathname: '/', query: { fullname, userShareId: userId, topicShareName: topicTitle } }, `/user-stream/${fullname}-${userId}/${topicTitle}`, { shallow: true })
      } else {
        this.notificationStore.setRedirectObject({ pathname: '/', query: { fullname, userShareId: userId } }, `/user-stream/${fullname}-${userId}`, { shallow: true })
      }
    }
  }

  render () {
    logger.info('Invite render')
    return (
      <Provider store={this.store} term={this.term} ui={this.uiStore} inviteStore={this.inviteStore} notificationStore={this.notificationStore}>
        <div className='invite'>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Home />
        </div>
      </Provider>
    )
  }
}
