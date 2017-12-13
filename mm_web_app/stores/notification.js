import { observable, action, computed, toJS } from 'mobx'
import _ from 'lodash'
import Router from 'next/router'
import { getWelcome } from '../services/notification'
import { guid } from '../utils/hash'
import logger from '../utils/logger'

let store = null

export class NotificationStore {
  /* notification compnent */
  @observable notifications = []
  @observable notificationEnable = false
  @observable isRedirectToUrl = false
  notificationToken = ''
  redirectObject = undefined

  @action removeNotification (uNotificationd) {
    if (this.notifications) {
      this.notifications = _.filter(this.notifications, (item) => item && item.key !== uNotificationd.key)
    } else {
      this.clearNotifications()
    }
  }

  @action clearNotifications () {
    this.notifications = []
  }

  @action addNotification (msg, title) {
    const uNotificationd = guid()
    this.notifications.push({
      title,
      message: msg,
      key: uNotificationd,
      action: 'Dismiss',
      titleStyle: {
        display: 'block',
        paddingBottom: 8
      },
      onClick: (deactivate) => {
        this.removeNotification(deactivate)
      }
    })
  }


  @action setRedirectObject (url, path, options) {
    logger.info('setRedirectObject', url, path, options)
    this.isRedirectToUrl = true
    this.redirectObject = { url, path, options }
  }

  @action execRedirectObject () {
    if (this.isRedirectToUrl) {
      this.isRedirectToUrl = false
      const { url, path, options } = this.redirectObject
      const uNotificationd = guid()
      this.notifications.push({
        message: 'You will redirect to shared page.',
        key: uNotificationd,
        action: 'Dismiss',
        onClick: (deactivate) => {
          this.removeNotification(deactivate)
        }
      })
      Router.push(url, path, options)
      this.redirectObject = undefined
    }
  }
  
  @action updateUIForPushEnabled (token) {
    this.notificationEnable = true
    this.notificationToken = token
    getWelcome(token)
  }
  
  @action updateUIForToken(token) {
    this.notificationEnable = true
    this.notificationToken = token
  }

  @action updateUIForPushPermissionRequired () {
    this.notificationEnable = false
    this.notificationToken = ''
  }
}

export function initNotificationStore (isServer) {
  if (isServer && typeof window === 'undefined') {
    return new NotificationStore(isServer)
  } else {
    if (store === null) {
      store = new NotificationStore(isServer)
    }
    return store
  }
}
