import { action, reaction, when, computed, toJS, observable } from 'mobx'
import _ from 'lodash'
import { CoreStore } from './core'
import { normalizedOwnData, normalizedFriends } from './schema/history'
import { loginWithGoogle, loginWithFacebook, testInternalUser, getUserOwnCall, getUserFriendsCall } from '../services/user'
import { safeBrowsingLoockup } from '../services/google'
import { addBulkTopics } from '../services/topic'
import { getShareUrl } from '../services/share'
import { acceptInvite, unfollow, pauseShare } from '../services/share'
import { sendMsgToChromeExtension, actionCreator } from '../utils/chrome'
import { md5hash } from '../utils/hash'
import logger from '../utils/logger'

let store = null

function flattenTopics (topics, counter = 0) {
  const result = []
  _.forEach(topics, item => {
    result.push({ level: counter, id: item.term_id, name: item.term_name, urlIds: item.url_ids, suggestions: item.suggestions })
    if (item.child_topics && item.child_topics.length) {
      result.push(...flattenTopics(item.child_topics, counter + 1))
    }
  })
  return result
}

export class HomeStore extends CoreStore {
  @observable isProcessingRegister = false
  @observable pendings = []
  @observable codes = {
    all: null,
    sites: [],
    topics: [],
    discoveries: []
  }
  @observable shareInfo = false
  @observable shareCode = false
  user = {}
  googleUser = {}
  facebookUser = {}
  isHome = false

  @observable friendsPage = 0
  @observable ownPage = 0
  @observable.shallow friendsStream = []
  @observable.shallow ownStream = []
  @observable friendsShare = { received: [], topics: [] }
  @observable userShare = {}
  @observable topicShare = {}
  @observable ownShare = { mine: {}, topics: [] }
  @observable normalizeFriendsShare = { entities: {}, result: {} }
  @observable normalizeOwnShare = { entities: {}, result: {} }
  @observable isProcessingFriendsStream = false
  @observable isProcessingOwnStream = false
  @observable friendsTopics = []
  @observable ownTopics = []
  friendsHasMore = false
  ownHasMore = false

  constructor (isServer, userAgent, user, isHome = true) {
    super(isServer, userAgent, user)
    this.user = user
    this.isHome = isHome
    reaction(() => this.userHash.length,
      (userHash) => {
        if (userHash > 0 && isHome) {
          this.getUserOwn(0)
          this.getUserFriends(0)
        }
      }
    )
    reaction(
      () => this.ownPage,
      () => {
        if (this.userId >= 0) {
          logger.warn('get own stream for page', this.ownPage, this.ownStream)
          if (this.ownPage < 0) {
            this.ownShare = []
          } else {
            this.getUserOwn(this.ownPage)
          }
        }
      }
    )
    reaction(
      () => this.friendsPage,
      () => {
        if (this.userId >= 0) {
          logger.warn('get own stream for page', this.friendsPage, this.friendsShare)
          if (this.friendsPage < 0) {
            this.friendsShare = []
          } else {
            this.getUserFriends(this.friendsPage)
          }
        }
      }
    )
  }

  @computed get isLoading () {
    return this.pendings.length > 0
  }

  @computed get isProcessing () {
    return this.isProcessingRegister || this.isProcessingHistory
  }

  @action saveTopics (ids) {
    logger.info('saveTopics', ids)
    if (ids && ids.length > 0) {
      const saveTopicRequest = addBulkTopics(this.userId, this.userHash, ids)
      when(
          () => saveTopicRequest.state !== 'pending',
          () => {
            logger.info('saveTopics result', saveTopicRequest.data)
          }
        )
    }
  }

  @action internalLogin (callback) {
    logger.info('internalLogin')
    const registerNewUser = testInternalUser()
    this.isProcessingRegister = true
    when(
      () => registerNewUser.state !== 'pending',
      () => {
        this.isProcessingRegister = false
        const { data } = registerNewUser.value
        const userHash = md5hash(data.id)
        this.isLogin = true
        this.userId = data.id
        this.userHash = userHash
        this.user = Object.assign({}, data, {name: `${data.firstname} ${data.lastname}`, picture: 'https://www.maomao.rocks/static/images/no-avatar.png'})
        // send data to chrome extension
        if (this.isInstalledOnChromeDesktop) {
          sendMsgToChromeExtension(actionCreator('USER_HASH', { userHash: data.id }))
          sendMsgToChromeExtension(actionCreator('AUTH_FULFILLED', {
            info: {
              ...data,
              name: `${data.firstname} ${data.lastname}`,
              picture: 'https://www.maomao.rocks/static/images/no-avatar.png'
            }
          }))
          sendMsgToChromeExtension(actionCreator('USER_AFTER_LOGIN', { userId: data.id }))
          sendMsgToChromeExtension(actionCreator('PRELOAD_SHARE_ALL', { userId: data.id }))
        }
        this.login(this.userId, this.userHash)
        callback && callback(Object.assign({}, this.user, {userHash}))
      }
    )
  }

