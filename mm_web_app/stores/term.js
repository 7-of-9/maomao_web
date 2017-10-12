import { action, computed, reaction, when, observable } from 'mobx'
import { rootDiscover, termDiscover, getTerm, preLoadTerm, getAllTopicTree, getDiscoverItem, unfollowTopic, followedTopics, addBulkTopics } from '../services/topic'
import logger from '../utils/logger'
import { isSameStringOnUrl } from '../utils/helper'
import _ from 'lodash'

let store = null

class TermStore {
  @observable.shallow discoveries = []
  @observable termsCache = {}
  @observable findTerms = []
  @observable pendings = []
  @observable followedTopics = []
  @observable page = 0
  @observable hasMore = true
  @observable isProcessingTopicTree = false
  terms = []
  preloadPendings = []
  tree = []
  userId = -1
  userHash = ''
  termsInfo = { terms: [] }

  constructor (isServer, findTerms, termsInfo) {
    this.findTerms = findTerms
    this.termsInfo = termsInfo
    reaction(() => this.page,
      (page) => {
        if (this.userId > 0) {
          logger.info('reaction to page', page, this.userId, this.userHash)
          if (page === 1) {
            this.discoveries = []
          }
          this.getRootDiscover(this.userId, this.userHash, page)
        }
      })
  }

  @computed get isLoading () {
    return this.pendings.length > 0
  }

  @action setTerms (findTerms) {
    logger.info('setTerms', findTerms)
    const preloadTermIds = []
    for (let term of findTerms) {
      if ((term.child_suggestions && term.child_suggestions.length) || (term.child_topics && term.child_topics.length)) {
        this.termsCache[term.term_id] = term
      }
      preloadTermIds.push(term.term_id)
    }
    _.uniqBy(preloadTermIds).forEach(termId => this.preloadTerm(termId))
  }

  @action getSelectDiscoverItem (urlId, callback) {
    logger.info('getDiscoveryItem')
    const discoveryItem = getDiscoverItem(urlId)
    logger.info('discoveryItem', discoveryItem)
    when(
      () => discoveryItem.state !== 'pending',
      () => {
        logger.info('discoveryItem', discoveryItem)
        if (callback) {
          callback(discoveryItem.value.data)
        }
      })
  }

  @action getTopicTree () {
    logger.info('getTopicTree')
    if (!this.isProcessingTopicTree && this.tree.length === 0) {
      const allTopics = getAllTopicTree()
      this.isProcessingTopicTree = true
      const preloadTermIds = []
      when(
        () => allTopics.state !== 'pending',
        () => {
          this.isProcessingTopicTree = false
          const { tree } = allTopics.value.data
          this.tree = tree
          _.forEach(tree, term => {
            this.termsCache[term.term_id] = term
            preloadTermIds.push(term.term_id)
            _.forEach(term.child_topics, item => {
              this.termsCache[item.term_id] = item
              preloadTermIds.push(item.term_id)
            })
          })
          _.uniqBy(preloadTermIds).forEach(termId => this.preloadTerm(termId))
          logger.info('tree', tree)
        })
    }
  }

  @action setCurrentTerms (findTerms) {
    this.findTerms = findTerms
  }

  @action preloadTerm (termId) {
    if (!this.termsCache[termId] && this.preloadPendings.indexOf(termId) === -1) {
      this.preloadPendings.push(termId)
      preLoadTerm(termId).then(response => {
        const { term } = response.data
        this.termsCache[term.term_id] = term
      }).catch(error => {
        logger.warn('error on preloadTerm', error)
      })
    }
  }

  @action addNewTerm (newTerm) {
    if (!this.termsInfo.terms.find(item => isSameStringOnUrl(item.term_name, newTerm.term_name))) {
      this.termsInfo.terms.push(newTerm)
      if (!this.termsCache[newTerm.term_id]) {
        const termInfo = getTerm(newTerm.term_id)
        when(
          () => termInfo.state !== 'pending',
          () => {
            if (termInfo.value.data) {
              const { term } = termInfo.value.data
              const terms = this.termsInfo.terms.filter(item => !isSameStringOnUrl(item.term_name, term.term_name))
              this.termsInfo.terms = [...terms, term]
              this.termsCache[term.term_id] = term
            }
          }
        )
      }
    }
  }

  @action getRootDiscover (userId, userHash, page) {
    logger.info('getRootDiscover', userId, userHash, page)
    this.getFollowedTopics(userId, userHash)
    this.page = page
    this.userId = userId
    this.userHash = userHash
    this.hasMore = false
    const rootData = rootDiscover(userId, userHash, page)
    const keyCache = `getRootDiscover-${userId}-${userHash}-${page}`
    if (_.indexOf(this.pendings, keyCache) === -1) {
      this.pendings.push(keyCache)
      when(
        () => rootData.state !== 'pending',
        () => {
          if (rootData.value && rootData.value.data) {
            const { discoveries } = rootData.value.data
            logger.info('getRootDiscover result', discoveries)
            if (discoveries.length === 0) {
              this.hasMore = false
            } else {
              this.hasMore = true
            }
            _.forEach(discoveries, item => {
              if (!_.includes(this.discoveries, item)) {
                this.discoveries.push(item)
              }
            })
            this.discoveries = _.uniqBy(this.discoveries, 'url')
          }
          this.pendings = this.pendings.filter(item => item !== keyCache)
        }
      )
    }
  }

  @action loadMore () {
    this.page += 1
  }

  @action getTermDiscover (termId) {
    const isExist = _.find(this.terms, item => item.termId === termId)
    const keyCache = `getTermDiscover-${termId}`
    const isProcess = _.indexOf(this.pendings, keyCache) !== -1
    this.preloadTerm(termId)
    if (!isExist && !isProcess) {
      const termData = termDiscover(termId)
      this.pendings.push(keyCache)
      when(
        () => termData.state !== 'pending',
        () => {
          if (termData.value && termData.value.data) {
            const { discoveries } = termData.value.data
            this.terms.push({
              termId,
              discoveries: _.uniqBy(discoveries, 'url') || []
            })
          }
          this.pendings = this.pendings.filter(item => item !== keyCache)
        }
      )
    }
  }

  @action getFollowedTopics (userId, userHash) {
    logger.info('getFollowTopics')
    const res = followedTopics(userId, userHash)
    logger.info('followedTopics', res)
    when(
      () => res.state !== 'pending',
      () => {
        logger.info('followedTopics', res)
        this.followedTopics = res.value.data
      })
  }

  @action followTopicUser (topicId, callback) {
    logger.info('followTopic')
    const res = addBulkTopics(this.userId, this.userHash, [topicId])
    logger.info('unfollowTopic', res)
    when(
      () => res.state !== 'pending',
      () => {
        logger.info('followTopic', res)
        this.getFollowedTopics(this.userId, this.userHash)
        if (callback) {
          callback()
        }
      })
  }

  @action unfollowTopicUser (topicId, callback) {
    logger.info('unfollowTopic')
    const res = unfollowTopic(this.userId, this.userHash, topicId)
    logger.info('unfollowTopic', res)
    when(
      () => res.state !== 'pending',
      () => {
        logger.info('unfollowTopic', res)
        this.getFollowedTopics(this.userId, this.userHash)
        if (callback) {
          callback()
        }
      })
  }
}

export function initTermStore (isServer, findTerms = [], termsInfo = { terms: [] }) {
  if (isServer && typeof window === 'undefined') {
    return new TermStore(isServer, findTerms, termsInfo)
  } else {
    if (store === null) {
      store = new TermStore(isServer, findTerms, termsInfo)
    }
    return store
  }
}
