/**
*
* ChromeInstall
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import _ from 'lodash'
import logger from '../../utils/logger'

const replaceMMIcon = (desc) => {
  return desc.replace('maomao', "<img className='logo-image' src='/static/images/logo-blue-27.png' alt='maomao' />")
}

@inject('store')
@inject('ui')
@inject('inviteStore')
@inject('notificationStore')
@observer
class ChromeInstall extends React.PureComponent {
  showSignIn = (evt) => {
    evt.preventDefault()
    logger.info('showSignIn', this.props)
    this.props.ui.toggleSignIn(true)
  }

  onOpenExtensionModal = (evt) => {
    evt.preventDefault()
    this.props.ui.openExtensionModal()
  }

  showSignUp = (evt) => {
    evt.preventDefault()
    this.props.ui.toggleSignIn(true, 'Sign Up')
  }

  acceptInvite = () => {
    this.props.inviteStore.acceptInviteCode()
    this.props.notificationStore.execRedirectObject()
  }

  render () {
    const { isChrome, browserName, userAgent, isMobile, isInstall, isLogin, shareInfo } = this.props.store
    const { selectedTopics } = this.props.ui
    const selectedItems = selectedTopics ? _.map(selectedTopics, item => ({img: item.img, id: item.termId, name: item.termName})) : []
    let description = 'maomao is a peer-to-peer real time content sharing network, powered by a deep learning engine.'
    if (shareInfo) {
      const { fullname, share_all: shareAll, topic_title: topicTitle, url_title: urlTitle } = shareInfo
      if (shareAll) {
        description = `${fullname} would like to share all maomao stream with you`
      } else if (urlTitle && urlTitle.length) {
        description = `${fullname} would like to share "${urlTitle}" with you`
      } else if (topicTitle && topicTitle.length) {
        description = `${fullname} would like to share the maomao stream with you: "${topicTitle}"`
      }
    }
    logger.info('ChromeInstall isChrome, browserName, userAgent, isMobile, isInstall, isLogin, shareInfo', isChrome, browserName, userAgent, isMobile, isInstall, isLogin, shareInfo)
    let joinMsg = shareInfo ? `Accept share now to view ${shareInfo.fullname}'s stream` : 'Accept share'

    return (
      <div className='wrap-main' style={{ textAlign: 'center', display: isInstall && isLogin ? 'none' : '' }}>
        {isLogin &&
        <div
          className='neal-hero jumbotron jumbotron-fluid text-xs-center banner-hero banner-case'
          style={{ background: this.props.store.bgImage && this.props.store.bgImage.length > 0 ? `url(${this.props.store.bgImage}) fixed` : 'url(/static/images/bg_hero.jpg) repeat-x fixed' }}
        >
          <p className='text-engine animated fadeInUp' dangerouslySetInnerHTML={{ __html: replaceMMIcon(description) }} />
          <div className='hero-caption animated fadeInUp'>
            <div className='block-button'>
              <button className='btn btn-login' onClick={this.acceptInvite}>
                <i className='fa fa-sign-in' aria-hidden='true' /> {joinMsg}
              </button>
            </div>
          </div>
        </div>
          }
        {!isLogin &&
        <div
          className='neal-hero jumbotron jumbotron-fluid text-xs-center banner-hero'
          style={{ background: this.props.store.bgImage && this.props.store.bgImage.length > 0 ? `url(${this.props.store.bgImage}) fixed` : 'url(/static/images/bg_hero.jpg) repeat-x fixed' }}
            >
          <h1 className='animated fadeInUp' dangerouslySetInnerHTML={{ __html: replaceMMIcon(description) }} />
          <p style={{ marginTop: 16 }}>To sign up choose your topics to follow</p>
          {
            !isLogin && selectedItems.length > 0 &&
            <button style={{ fontSize: '1.2rem', margin: 0 }} className='btn btn-addto' onClick={this.showSignUp}> <i className='fa fa-sign-in' aria-hidden='true' /> Let's go!</button>
          }
        </div>
          }
      </div>
    )
  }
}

export default ChromeInstall
