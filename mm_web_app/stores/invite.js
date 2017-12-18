import { action, reaction, when, observable } from 'mobx'
import { HomeStore } from './home'
import { MAOMAO_SITE_URL } from '../containers/App/constants'
import { acceptInvite, getShareInfo, getShareUrl } from '../services/share'
import { fetchImageSearchByTerm } from '../services/crawler'

let store = null

class InviteStore extends HomeStore {
  @observable shareCode = ''
  @observable bgImage = ''
  @observable acceptInviteResult = {}
  @observable inviteResult = {}
  @observable shareInfo = {}
  @observable serverShareInfo = {}
  @observable serverShareUrl = {}

  constructor (isServer, userAgent, user, shareCode, shareInfo) {
    super(isServer, userAgent, user, false)
    this.shareCode = shareCode
    this.shareInfo = shareInfo
    this.user = user
    reaction(() => this.userHash.length,
     (userHash) => {
       if (userHash > 0) {
         this.acceptInviteCode()
       }
     })
  }

  @action searchBgImage () {
    const { topic_title: topicTitle } = this.shareInfo
    if (topicTitle) {
      return fetchImageSearchByTerm(topicTitle, 1)
    }
    return Promise.resolve(`${MAOMAO_SITE_URL}static/images/logo.png`)
  }
  
  @action acceptInviteCode () {
    this.acceptInviteResult = acceptInvite(this.userId, this.userHash, this.shareCode)
    when(
      () => this.acceptInviteResult.state !== 'pending',
      () => {
        this.inviteResult = this.acceptInviteResult.value
        if (this.isHome) {
          this.getUserOwn(0)
          this.getUserFriends(0)
        }
      }
    )
  }
  
  @action getShareInfo () {
    this.serverShareInfoResult = getShareInfo(this.shareCode)
    when(
      () => this.serverShareInfoResult.state !== 'pending',
      () => {
        this.serverShareInfo = this.serverShareInfoResult.value
      }
    )
  }
  
  @action getShareUrl () {
    this.serverShareUrlResult = getShareUrl(this.userId, this.userHash, this.shareCode)
    when(
      () => this.serverShareUrlResult.state !== 'pending',
      () => {
        this.serverShareUrl = this.serverShareUrlResult.value
      }
    )
  }
}

export function initStore (isServer, userAgent = '', user = null, shareCode = '', shareInfo = {}) {
  if (isServer && typeof window === 'undefined') {
    return new InviteStore(isServer, userAgent, user, shareCode, shareInfo)
  } else {
    if (store === null) {
      store = new InviteStore(isServer, userAgent, user, shareCode, shareInfo)
    }
    return store
  }
}
