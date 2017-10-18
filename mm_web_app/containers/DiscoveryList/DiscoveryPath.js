/**
*
* DiscoveryList
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import _ from 'lodash'
import Loading from '../../components/Loading'
import { isSameStringOnUrl } from '../../utils/helper'

const MARGIN_FOR_SLITTER = 50

const Carousel = dynamic(
  import('../../components/Carousel'),
  {
    ssr: false,
    loading: () => null
  }
)

@inject('term')
@inject('store')
@inject('ui')
@observer
class DiscoveryPath extends Component {
  static propTypes = {
    currentWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onBack: PropTypes.func.isRequired,
    onSelectChildTerm: PropTypes.func.isRequired
  }
  static defaultProps = {
    currentWidth: 0,
    onBack: () => {},
    onSelectChildTerm: () => {}
  }

  changeFollow = (termId, followed, title) => {
    if (followed) {
      this.props.term.unfollowTopicUser(termId, () => this.props.ui.addNotification(`${title} unfollowed`))
    } else {
      this.props.term.followTopicUser(termId, () => this.props.ui.addNotification(`${title} followed`))
    }
  }

  renderDiscoveryPath = () => {
    const { isSplitView, discoveryTermId } = toJS(this.props.ui)
    const currentTerm = this.props.term.termsCache[discoveryTermId]
    const { findTerms, termsInfo: { terms }, followedTopics } = toJS(this.props.term)
    const { currentWidth } = this.props
    const items = []
    const topics = []
    const carouselItems = []
    _.forEach(findTerms, item => {
      const term = _.find(terms, term => isSameStringOnUrl(term.term_name, item))
      if (term) {
        const { img, term_name: title, term_id: termId } = term
        const followed = followedTopics.topics ? !!followedTopics.topics.find(x => x.term_id === termId) : false
        items.push(
        <div className='topic' key={`back-to-${title}`}>
          {followedTopics.topics &&
            <div className='topic-follow'>
              <input
                checked={followed}
                type='checkbox'
                id={`followCheck-${termId}`}
                onChange={() => this.changeFollow(termId, followed, title)}
                />
              <label htmlFor={`followCheck-${termId}`} />
            </div>
          }
          <span
            onClick={() => this.props.onBack(term)}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)), url(${img || '/static/images/no-image.png'})`,
              backgroundSize: 'cover',
              cursor: 'pointer'
            }}
            className='current-topic-name tags' rel='tag'>
            <i className='fa fa-angle-left' aria-hidden='true' /> &nbsp;&nbsp;
            {title}
          </span>
        </div>)
      }
    })

    if (items.length === 0) {
      return <div />
    }

    if (!currentTerm) {
      return (
        <div className={isSplitView ? 'navigation-panel bounceInRight animated' : 'navigation-pane bounceInLeft animated'} style={{ left: currentWidth ? currentWidth + MARGIN_FOR_SLITTER / 2 : 0 }}>
          <div className='breadcrum'>
            {items}
            <div style={{ width: 50, height: 50 }}><Loading isLoading /></div>
          </div>
        </div>
      )
    }

    const { child_suggestions: childSuggestions, child_topics: childTopics } = currentTerm
    if (childSuggestions) {
      _.forEach(childSuggestions, term => {
        if (term.term_name !== '...') {
          topics.push(term)
        }
      })
    }
    if (childTopics) {
      _.forEach(childTopics, term => {
        if (term.term_name !== '...') {
          topics.push(term)
        }
      })
    }

    if (topics.length) {
      _.forEach(_.uniqBy(topics, 'term_id'), term => {
        const { img, term_name: title, term_id: termId } = term
        if (!_.find(findTerms, term => isSameStringOnUrl(term, title))) {
          const followed = followedTopics.topics ? !!followedTopics.topics.find(x => x.term_id === termId) : false
          carouselItems.push(
            <div className='topic' key={`navigate-to-${title}-${termId}`}>
              {followedTopics.topics &&
                <div className='topic-follow'>
                  <input
                    checked={followed}
                    type='checkbox'
                    id={`followCheck-${termId}`}
                    onChange={() => this.changeFollow(termId, followed, title)}
                    />
                  <label htmlFor={`followCheck-${termId}`} />
                </div>
              }
              <span
                onClick={() => this.props.onSelectChildTerm(term)}
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.8)), url(${img || '/static/images/no-image.png'})`,
                  backgroundSize: 'cover',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  padding: '3px'
                }}
                className='current-topic-name tags' rel='tag'>
                {title}
              </span>
            </div>)
        }
      })
    }

    if (carouselItems.length > 0) {
      const settings = {
        navContainerClass: 'carousel-nav owl-nav',
        stageOuterClass: 'carousel-outer owl-stage-outer',
        stageClass: 'carousel-stage owl-stage',
        nav: false,
        dots: false,
        autoWidth: true
      }
      return (
        <div className={isSplitView ? 'navigation-panel bounceInRight animated' : 'navigation-pane bounceInLeft animated'} style={{ left: currentWidth ? currentWidth + MARGIN_FOR_SLITTER / 2 : 0 }}>
          <div className='breadcrum'>
            {items}
            {carouselItems.length > 0 &&
              <Carousel settings={settings}>
                {carouselItems}
              </Carousel>
            }
          </div>
        </div>
      )
    } else {
      return (
        <div className={isSplitView ? 'navigation-panel bounceInRight animated' : 'navigation-pane bounceInLeft animated'} style={{ left: currentWidth ? currentWidth + MARGIN_FOR_SLITTER / 2 : 0 }}>
          <div className='breadcrum'>
            {items}
          </div>
        </div>
      )
    }
  }

  render () {
    return this.renderDiscoveryPath()
  }
}

export default DiscoveryPath
