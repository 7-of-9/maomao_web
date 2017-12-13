/*
 *
 * AppHeader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'
import firebase from 'firebase'
import 'isomorphic-fetch'
import _ from 'lodash'
import Modal from 'react-modal'
import { Navbar, NavItem } from 'neal-react'
import Slogan from '../../components/Slogan'
import { guid } from '../../utils/hash'
import { clientCredentials } from '../../firebaseCredentials'
import logger from '../../utils/logger'

const brand = (user) => (<Slogan redirectUrl={user && user.nav_id} />)

const avatar = (user) => {
  if (user && (user.picture || user.avatar)) {
    return user.picture || user.avatar
  }
  return '/static/images/no-avatar.png'
}

const customModalStyles = {
  content: {
    top: '82px',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    overflow: 'hidden'
  }
}

@inject('store')
@inject('term')
@inject('ui')
@inject('notificationStore')
@observer
class AppHeader extends React.Component {
  static propTypes = {
    isHome: PropTypes.bool,
    hidden: PropTypes.bool
  }

  static defaultProps = {
    isHome: true,
    hidden: false
  }

  onInternalLogin = () => {
    this.addNotification('Test Internal: New User')
    this.props.ui.redirectToSpecialUrl(true)
    this.props.ui.toggleSignIn(false)
    this.props.store.internalLogin((user) => {
      const { selectedTopics } = this.props.ui
      this.props.store.saveTopics(_.map(selectedTopics, item => item.termId))
      this.saveProfileUrl({ url: `/${user.nav_id}`, ...user })
      const { email, name: displayName } = user
      if (this.props.store.shareInfo) {
        this.props.store.acceptInviteCode()
        this.props.ui.execRedirectObject()
      }
      firebase.auth().createUserWithEmailAndPassword(email, 'maomao').then((newUser) => {
        newUser.updateProfile({
          displayName,
          photoURL: JSON.stringify(user)
        }).catch((error) => {
          this.addNotification(error.message)
        })
      }).catch((error) => {
        this.addNotification(error.message)
      })
    })
  }

  onFacebookLogin = (evt) => {
    evt.preventDefault()
    this.props.ui.redirectToSpecialUrl(true)
    const provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('email')
    firebase.auth().signInWithPopup(provider).catch((error) => {
      this.addNotification(error.message)
    })
  }

  onGoogleLogin = (evt) => {
    evt.preventDefault()
    this.props.ui.redirectToSpecialUrl(true)
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.me')
    provider.addScope('https://www.googleapis.com/auth/userinfo.email')
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    firebase.auth().signInWithPopup(provider).catch((error) => {
      this.addNotification(error.message)
    })
  }

  onLogout = (evt) => {
    evt.preventDefault()
    firebase.auth().signOut().then(() => {
      fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'same-origin'
      }).then(() => {
        this.props.store.logoutUser()
      })
      this.addNotification('You have successfully signed out.')
      this.props.ui.clean()
      this.deleteToken(() => { window.location.href = '/' })
    }).catch((error) => {
      logger.warn('found error on logout', error)
    })
  }

  onClose = () => {
    this.props.ui.toggleSignIn(false)
  }

  showSignIn = (evt) => {
    evt.preventDefault()
    this.props.ui.toggleSignIn(true, 'Sign In')
  }

  openShareManagement = (evt) => {
    evt.preventDefault()
    this.props.ui.displayShareManagement()
  }

  onOpenExtensionModal = (evt) => {
    evt.preventDefault()
    this.props.ui.openExtensionModal()
  }

  onCloseExtensionModal = (evt) => {
    evt.preventDefault()
    this.props.ui.closeExtensionModal()
  }

  noImage = (evt) => {
    evt.target.src = '/static/images/no-image.png'
  }

  inlineInstall = () => {
    /* eslint-disable */
    chrome.webstore.install(
    'https://chrome.google.com/webstore/detail/onkinoggpeamajngpakinabahkomjcmk',
    this.onInstallSucess,
    this.onInstallFail)
    /* eslint-enable */
  }

  onInstallSucess = () => {
    this.props.notificationStore.addNotification('Yeah! You have been installed maomao extension successfully.')
    setTimeout(() => {
      this.props.store.checkEnvironment()
      this.props.store.checkInstall()
      window.location.reload()
    }, 1000)
  }

  onInstallFail = (error) => {
    this.props.notificationStore.addNotification(error)
  }

  addNotification = (msg, title) => {
    this.props.notificationStore.addNotification(msg, title)
  }

  removeNotification = (uuid) => {
    this.props.notificationStore.removeNotification(uuid)
  }

  saveProfileUrl = (user) => {
    /* global URL */
    const { url } = user
    const { pathname } = new URL(window.location.href)
    if (pathname !== encodeURI(url)) {
      fetch('/api/auth/profile', {
        method: 'POST',
        // eslint-disable-next-line no-undef
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(user)
      }).then(() => {
        if (this.props.notificationStore.isRedirectToUrl && this.props.notificationStore.redirectObject) {
          this.props.notificationStore.execRedirectObject()
        } else {
          Router.push({ pathname: '/', query: { profileUrl: url } }, url)
          this.props.ui.redirectToSpecialUrl(false)
        }
      })
    }
  }

  requestPermission = () => {
    firebase.messaging().requestPermission()
      .then(() => {
        firebase.messaging().getToken()
        .then((currentToken) => {
          if (currentToken) {
            this.sendTokenToServer(currentToken)
            this.props.notificationStore.updateUIForPushEnabled(currentToken)
          } else {
            this.setTokenSentToServer(false)
          }
        })
        .catch((err) => {
          logger.warn('An error occurred while retrieving token.', err)
          this.props.notificationStore.updateUIForPushPermissionRequired()
          this.setTokenSentToServer(false)
        })
      })
      .catch((err) => {
        logger.warn('Unable to get permission to notify.', err)
      })
  }

  sendTokenToServer = (currentToken) => {
    if (!this.isTokenSentToServer()) {
      this.setTokenSentToServer(currentToken)
    }
  }

  isTokenSentToServer = () => {
    return window.localStorage.getItem('sentToServer') === 1 && window.localStorage.getItem('pushToken')
  }

  setTokenSentToServer = (currentToken) => {
    window.localStorage.setItem('sentToServer', currentToken ? 1 : 0)
    window.localStorage.setItem('pushToken', currentToken)
  }

  deleteToken = (callback) => {
    firebase.messaging().getToken()
      .then((currentToken) => {
        firebase.messaging().deleteToken(currentToken)
        .then(() => {
          this.setTokenSentToServer(false)
          this.props.notificationStore.updateUIForPushPermissionRequired()
          this.addNotification('You wont get notified with new discoveries again', 'Notification unsubscribed')
          if (callback) {
            callback()
          }
        })
        .catch((err) => {
          logger.warn('Unable to delete token. ', err)
        })
      })
      .catch((err) => {
        logger.warn('Error retrieving Instance ID token. ', err)
      })
  }

  /* global fetch */
  componentDidMount () {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(clientCredentials)
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          const { photoURL } = user
          return user.getIdToken()
          .then((token) => {
            if (this.props.store.userId < 0) {
              if (!user.isAnonymous) {
                this.addNotification(`Welcome, ${user.displayName}!`)
              }
              this.props.ui.toggleSignIn(false)
              return fetch('/api/auth/login', {
                method: 'POST',
                // eslint-disable-next-line no-undef
                headers: new Headers({ 'Content-Type': 'application/json' }),
                credentials: 'same-origin',
                body: JSON.stringify({ token })
              }).then((res) => {
              // register for new user
                res.json().then(json => {
                  // register new user
                  if (!user.isAnonymous) {
                    const { decodedToken: { email, name, picture, firebase: { sign_in_provider, identities } } } = json
                  /* eslint-disable camelcase */
                    logger.info('sign_in_provider', sign_in_provider)
                    logger.info('identities', identities)
                    let fb_user_id = identities['facebook.com'] && identities['facebook.com'][0]
                    let google_user_id = identities['google.com'] && identities['google.com'][0]
                    if (sign_in_provider === 'google.com') {
                      if (!email) {
                        _.forEach(user.providerData, item => {
                          if (item.providerId === sign_in_provider) {
                            this.props.store.googleConnect({
                              email: item.email, name, picture, google_user_id
                            }, (currentUser) => {
                              logger.info('currentUser', currentUser)
                              const { selectedTopics } = this.props.ui
                              this.props.store.saveTopics(_.map(selectedTopics, item => item.termId))
                              this.saveProfileUrl({ url: `/${currentUser.nav_id}`, ...currentUser })
                            })
                          }
                        })
                      } else {
                        this.props.store.googleConnect({
                          email, name, picture, google_user_id
                        }, (currentUser) => {
                          const { selectedTopics } = this.props.ui
                          this.props.store.saveTopics(_.map(selectedTopics, item => item.termId))
                          this.saveProfileUrl({ url: `/${currentUser.nav_id}`, ...currentUser })
                        })
                      }
                    } else if (sign_in_provider === 'facebook.com') {
                      if (!email) {
                        _.forEach(user.providerData, item => {
                          if (item.providerId === sign_in_provider) {
                            this.props.store.facebookConnect({
                              email: item.email, name, picture, fb_user_id
                            }, (currentUser) => {
                              const { selectedTopics } = this.props.ui
                              this.props.store.saveTopics(_.map(selectedTopics, item => item.termId))
                              this.saveProfileUrl({ url: `/${currentUser.nav_id}`, ...currentUser })
                            })
                          }
                        })
                      } else {
                        this.props.store.facebookConnect({
                          email, name, picture, fb_user_id
                        }, (currentUser) => {
                          const { selectedTopics } = this.props.ui
                          this.props.store.saveTopics(_.map(selectedTopics, item => item.termId))
                          this.saveProfileUrl({ url: `/${currentUser.nav_id}`, ...currentUser })
                        })
                      }
                    } else if (sign_in_provider === 'password') {
                      // hack here, try to store intenal user
                      try {
                        const loggedUser = JSON.parse(photoURL)
                        // TODO: need to get nav_id for internal user
                        this.props.store.retrylLoginForInternalUser(loggedUser, (currentUser) => {
                          const { selectedTopics } = this.props.ui
                          this.props.store.saveTopics(_.map(selectedTopics, item => item.termId))
                          this.saveProfileUrl({ url: `/${currentUser.nav_id}`, ...currentUser })
                        })
                      } catch (error) {
                        logger.warn('found error on sign in with password', error)
                      }
                    }
                  } else {
                    this.props.store.isLogin = true
                  }
                })
              })
            } else {
              this.props.store.isLogin = true
            }
          })
        }
      })
    }
    this.props.store.checkInstall()
    let counter = 0
    this.timer = setInterval(() => {
      counter += 1
      if (this.props.store.isChrome && !this.props.store.isMobile && counter < 10) {
        this.props.store.checkInstall()
        if (this.props.store.isInstalledOnChromeDesktop) {
          this.setState({isHide: true})
          clearInterval(this.timer)
        }
      } else {
        clearInterval(this.timer)
      }
    }, 2 * 1000) // check mm extension has installed on every 2s
    firebase.messaging().onMessage((payload) => {
      const notificationData = JSON.parse(payload.data.notification) || {}
      if (notificationData.tag === 'notification') {
        this.addNotification(notificationData.body, notificationData.title)
      } else if (notificationData.tag === 'user-notification' && this.props.store.isLogin) {
        this.addNotification(notificationData.body, notificationData.title)
      }
    })
    if ((typeof (window) !== 'undefined') && this.isTokenSentToServer) {
      this.props.notificationStore.updateUIForToken(window.localStorage.getItem('pushToken'))
    }
  }

  componentWillUnmount () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render () {
    const { isLogin, userId, user, isInstalledOnChromeDesktop, isChrome, isMobile } = this.props.store
    const { notificationEnable } = this.props.notificationStore
    const { showSignInModal, title } = this.props.ui
    const { hidden } = this.props
    return (
      <div>
        <Navbar className={`header-nav animated fadeInDown ${hidden ? 'header-hidden' : ''}`} brand={brand(user)}>
          <NavItem>
            <a data-toggle='dropdown' style={{ color: '#666', fontWeight: 'normal', paddingTop: '30px' }}>
              Hiring
              <i className='fa fa-chevron-circle-down' aria-hidden='true' />
            </a>
            <ul className='dropdown-menu dropdown-hiring pull-right'>
              <li key={guid()}>
                <Link prefetch href='/hiring/?type=js' as='/hiring-js'>
                  <a href='/hiring-js'><i className='fa fa-angle-right' aria-hidden='true' />  JavaScript / Node.JS Developer</a>
                </Link>
              </li>
              <li key={guid()}>
                <Link prefetch href='/hiring/?type=vp' as='/hiring-vp'>
                  <a href='/hiring-vp'><i className='fa fa-angle-right' aria-hidden='true' />  Server & Platform Engineer / VP Engineering</a>
                </Link>
              </li>
            </ul>
          </NavItem>
          {
            (!isMobile && isLogin && isChrome && !isInstalledOnChromeDesktop) &&
            <NavItem>
              <button className='btn btn-addto' onClick={this.onOpenExtensionModal}> <i className='fa fa-plus' aria-hidden='true' /> ADD TO CHROME</button>
            </NavItem>
          }
          <NavItem>
            {userId > 0 &&
              <div className='dropdown account-dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown'>
                  <img onError={this.noImage} className='image-account' src={avatar(user)} alt={userId} width='33' height='33' />
                </a>
                <a className='link-logout-res' onClick={this.onLogout}>
                  <i className='fa fa-sign-out' />
                  <span className='nav-text'>Sign Out</span>
                </a>
                {
                  user && user.name &&
                    [<a className='link-logout-res' style={{color: '#333', backgroundColor: '#fff'}}>
                      <Link
                        as={`/${user.nav_id}`}
                        prefetch
                        href={{
                          pathname: '/',
                          query: { profileUrl: `/${user.nav_id}` }
                        }}>
                        <strong><i className='fa fa-magic' /> Your discover</strong>
                      </Link>
                    </a>,
                      <a className='link-logout-res' style={{color: '#333', backgroundColor: '#fff'}}>
                        <Link
                          as={`/topics`}
                          prefetch
                          href={{
                            pathname: '/topics'
                          }}>
                          <strong><i className='fa fa-list-ul' /> Topic Following</strong>
                        </Link>
                      </a>,
                      <a className='link-logout-res' style={{color: '#333', backgroundColor: '#fff'}}>
                        <Link
                          as={`/share`}
                          prefetch
                          href={{
                            pathname: '/share'
                          }}>
                          <strong><i className='fa fa-share-alt' /> Your Share</strong>
                        </Link>
                      </a>,
                      <a className='link-logout-res' style={{color: '#333', backgroundColor: '#fff'}} onClick={notificationEnable ? this.deleteToken : this.requestPermission}>
                        <strong><i className={notificationEnable ? 'fa fa-bell-slash' : 'fa fa-bell'} /> {notificationEnable ? 'Disable Notification' : 'Enable Notification'}</strong>
                      </a>]
                }
                <ul className='dropdown-menu pull-right'>
                  {
                    user && user.name &&
                    <div className='account-dropdown__identity account-dropdown__segment'>
                    Signed in as <strong>({user.name} ({user.email}))</strong>
                    </div>
                  }
                  {
                    user && user.name &&
                    <li style={{color: '#333', backgroundColor: '#fff'}}>
                      <a onClick={notificationEnable ? this.deleteToken : this.requestPermission}>
                        <i className={notificationEnable ? 'fa fa-bell-slash' : 'fa fa-bell'} />
                        <strong> {notificationEnable ? 'Disable Notification' : 'Enable Notification'}</strong>
                      </a>
                    </li>
                  }
                  {
                    user && user.name &&
                    <li style={{color: '#333', backgroundColor: '#fff'}}>
                      <Link
                        as={`/${user.nav_id}`}
                        prefetch
                        href={{
                          pathname: '/',
                          query: { profileUrl: `/${user.nav_id}` }
                        }}>
                        <a href={`/${user.nav_id}`}><i className='fa fa-magic' /> <strong>Your discover</strong></a>
                      </Link>
                    </li>
                  }
                  <li style={{color: '#333', backgroundColor: '#fff'}}>
                    <Link
                      as={`/topics`}
                      prefetch
                      href={{
                        pathname: '/topics'
                      }}>
                      <a className='btn btn-logout' href={`/topics`}><i className='fa fa-list-ul' /> <strong>Topic Following</strong></a>
                    </Link>
                  </li>
                  <li style={{color: '#333', backgroundColor: '#fff'}}>
                    <Link
                      as={`/share`}
                      prefetch
                      href={{
                        pathname: '/share'
                      }}>
                      <a className='btn btn-logout' href={`/share`}><i className='fa fa-share-alt' /> <strong>Your Share</strong></a>
                    </Link>
                  </li>
                  <li style={{color: '#333', backgroundColor: '#fff'}}><a className='btn btn-logout' onClick={this.onLogout}><i className='fa fa-sign-out' /> <strong>Sign Out</strong></a></li>
                </ul>
              </div>
            }
            {userId < 0 && <a style={{ color: '#666', fontWeight: 'normal', paddingTop: '30px' }} onClick={this.showSignIn}>Sign In</a>}
          </NavItem>
        </Navbar>
        <Modal
          isOpen={showSignInModal}
          onRequestClose={this.onClose}
          portalClassName='SignInModal'
          contentLabel={title}
        >
          <h2 ref='subtitle'>{title}</h2>
          <div className='social-action' >
            <div className='block-button'>
              <a className='btn btn-social btn-facebook' onClick={this.onFacebookLogin}>
                <i className='fa fa-facebook' /> {title} with Facebook
              </a>
            </div>
            <div className='block-button'>
              <a className='btn btn-social btn-google' onClick={this.onGoogleLogin}>
                <i className='fa fa-google' /> {title} with Google
                </a>
            </div>
            <div className='block-button'>
              <a className='btn btn-social btn-internal-lab' onClick={this.onInternalLogin}>
                <i className='fa icon-internal-lab' /> Test Internal: New User
                </a>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={this.props.ui.showExtensionModal}
          onRequestClose={this.onCloseExtensionModal}
          portalClassName='InstallModal'
          style={customModalStyles}
          contentLabel='Install maomao'
        >
          <div className='install-modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Install maomao</h4>
            </div>
            <div className='modal-body'>
              <div className='install-description'>
                <h3><img className='logo-image' src='/static/images/logo-blue-27.png' alt='maomao' /> lets you share topics with friends</h3>
                <br />
                <p><img className='logo-image' src='/static/images/logo-blue-27.png' alt='maomao' /> only shares what you tell it, when you tell it. </p>
                <button className='btn btn-install' type='button' onClick={this.inlineInstall}>Ok! Give me <img className='logo-image' src='/static/images/logo-blue-27.png' alt='maomao' /></button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default AppHeader
