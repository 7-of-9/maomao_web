/**
*
* StreamItem
*
*/

import React, { PureComponent } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Textfit } from 'react-textfit'
import _ from 'lodash'
import logger from '../../utils/logger'
import { tagColor, dynamicFontSize } from '../../utils/helper'

@inject('term')
@observer
export default class DiscoveryItem extends PureComponent {
  static propTypes = {
    disc_url_id: PropTypes.number.isRequired,
    main_term_id: PropTypes.number.isRequired,
    sub_term_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    main_term_name: PropTypes.string.isRequired,
    sub_term_name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    main_term_img: PropTypes.string.isRequired,
    sub_term_img: PropTypes.string.isRequired,
    search_num: PropTypes.number.isRequired,
    ingoreTerms: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onSelectTerm: PropTypes.func.isRequired
  }

  static defaultProps = {
    disc_url_id: 0,
    main_term_id: 0,
    sub_term_id: 0,
    title: '',
    desc: '',
    url: '',
    main_term_name: '',
    sub_term_name: '',
    img: '',
    main_term_img: '',
    sub_term_img: '',
    search_num: 0,
    ingoreTerms: [],
    onSelect: (item) => { },
    onSelectTerm: (term) => { }
  }

  handleClick = (evt) => {
    evt.preventDefault()
    if (!this.clickOnTerm) {
      logger.info('handleClick', evt.target)
      this.props.onSelect(this.props)
    }
  }

  noImage = (evt) => {
    evt.target.src = '/static/images/no-image.png'
  }

  selectMainTerm = (evt) => {
    evt.preventDefault()
    const { main_term_id, main_term_img, main_term_name } = this.props
    logger.info('selectMainTerm', main_term_id, evt.target)
    this.clickOnTerm = true
    this.props.onSelectTerm({ term_id: main_term_id, term_name: main_term_name, img: main_term_img })
  }

  selectSubTerm = (evt) => {
    evt.preventDefault()
    const { sub_term_id, sub_term_img, sub_term_name } = this.props
    logger.info('selectSubTerm', sub_term_id, evt.target)
    this.clickOnTerm = true
    this.props.onSelectTerm({ term_id: sub_term_id, term_name: sub_term_name, img: sub_term_img })
  }

  renderTerms = () => {
    /* eslint-disable camelcase */
    const { main_term_img, main_term_name, sub_term_img, sub_term_name, main_term_id, sub_term_id, ingoreTerms } = this.props
    let customStyle = { height: '52px' }
    if (sub_term_name !== main_term_name) {
      customStyle = Object.assign({}, customStyle, { top: '-15px' })
    }
    return (
      <div className='mix-tag' style={customStyle}>
        <div className='mix-tag-topic' onClick={this.selectMainTerm}>
          <span
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)), url(${main_term_img || '/static/images/no-image.png'})`,
              backgroundSize: 'cover',
              fontSize: dynamicFontSize(main_term_name),
              cursor: _.indexOf(ingoreTerms, main_term_id) === -1 ? 'pointer' : 'default'
            }}
            className={`tags ${tagColor(main_term_name)}`} rel='tag'>
            {main_term_name}
          </span>
        </div>
        {
          sub_term_name && sub_term_name !== main_term_name &&
          <div className='mix-tag-topic' onClick={this.selectSubTerm}>
            <span
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)), url(${sub_term_img || '/static/images/no-image.png'})`,
                backgroundSize: 'cover',
                fontSize: dynamicFontSize(sub_term_name),
                cursor: _.indexOf(ingoreTerms, sub_term_id) === -1 ? 'pointer' : 'default'
              }}
              className={`tags ${tagColor(sub_term_name)}`} rel='tag'>
              {sub_term_name}
            </span>
          </div>
        }
      </div>
    )
  }

  componentDidMount () {
    const { main_term_id, sub_term_id } = this.props
    if (!this.props.term.termsCache[main_term_id]) {
      this.props.term.preloadTerm(main_term_id, false)
    }
    if (!this.props.term.termsCache[sub_term_id]) {
      this.props.term.preloadTerm(sub_term_id, false)
    }
  }

  renderThumnails = (images) => {
    if (images.length > 0) {
      return (
        <div className='preview-child-topics' style={{ width: 'fit-content', position: 'absolute', bottom: '30px' }}>
          {_.map(images, item =>
            <a
              key={`thumbnail-${item.name}`}
              style={{ display: 'inline-block' }}
              data-tooltip={item.name}
              data-position='bottom'
              className='bottom'>
              <img
                style={{ width: '40px', height: '40px' }}
                className='thumbnail'
                width='40'
                height='40'
                onError={this.noImage}
                src={item.img}
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
    const { url, disc_url_id: urlId } = this.props
    const PROXY_URL = '/api/preview'
    const proxyUrl = `${PROXY_URL}?url=${url}`
    const findPreloadLink = document.querySelector(`link[href="${proxyUrl}"]`)
    const finddPreloadIframe = document.querySelector(`iframe[id="${urlId}"]`)
    if (!findPreloadLink && !finddPreloadIframe) {
      logger.warn('preloadUrl', url)
      const preloadLink = document.createElement('link')
      preloadLink.href = proxyUrl
      preloadLink.rel = 'preload'
      preloadLink.as = 'document'
      document.head.appendChild(preloadLink)
      // load via iframe, fallback for preload
      const iframe = document.createElement('iframe')
      iframe.setAttribute('width', '0')
      iframe.setAttribute('height', '0')
      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('name', 'preload')
      iframe.id = urlId
      iframe.src = proxyUrl
      document.body.appendChild(iframe)
    }
  }

  render () {
    /* eslint-disable camelcase */
    const { disc_url_id, site_tld, site_img, title, desc, search_num, img } = this.props
    const images = [{ name: site_tld, img: site_img }]
    const inlineStyle = {
      height: 240
    }
    return (
      <div key={disc_url_id} className='grid-item shuffle-item'>
        <div className='thumbnail-box'>
          <div
            className='thumbnail'
          >
            <a
              style={{
                backgroundImage: `url(${img || '/static/images/no-image.png'})`,
                backgroundSize: 'cover'
              }}
              className='thumbnail-image'
              onClick={this.handleClick}
              onMouseEnter={this.preloadUrl}
            >
              <div className='discovery-title-wrap'>
                <p className='discovery-title'>{title}</p>
              </div>
              <div ref={el => { this.textContainer = el }} >
                <Textfit
                  mode='multi'
                  style={inlineStyle}
                  onReady={this.onFitTextReady}
                >
                  {desc}
                </Textfit>
              </div>
              <div className='caption' style={{ bottom: '72px', right: '-12px' }}>
                {this.renderTerms()}
              </div>
            </a>
            {this.renderThumnails(images)}
            <span style={{ fontSize: '11px' }}>S: {search_num} ID: {disc_url_id}</span>
          </div>
        </div>
      </div>
    )
  }
}
