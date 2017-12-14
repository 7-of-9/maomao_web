/**
*
* StreamItem
*
*/

import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ReactPlayer from 'react-player'
import DiscoveryTerm from './DiscoveryTerm'
import { isVideo } from '../../utils/helper'
import logger from '../../utils/logger'
import SkelDiscoveryItem from '../../components/Skeleton/SkelDiscoveryItem'

@inject('term')
@inject('ui')
@observer
export default class DiscoveryItem extends Component {
  static propTypes = {
    disc_url_id: PropTypes.number.isRequired,
    url_id: PropTypes.number.isRequired,
    main_term_id: PropTypes.number.isRequired,
    sub_term_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    main_term_name: PropTypes.string.isRequired,
    sub_term_name: PropTypes.string.isRequired,
    main_term: PropTypes.object,
    sub_term: PropTypes.object,
    img: PropTypes.string,
    main_term_img: PropTypes.string.isRequired,
    sub_term_img: PropTypes.string,
    search_num: PropTypes.number.isRequired,
    ingoreTerms: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onSelectTerm: PropTypes.func,
    userData: PropTypes.object,
    shareTerm: PropTypes.object,
    onSelectShareTerm: PropTypes.func,
    onSelectUser: PropTypes.func,
    selected: PropTypes.bool
  }

  static defaultProps = {
    disc_url_id: 0,
    url_id: 0,
    main_term_id: 0,
    sub_term_id: 0,
    title: '',
    desc: '',
    url: '',
    main_term_name: '',
    sub_term_name: '',
    img: '/static/images/no-image.png',
    main_term_img: '',
    sub_term_img: '',
    search_num: 0,
    ingoreTerms: [],
    onSelect: (item) => { },
    selected: false
  }

  state = {
    playing: false,
    termHover: false
  }

  handleClick = (evt) => {
    evt.preventDefault()
    if (!this.clickOnTerm) {
      this.props.onSelect(this.props)
    }
  }

  noImage = (evt) => {
    evt.target.src = '/static/images/no-image.png'
  }

  selectMainTerm = (evt) => {
    evt.preventDefault()
    const { main_term_id, main_term_img, main_term_name, main_term: mainTerm, userData } = this.props
    this.clickOnTerm = true
    if (mainTerm) {
      this.props.onSelectTerm({ term_id: main_term_id, term_name: main_term_name, img: main_term_img })
    } else if (userData) {
      this.props.onSelectUser(userData)
    }
  }

  selectSubTerm = (evt) => {
    evt.preventDefault()
    const { sub_term_id, sub_term_img, sub_term_name, main_term: mainTerm, userData, shareTerm } = this.props
    this.clickOnTerm = true
    if (mainTerm) {
      this.props.onSelectTerm({ term_id: sub_term_id, term_name: sub_term_name, img: sub_term_img })
    } else if (userData) {
      this.props.onSelectShareTerm(userData, shareTerm)
    }
  }

  renderTerms = () => {
    /* eslint-disable camelcase */
    const { main_term_name, sub_term_name, main_term_id, sub_term_id, ingoreTerms, main_term, sub_term, main_term_img, sub_term_img } = this.props
    let customStyle = { height: '52px', right: '20px', top: '0', position: 'relative' }
    return (
      <div className='mix-tag' style={customStyle}>
        <DiscoveryTerm
          onClick={_.indexOf(ingoreTerms, main_term_id) === -1 ? (evt) => {
            this.selectMainTerm(evt)
          } : _.noop}
          termObj={main_term}
          termName={main_term_name}
          ingoreTerms={ingoreTerms}
          termImg={main_term_img}
          termId={main_term_id}
          termClass='mix-tag-topic'
        />
        {
          sub_term_name && sub_term_name !== main_term_name &&
          <DiscoveryTerm
            onClick={_.indexOf(ingoreTerms, sub_term_id) === -1 ? (evt) => {
              this.selectSubTerm(evt)
            } : _.noop}
            termObj={sub_term}
            termName={sub_term_name}
            ingoreTerms={ingoreTerms}
            termImg={sub_term_img}
            termId={sub_term_id}
            termClass='mix-tag-topic'
          />
        }
      </div>
    )
  }