  @action retrylLoginForInternalUser (user, callback) {
    logger.info('retrylLoginForInternalUser', user)
    const { id, userHash } = user
    this.isLogin = true
    this.userId = id
    this.userHash = userHash
    this.user = user
    if (this.isInstalledOnChromeDesktop) {
      sendMsgToChromeExtension(actionCreator('USER_HASH', { userHash: id }))
      sendMsgToChromeExtension(actionCreator('AUTH_FULFILLED', {
        info: user
      }))
      sendMsgToChromeExtension(actionCreator('USER_AFTER_LOGIN', { userId: id }))
      sendMsgToChromeExtension(actionCreator('PRELOAD_SHARE_ALL', { userId: id }))
    }
    this.login(this.userId, this.userHash)
    callback && callback(Object.assign({}, this.user, {userHash}))
  }

  @action googleConnect (info, callback) {
    logger.info('googleConnect', info)
    const googleConnectResult = loginWithGoogle(info)
    this.isProcessingRegister = true
    when(
      () => googleConnectResult.state !== 'pending',
      () => {
        this.isProcessingRegister = false
        const { data } = googleConnectResult.value
        const userHash = md5hash(info.google_user_id)
        this.isLogin = true
        this.userId = data.id
        this.userHash = userHash
        this.googleUser = Object.assign({}, data, { userHash }, info)
        this.user = Object.assign({}, data, {
          name: info.name,
          email: info.email || data.email,
          picture: info.picture
        })
        // send data to chrome extension
        if (this.isInstalledOnChromeDesktop) {
          sendMsgToChromeExtension(actionCreator('USER_HASH', { userHash: info.google_user_id }))
          sendMsgToChromeExtension(actionCreator('AUTH_FULFILLED', {
            googleUserId: info.google_user_id,
            googleToken: info.accessToken,
            info: {
              ...data,
              name: info.name,
              email: info.email || data.email,
              picture: info.picture
            }
          }))
          sendMsgToChromeExtension(actionCreator('USER_AFTER_LOGIN', { userId: data.id }))
          sendMsgToChromeExtension(actionCreator('PRELOAD_SHARE_ALL', { userId: data.id }))
          sendMsgToChromeExtension(actionCreator('FETCH_CONTACTS', {}))
        }
        this.login(this.userId, this.userHash)
        callback && callback(this.user)
      }
    )
  }

  @action facebookConnect (info, callback) {
    logger.info('facebookConnect', info)
    const facebookConnectResult = loginWithFacebook(info)
    this.isProcessingRegister = true
    when(
      () => facebookConnectResult.state !== 'pending',
      () => {
        this.isProcessingRegister = false
        const { data } = facebookConnectResult.value
        const userHash = md5hash(info.fb_user_id)
        this.userId = data.id
        this.userHash = userHash
        this.isLogin = true
        this.facebookUser = Object.assign({}, data, { userHash }, info)
        this.user = Object.assign({}, data, {
          name: info.name,
          email: info.email || data.email,
          picture: info.picture
        })
        // send data to chrome extension
        if (this.isInstalledOnChromeDesktop) {
          sendMsgToChromeExtension(actionCreator('USER_HASH', { userHash: info.fb_user_id }))
          sendMsgToChromeExtension(actionCreator('AUTH_FULFILLED', {
            facebookUserId: info.fb_user_id,
            facebookToken: info.accessToken,
            info: {
              ...data,
              name: info.name,
              email: info.email || data.email,
              picture: info.picture
            }
          }))
          sendMsgToChromeExtension(actionCreator('USER_AFTER_LOGIN', { userId: data.id }))
          sendMsgToChromeExtension(actionCreator('PRELOAD_SHARE_ALL', { userId: data.id }))
        }
        this.login(this.userId, this.userHash)
        callback && callback(this.user)
      }
    )
  }

  @action getSelectSharedItem (shareUrlId, callback) {
    logger.info('getSelectSharedItem')
    const sharedItem = getShareUrl(this.userId, this.userHash, shareUrlId)
    when(
      () => sharedItem.state !== 'pending',
      () => {
        let dataReturn = toJS(sharedItem.value.data)
        if (callback) {
          callback(dataReturn)
        }
      })
  }

