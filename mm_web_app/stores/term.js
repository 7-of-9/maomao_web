import { action, when, observable, computed, reaction } from 'mobx'
import { rootDiscover, termDiscover, getTerm, preLoadTerm, getAllTopicTree, getDiscoverItem, unfollowTopic, followedTopics, addBulkTopics } from '../services/topic'
import logger from '../utils/logger'
import { isSameStringOnUrl } from '../utils/helper'
import _ from 'lodash'

let store = null

class TermStore {
  @observable page = 1
  @observable hasMore = false
  @observable userId = -1
  @observable userHash = ''
  @observable isProcessingTopicTree = false
  @observable isProcessingDiscoverTerm = false
  @observable isProcessingRootDiscover = false
  @observable.shallow discoveries = []
  @observable.shallow findTerms = []
  @observable.shallow terms = []
  @observable.ref termsCache = {}
  @observable followedTopics = {}
  termFollowChanged = false
  tree = []
  rootData = { page: 1, discoveries: [] }
  preloadPendings = []
  termsInfo = { terms: [] }

  constructor (isServer, findTerms, termsInfo) {
    this.findTerms = findTerms
    this.termsInfo = termsInfo
    reaction(
      () => this.userId > 0,
      () => {
        logger.warn('get followed topic for userId', this.userId)
        this.getFollowedTopics()
      }
    )
    reaction(
      () => `${this.page}-${this.userId}`,
      () => {
        if (this.userId > 0) {
          logger.warn('get root discover for page', this.page, this.discoveries)
          if (this.page < 1) {
            this.discoveries = []
          } else {
            this.getRootDiscover(this.page)
          }
        }
      }
    )
  }

  @computed get isLoading () {
    return this.isProcessingRootDiscover || this.isProcessingDiscoverTerm
  }

  @computed get hasLoadMore () {
    return !this.isLoading && this.hasMore
  }

  @action setApiToken (userId, userHash) {
    logger.warn('setApiToken', userId, userHash)
    this.userId = userId
    this.userHash = userHash
  }

  @action setTerms (terms) {
    logger.info('setTerms', terms)
    const preloadTermIds = []
    for (let term of terms) {
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
          logger.info('tree', tree)
          this.tree = tree
          _.forEach(tree, term => {
            if (!this.termsCache[term.term_id]) {
              this.termsCache[term.term_id] = term
            }
            preloadTermIds.push(term.term_id)
            _.forEach(term.child_topics, item => {
              if (!this.termsCache[item.term_id]) {
                this.termsCache[item.term_id] = item
              }
              preloadTermIds.push(item.term_id)
            })
          })
          _.uniqBy(preloadTermIds).forEach(termId => this.preloadTerm(termId))
        })
    }
  }

  @action setCurrentTerms (findTerms) {
    logger.info('setCurrentTerms', findTerms)
    this.findTerms = findTerms
  }

  @action preloadTerm (termId) {
    if (termId && this.preloadPendings.indexOf(termId) === -1) {
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

  @action getRootDiscover (page) {
    logger.info('getRootDiscover', page)
    const isExist = _.find(this.terms, item => item.termId === -1)
    if ((!isExist || this.termFollowChanged) && !this.isProcessingDiscoverTerm && page) {
      this.isProcessingRootDiscover = true
      this.hasMore = false
      const rootData = rootDiscover(this.userId, this.userHash, page)
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
              this.termFollowChanged = false
              this.discoveries.push(...discoveries)
              this.terms.push({
                termId: -1,
                discoveries: _.uniqBy(discoveries, 'url') || []
              })
            }
          }
          this.isProcessingRootDiscover = false
        }
      )
    }
  }

  @action loadMore () {
    this.page += 1
  }

  @action resetPagination () {
    if (this.page > 0) {
      this.rootData = Object.assign({}, {
        page: this.page,
        discoveries: this.discoveries.peek()
      })
      this.page = 0
    }
  }

  @action restoreLastPagination () {
    const { page, discoveries } = this.rootData
    this.discoveries.push(...discoveries)
    this.page = page + 1 // preload one more page when back to root discover
  }

  @action getTermDiscover (termId) {
    const isExist = _.find(this.terms, item => item.termId === termId)
    this.preloadTerm(termId)
    if (!isExist && !this.isProcessingDiscoverTerm) {
      this.isProcessingDiscoverTerm = true
      const termData = termDiscover(termId)
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
          this.isProcessingDiscoverTerm = false
        }
      )
    }
  }

  @action getFollowedTopics () {
    logger.info('getFollowTopics')
    const res = followedTopics(this.userId, this.userHash)
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
        this.getFollowedTopics()
        this.termFollowChanged = true
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
        this.getFollowedTopics()
        this.termFollowChanged = true
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