  renderThumnails = (images) => {
    if (images.length > 0) {
      return (
        <div className='preview-child-topics' style={{ width: 'fit-content', position: 'absolute', bottom: 8, left: 8 }}>
          {_.map(images, item =>
            <a
              key={`thumbnail-${item.name}`}
              style={{ display: 'inline-block' }}
              data-tooltip={item.name}
              data-position='bottom'
              className='bottom'>
              <img
                style={{ width: '40px', height: '40px', borderRadius: 8 }}
                className='thumbnail'
                width='40'
                height='40'
                onError={this.noImage}
                src={item.img || '/static/images/no-image.png'}
                alt={item.name}
              />
            </a>)
          }
        </div>
      )
    }
  }

  onFitTextReady = (fontSize) => {
    /* global $ */
    if (this.textContainer && typeof $ !== 'undefined') {
      $(this.textContainer).addClass('discovery-description')
    }
  }

  preloadUrl = () => {
    const { url } = this.props
    if (!isVideo(url)) {
      const PROXY_URL = '/api/preview'
      /* global URL */
      try {
        const { origin, pathname } = new URL(url)
        const proxyUrl = `${PROXY_URL}?url=${origin}${pathname}`
        const findPreloadLink = document.querySelector(`link[href="${proxyUrl}"]`)
        if (!findPreloadLink) {
          const preloadLink = document.createElement('link')
          preloadLink.href = proxyUrl
          preloadLink.rel = 'preload'
          preloadLink.as = 'fetch'
          document.head.appendChild(preloadLink)
        }
      } catch (err) {
        logger.warn('found error on preload', err)
      }
    }
  }

  renderPlayer = () => {
    const { url, width } = this.props
    if (!url) {
      return <div />
    }
    return ([
      <ReactPlayer
        key='player'
        url={url}
        playsinline
        width={width || '100%'}
        height={260}
        controls
        onReady={this.onLoad}
        muted
        playing={this.state.playing}
      />,
      <div
        key='overlay'
        style={{
          height: 260,
          position: 'absolute',
          width: '100%',
          background: 'transparent',
          top: 70
        }}
        onMouseEnter={() => this.setState({ playing: true })}
        onMouseLeave={() => this.setState({ playing: false })}
      />
    ])
  }

  render () {
    /* eslint-disable camelcase */
    const { disc_url_id, site_tld, site_img, title, desc, img, selected, url } = this.props
    const images = [{ name: site_tld, img: site_img }]
    const isVideoPlayer = isVideo(url)
    return (
      <VisibilitySensor partialVisibility>
        {({isVisible}) =>
          isVisible ? <div
            key={disc_url_id}
            className={`grid-item shuffle-item ${selected ? 'grid-item-selected' : ''}`}
            onMouseEnter={this.preloadUrl}
          >
            <div className='thumbnail-box' onClick={this.handleClick}>
              <div
                className='thumbnail'
              >
                <div
                  style={{
                    backgroundImage: `url(${img || '/static/images/no-image.png'})`,
                    backgroundSize: 'cover'
                  }}
                  className='thumbnail-image'
                />
                {this.renderThumnails(images)}
              </div>
            </div>
            <div className='discovery-title-wrap' onClick={this.handleClick}>
              <p className='discovery-title'>{title}</p>
            </div>
            <div className='discovery-description' onClick={this.handleClick}>
              {isVideoPlayer ? this.renderPlayer() : desc}
            </div>
            <div className='caption'>
              {this.renderTerms()}
            </div>
          </div>
          : <SkelDiscoveryItem key={disc_url_id} />
        }
      </VisibilitySensor>

    )
  }
}