  @action getUserOwn (page, topicId) {
    logger.info('getUserOwn')
    if (!this.isProcessingOwnStream) {
      this.isProcessingOwnStream = true
      const userOwnResult = getUserOwnCall(this.userId, this.userHash, page, topicId)
      when(
        () => userOwnResult.state !== 'pending',
        () => {
          if (userOwnResult.state === 'fulfilled') {
            const { mine, urls_mine, topics, has_more} = toJS(userOwnResult.value.data)
            this.ownHasMore = has_more
            this.ownShare = { mine, topics}
            const normalizeOwnShare = normalizedOwnData(toJS(this.ownShare))
            this.normalizeOwnShare = normalizeOwnShare
            const safeUrls = this.checkSafeUrls(_.uniqBy(urls_mine.map((item) => {
              item.fromUser = {
                email: mine.email,
                user_id: mine.user_id,
                avatar: mine.avatar,
                fullname: mine.fullname
              }
              return item
            }), 'url_id'), (safeUrls) => {
              this.ownStream.push(...safeUrls)
              this.ownTopics.push(...flattenTopics(topics))
              logger.info('getUserOwn ownStream, normalizeOwnShare, ownShare, ownTopics', this.friendsStream, this.normalizeFriendsShare, this.friendsShare, this.friendsTopics)
            })
          }
          this.isProcessingOwnStream = false
        }
      )
    }
  }

  @action getUserFriends (page, friendId, topicId) {
    let isOwn = false
    if (parseInt(friendId) === this.userId) {
      friendId = undefined
      isOwn = true
    }
    logger.info('getUserFriends')
    if (!this.isProcessingFriendsStream) {
      this.isProcessingFriendsStream = true
      const userFriendResult = getUserFriendsCall(this.userId, this.userHash, page, friendId, topicId)
      when(
        () => userFriendResult.state !== 'pending',
        () => {
          if (userFriendResult.state === 'fulfilled') {
            const { received, urls_received, topics, has_more} = toJS(userFriendResult.value.data)
            this.friendsHasMore = has_more
            this.friendsShare = { received, topics}
            if (friendId > 0 && received[0]) {
              this.userShare = received[0]
            } else if (isOwn) {
              console.log('kam, ',this.user)
              this.userShare = {
                email: this.user.email,
                user_id: this.user.id,
                avatar: this.user.picture,
                fullname: this.user.name
              }
            } else {
              this.userShare = false
            }
            const normalizeFriendsShare = normalizedFriends(toJS(this.friendsShare))
            this.normalizeFriendsShare = normalizeFriendsShare
            this.checkSafeUrls(_.uniqBy(urls_received.map((item) => {
              const sharedUser = _.filter(received, (user) => _.filter(user.shares_received, (share) => share.share_id === item.from_share_id).length > 0)[0]
              item.fromUser = {
                email: sharedUser.email,
                user_id: sharedUser.user_id,
                avatar: sharedUser.avatar,
                fullname: sharedUser.fullname
              }
              return item
            }), 'url_id'), (safeUrls) => {
              if (page > 0) {
                this.friendsStream.push(...safeUrls)
                this.friendsTopics.push(...flattenTopics(topics))
              } else {
                this.friendsStream = safeUrls
                this.friendsTopics = flattenTopics(topics)
              }
              logger.info('getUserFriends ownStream, normalizeOwnShare, ownShare, ownTopics', this.friendsStream, this.normalizeFriendsShare, this.friendsShare, this.friendsTopics)
            })
          }
          this.isProcessingFriendsStream = false
        }
      )
    }
  }
  
  @action loadMoreOwn () {
    this.ownPage += 1
  }
  
  @action loadMoreFriends () {
    this.friendsPage += 1
  }

  @action checkSafeUrls (urls, callback) {
    logger.info('safeBrowsingLoockup', urls)
    urls = toJS(urls)
    const MAX_ITEM = 500
    const totalPage = urls.length / MAX_ITEM
    if (urls.length === 0) {
      this.isProcessingHistory = false
    }
    for (let counter = 0; counter < totalPage; counter += 1) {
      const safeCheckResult = safeBrowsingLoockup(urls.slice(counter * MAX_ITEM, MAX_ITEM * (counter + 1)).map(item => item.href))
      when(
          () => safeCheckResult.state !== 'pending',
          () => {
            if (safeCheckResult.state === 'fulfilled') {
              const { matches } = safeCheckResult.value.data
              if (matches) {
                const ingoreUrls = _.map(matches, item => item && item.threat && item.threat.url)
                logger.info('safeBrowsingLoockup ingoreUrls', ingoreUrls)
                urls = _.filter(urls, item => _.indexOf(ingoreUrls, item.href) === -1)
              }
            }
            callback(urls)
          }
      )
    }
  }

