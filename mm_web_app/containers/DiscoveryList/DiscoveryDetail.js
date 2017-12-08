/**
*
* StreamItem
*
*/

import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Modal from 'react-modal'
import _ from 'lodash'
import { toJS } from 'mobx'
import InlinePreview from '../../components/InlinePreview'
import DiscoveryNavigation from '../../containers/DiscoveryNavigation'
import DiscoveryShare from './DiscoveryShare'
import logger from '../../utils/logger'
import { checkGoogleAuth, fetchContacts } from '../../utils/google'
import { shareThisDiscovery, shareThisSite } from '../../utils/share'
import fbScrapeShareUrl from '../../utils/fb'
import openUrl from '../../utils/popup'

const SITE_URL = 'https://www.maomao.rocks'
const FB_APP_ID = '386694335037120'

@inject('store')
@inject('ui')
@observer
class DiscoveryDetail extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    termIds: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    discoveryUrlId: PropTypes.number.isRequired,
    utc: PropTypes.string.isRequired,
    userData: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelectTerm: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
  }

  static defaultProps = {
    items: [],
    termIds: [],
    title: '',
    url: '',
    utc: '',
    width: '100%',
    onSelectTerm: (term) => { },
    type: ''
  }

  state = {
    type: 'Google',
    shareOption: 'site',
    currentStep: 2,
    shareCode: ''
  }

  handleClick = (event) => {
    event.preventDefault()
    window.open(this.props.url, '_blank')
  }

  onClose = () => {
    this.props.ui.closeShareModal()
  }

  openShare = () => {
    const { discoveryUrlId, type } = this.props
    this.props.store.checkGoogleContacts()
    const { userId, userHash, codes: { sites, discoveries } } = this.props.store
    if (type === 'share') {
      const findUrlCode = _.find(toJS(sites), item => item && item.url_id === discoveryUrlId)
      if (findUrlCode) {
        this.setState({
          shareCode: findUrlCode.share_code
        })
      } else {
        shareThisSite(userId, userHash, discoveryUrlId).then(result => {
          const { share_code: code } = result.data
          this.setState({
            shareCode: code
          })
          fbScrapeShareUrl(`${SITE_URL}/${code}`)
          this.props.store.saveShareCode('site', { ...result.data, url_id: discoveryUrlId })
        })
      }
    } else {
      const findUrlCode = _.find(toJS(discoveries), item => item && item.disc_url_id === discoveryUrlId)
      if (findUrlCode) {
        this.setState({
          shareCode: findUrlCode.share_code
        })
      } else {
        shareThisDiscovery(userId, userHash, discoveryUrlId).then(result => {
          const { share_code: code } = result.data
          this.setState({
            shareCode: code
          })
          fbScrapeShareUrl(`${SITE_URL}/${code}`)
          this.props.store.saveShareCode('discovery', { ...result.data, disc_url_id: discoveryUrlId })
        })
      }
    }
    this.setState({
      shareOption: discoveryUrlId.toString(),
      currentStep: 2
    })
    this.props.ui.openShareModal()
  }

  changeShareType = (type, shareOption, currentStep) => {
    if (type.indexOf('Facebook') !== -1) {
      const code = this.state.shareCode
      const url = `${SITE_URL}/${code}`
      const closePopupUrl = `${SITE_URL}/static/success.html`
      if (type === 'Facebook') {
        const src = `https://www.facebook.com/dialog/share?app_id=${FB_APP_ID}&display=popup&href=${encodeURI(url)}&redirect_uri=${encodeURI(closePopupUrl)}&hashtag=${encodeURI('#maomao.rocks')}`
        logger.info('shareUrl', src)
        openUrl(src)
      } else {
        const src = `https://www.facebook.com/dialog/send?app_id=${FB_APP_ID}&display=popup&link=${encodeURI(url)}&redirect_uri=${encodeURI(closePopupUrl)}`
        logger.info('shareUrl', src)
        openUrl(src)
      }
    } else {
      this.setState({
        type, shareOption, currentStep
      })
    }
  }

  fetchGoogleContacts = () => {
    checkGoogleAuth()
    .then((data) => {
      // download data
      const { googleToken, googleUserId } = data
      logger.info('checkGoogleAuth result', googleToken, data)
      this.props.ui.addNotification('Loading google contacts')
      return fetchContacts(googleToken, 1000).then((result) => {
        result.json().then(resp => {
          this.props.store.saveGoogleContacts(resp.contacts, googleToken, googleUserId)
        })
      })
    }).catch((error) => {
        // Try to logout and remove cache token
      this.props.ui.addNotification(`Oops! Something went wrong: ${error.message}`)
      logger.warn('found error on fetchGoogleContacts', error)
    })
  }

  sendInvitations = (name, email, topic, url) => {
    const { name: fullName, email: fromEmail } = this.props.store.user
    if (email) {
      logger.info('sendInvitations', fullName, fromEmail, name, email, topic, url)
      this.props.ui.addNotification('Sending invitations...')
       /* global fetch */
      fetch('/api/email', {
        method: 'POST',
      // eslint-disable-next-line no-undef
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ fromEmail, fullName, name, email, topic, url })
      }).then(() => {
        this.props.ui.addNotification(`Sent invitation to: ${email}`)
        this.props.ui.closeShareModal()
      })
      .catch(error => this.props.ui.addNotification(`Oops! Something went wrong: ${error.message}`))
    }
  }

  addNotification = (msg) => {
    this.props.ui.addNotification(msg)
  }

  render () {
    /* eslint-disable camelcase */
    const { items, title, url, utc, termIds, width, userData } = this.props
    const { shareCode } = this.state
    const isReady = termIds.length === items.length
    const { showShareModal } = this.props.ui
    const date = utc ? moment.utc(utc).local().format('LLLL') : ''
    const fullscreen = window.innerWidth < 690
    return (
      <div style={{ width: fullscreen ? '100vw' : '100%' }}>
        <Modal
          isOpen={showShareModal}
          onRequestClose={this.onClose}
          portalClassName='ShareModal'
          contentLabel={`Share ${title}`}
        >
          <DiscoveryShare
            type={this.state.type}
            shareOption={this.state.shareOption}
            currentStep={this.state.currentStep}
            topics={this.props.ui.shareTopics}
            shareCode={shareCode}
            sendEmail={this.sendInvitations}
            changeShareType={this.changeShareType}
            accessGoogleContacts={this.fetchGoogleContacts}
            contacts={toJS(this.props.store.contacts)}
            notify={this.addNotification}
            title={title}
          />
        </Modal>
        {userData && <div style={{ padding: '5px 10px', background: '#eee', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <span className='shared-text'>
            <img src={userData.avatar} style={{ height: 27, borderRadius: '50%', marginRight: 8 }} />
            {userData.fullname} shared:
          </span>
        </div>}
        <div className='discovery-detail'>
          {fullscreen || <h4><a onClick={this.handleClick}>{title}</a></h4>}
          <a href={url} style={{
            display: 'block',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '0.8em'
          }}>{url}</a>
          <div style={{ padding: '4px 0' }}>
            <span className='date-text'>{date}</span>
            <a className='btn btn-share-item' onClick={this.openShare}>Share <i className='fa fa-share-alt' /></a>
          </div>
        </div>
        {
          items.length > 0 &&
          <div className='selected-panel'>
            <DiscoveryNavigation
              items={items}
              termIds={termIds}
              isReady={isReady}
              onSelectTerm={this.props.onSelectTerm}
            />
          </div>
        }
        <InlinePreview
          width={width}
          height={fullscreen ? 'calc(100vh - 107px)' : 'calc(100vh - 180px)'}
          url={url}
          allowScript
        />
      </div>
    )
  }
}

export default DiscoveryDetail
