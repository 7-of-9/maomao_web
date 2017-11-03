/**
*
* StreamItem
*
*/

import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import PropTypes from 'prop-types'
import { Textfit } from 'react-textfit'
import _ from 'lodash'
import { tagColor, isVideo } from '../../utils/helper'
import logger from '../../utils/logger'

@inject('term')
@inject('ui')
@observer
export default class DiscoveryItem extends Component {
  static propTypes = {
    disc_url_id: PropTypes.number.isRequired,
    main_term_id: PropTypes.number.isRequired,
    sub_term_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    main_term_name: PropTypes.string.isRequired,
    sub_term_name: PropTypes.string.isRequired,
    main_term: PropTypes.object.isRequired,
    sub_term: PropTypes.object.isRequired,
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
    main_term: {},
    sub_term: {},
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
      this.props.onSelect(this.props)
    }
  }

  noImage = (evt) => {
    evt.target.src = '/static/images/no-image.png'
  }

  selectMainTerm = (evt) => {
    evt.preventDefault()
    const { main_term_id, main_term_img, main_term_name } = this.props
    this.clickOnTerm = true
    this.props.onSelectTerm({ term_id: main_term_id, term_name: main_term_name, img: main_term_img })
  }

  selectSubTerm = (evt) => {
    evt.preventDefault()
    const { sub_term_id, sub_term_img, sub_term_name } = this.props
    this.clickOnTerm = true
    this.props.onSelectTerm({ term_id: sub_term_id, term_name: sub_term_name, img: sub_term_img })
  }

  handleHoverTerm = (evt, term) => {
    const { followedTopics } = toJS(this.props.term)
    const followed = followedTopics.topics ? !!followedTopics.topics.find(x => x.term_id === term.term_id) : false
    const termHover = {
      top: evt.target.getBoundingClientRect().top + evt.target.offsetHeight,
      left: evt.target.getBoundingClientRect().left,
      term,
      followed,
      height: evt.target.offsetHeight
    }
    console.log(evt.target)
    this.props.ui.showTermHover(termHover)
  }

  handleLeaveHoverTerm = (term) => {
    setTimeout(() => {
      if (!this.props.ui.termHoverVisible && term.term_id === toJS(this.props.ui.termHover.term).term_id) {
        this.props.ui.hideTermHover()
      }
    }, 10)
  }

  renderTerms = () => {
    /* eslint-disable camelcase */
    const { main_term_name, sub_term_name, main_term_id, sub_term_id, ingoreTerms, main_term, sub_term } = this.props
    let customStyle = { height: '52px', right: '20px', top: '-29px', position: 'relative' }
    if (sub_term_name !== main_term_name) {
      customStyle = Object.assign({}, customStyle, { top: '-54px' })
    }
    return (
      <div className='mix-tag' style={customStyle}>
        <div
          className='mix-tag-topic'
          onClick={_.indexOf(ingoreTerms, main_term_id) === -1 ? (evt) => {
            this.selectMainTerm(evt)
            this.props.ui.hideTermHover()
          } : _.noop}
        >
          <span
            className={`tags ${tagColor(main_term_name)}`}
            rel='tag'
            onMouseEnter={(evt) => this.handleHoverTerm(evt, main_term)}
            onMouseLeave={() => this.handleLeaveHoverTerm(main_term)}
          >
            {main_term_name}
          </span>
        </div>
        {
          sub_term_name && sub_term_name !== main_term_name &&
          <div
            className='mix-tag-topic'
            onClick={_.indexOf(ingoreTerms, sub_term_id) === -1 ? (evt) => {
              this.selectSubTerm(evt)
              this.props.ui.hideTermHover()
            } : _.noop}
          >
            <span
              className={`tags ${tagColor(sub_term_name)}`}
              rel='tag'
              onMouseEnter={(evt) => this.handleHoverTerm(evt, sub_term)}
              onMouseLeave={() => this.handleLeaveHoverTerm(sub_term)}
            >
              {sub_term_name}
            </span>
          </div>
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

  render () {
    /* eslint-disable camelcase */
    const { disc_url_id, site_tld, site_img, title, desc, img } = this.props
    const images = [{ name: site_tld, img: site_img }]
    const inlineStyle = {
      height: 'calc(100% - 65px)',
      overflow: 'hidden'
    }
    return (
      <div
        key={disc_url_id}
        className='grid-item shuffle-item'
        onClick={this.handleClick}
        onMouseEnter={this.preloadUrl}
      >
        <div className='thumbnail-box' >
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
        <div className='caption'>
          {this.renderTerms()}
        </div>
      </div>
    )
  }
}