  @action findUserRating (item, userIds) {
    logger.info('findUserRating')
    if (userIds.length) {
      const owner = _.find(item.owners, item => _.indexOf(userIds, item.owner) !== -1)
      return owner.rate
    }
    return item.owners[0].rate
  }

  @action filterUrls (filterByTopic, filterByUser, rating) {
    logger.info('filterUrls')
    const topics = toJS(filterByTopic)
    const users = toJS(filterByUser)
    if (topics.length > 0 || users.length > 0) {
      const topicUrlIds = _.map(topics, item => item.value)
      const userUrlIds = _.map(users, item => item.value)
      const userIds = _.map(users, item => item.user_id)
      let foundIds = []
      if (topicUrlIds.length && userUrlIds.length) {
        foundIds = _.intersection(topicUrlIds, userUrlIds)
      } else {
        if (topicUrlIds.length) {
          foundIds = topicUrlIds
        } else {
          foundIds = userUrlIds
        }
      }
      const result = _.filter(this.urls, item => _.indexOf(foundIds, item.id) !== -1 && this.findUserRating(item, userIds) >= rating)
      return result
    }
    const result = _.filter(this.urls, item => item.owners[0].rate >= rating)
    return result
  }

  @action sortByOrdering (sortedUrls, sortBy, sortDirection) {
    logger.info('sortByOrdering')
    if (sortBy === 'date') {
      return sortDirection === 'desc' ? _.reverse(_.sortBy(sortedUrls, [(url) => _.max(url.owners[0].hit_utc)])) : _.sortBy(sortedUrls, [(url) => url.owners[0].hit_utc])
    } else {
      return sortDirection === 'desc' ? _.reverse(_.sortBy(sortedUrls, [(url) => url.owners[0].rate])) : _.sortBy(sortedUrls, [(url) => url.owners[0].rate])
    }
  }

  @action saveShareCode (type, code) {
    switch (type) {
      case 'all':
        this.codes.all = code
        if (this.isInstall) {
          sendMsgToChromeExtension(actionCreator('SHARE_ALL_SUCCESS', code))
        }
        break
      case 'site':
        this.codes.sites.push(code)
        if (this.isInstall) {
          sendMsgToChromeExtension(actionCreator('SHARE_URL_SUCCESS', code))
        }
        break
      case 'topic':
        this.codes.topics.push(code)
        if (this.isInstall) {
          sendMsgToChromeExtension(actionCreator('SHARE_TOPIC_SUCCESS', code))
        }
        break
      case 'discovery':
        this.codes.discoveries.push(code)
        if (this.isInstall) {
          sendMsgToChromeExtension(actionCreator('SHARE_DISCOVERY_SUCCESS', code))
        }
        break
      default:
    }
  }

  @action acceptInviteCode () {
    this.acceptInviteResult = acceptInvite(this.userId, this.userHash, this.shareCode)
    when(
      () => this.acceptInviteResult.state !== 'pending',
      () => {
        this.inviteResult = this.acceptInviteResult.value
        this.shareCode = false
        this.shareInfo = false
        if (this.isHome) {
          this.getUserOwn(0)
          this.getUserFriends(0)
        }
      }
    )
  }

  @action unfollowUserShare (code, sourceUserId, callback) {
    this.unfollowUserShareResult = unfollow(this.userId, this.userHash, code, sourceUserId)
    when(
      () => this.unfollowUserShareResult.state !== 'pending',
      () => {
        this.unfollowUserShareResult = this.unfollowUserShareResult.value
        this.getUserOwn(0)
        this.getUserFriends(0)
        callback && callback()
      }
    )
  }

  @action pauseUserShare (code, sourceUserId, callback) {
    this.pauseUserShareResult = pauseShare(this.userId, this.userHash, code, sourceUserId)
    when(
      () => this.pauseUserShareResult.state !== 'pending',
      () => {
        this.pauseUserShareResult = this.pauseUserShareResult.value
        this.getUserOwn(0)
        this.getUserFriends(0)
        callback && callback()
      }
    )
  }
}

export function initStore (isServer, userAgent, user, isHome = true) {
  if (isServer && typeof window === 'undefined') {
    return new HomeStore(isServer, userAgent, user, isHome)
  } else {
    if (store === null) {
      store = new HomeStore(isServer, userAgent, user, isHome)
    }
    return store
  }
}
