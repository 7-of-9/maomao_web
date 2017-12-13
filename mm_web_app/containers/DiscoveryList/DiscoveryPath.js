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
@inject('notificationStore')
@observer
class DiscoveryPath extends Component {
  static propTypes = {
    onBack: PropTypes.func.isRequired,
    onSelectChildTerm: PropTypes.func.isRequired
  }
  static defaultProps = {
    onBack: () => {},
    onSelectChildTerm: () => {}
  }

  changeFollow = (termId, followed, title) => {
    if (followed) {
      this.props.term.unfollowTopicUser(termId, () => {
        this.props.notificationStore.addNotification(`${title} unfollowed`, 'Topics')
      })
    } else {
      this.props.term.followTopicUser(termId, () => {
        this.props.notificationStore.addNotification(`${title} followed`, 'Topics')
      })
    }
  }

  renderDiscoveryPath = () => {
    const { discoveryTermId, isSplitView, spliterWidth } = toJS(this.props.ui)
    const currentTerm = this.props.term.termsCache[discoveryTermId]
    const { findTerms, termsInfo: { terms }, userData, shareTerm, followedTopics } = toJS(this.props.term)
    const items = []
    const topics = []
    const carouselItems = []
    _.forEach(findTerms, item => {
      const term = _.find(terms, term => isSameStringOnUrl(term.term_name, item))
      if (term) {
        const { img, term_name: title, term_id: termId } = term
        let followed = false
        if (followedTopics && followedTopics.topics) {
          followed = !!followedTopics.topics.find(x => x.term_id === termId)
        }
        items.push(
          <div
            className='topic'
            key={`back-to-${title}-${termId}`}
          >
            <span
              onClick={() => {
                this.props.onBack(term)
              }}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)), url(${img || '/static/images/no-image.png'})`,
                backgroundSize: 'cover',
                cursor: 'pointer',
                padding: '8px 120px 8px 8px'
              }}
              className='current-topic-name tags' rel='tag'>
              <i className='fa fa-angle-left' aria-hidden='true' /> &nbsp;&nbsp;
              {title}
            </span>
            <div className='topic-follow' style={{
              position: 'absolute',
              right: -10,
              bottom: 0
            }}>
              <label className='label'>
                <input className='label__checkbox' type='checkbox' checked={followed} onChange={() => this.changeFollow(term.term_id, followed, term.term_name)} />
                <span className='label__text'>
                  <span className='label__check'>
                    <i className='fa fa-check icon' />
                  </span>
                </span>
              </label>
            </div>
          </div>
        )
      }
    })
    if (userData.user_id) {
      const { fullname, user_id: userId, avatar } = userData
      items.push(
        <div
          className='topic'
          key={`back-to-${fullname}-${userId}`}
        >
          <span
            onClick={() => this.props.onBack({userData})}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)), url(${avatar || '/static/images/no-image.png'})`,
              backgroundSize: 'cover',
              cursor: 'pointer'
            }}
            className='current-topic-name tags' rel='tag'>
            <i className='fa fa-angle-left' aria-hidden='true' /> &nbsp;&nbsp;
            {fullname}
          </span>
        </div>
      )
      if (shareTerm.topic_name) {
        const { topic_name: topicName } = shareTerm
        items.push(
          <div
            className='topic'
            key={`back-to-${fullname}-${userId}-${topicName}`}
          >
            <span
              onClick={() => this.props.onBack({userData, shareTerm})}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)), url(/static/images/no-image.png)`,
                backgroundSize: 'cover',
                cursor: 'pointer'
              }}
              className='current-topic-name tags' rel='tag'>
              <i className='fa fa-angle-left' aria-hidden='true' /> &nbsp;&nbsp;
              {topicName}
            </span>
          </div>
        )
      }
      return (
        <div className={'navigation-pane bounceInLeft animated'} style={{ width: isSplitView ? `calc(100vw - ${spliterWidth + 15}px)` : '100%' }}>
          <div className='breadcrum'>
            {items}
          </div>
        </div>
      )
    }

    if (items.length === 0) {
      return <div />
    }

    if (!currentTerm) {
      return (
        <div className={'navigation-pane bounceInLeft animated'} style={{ width: isSplitView ? `calc(100vw - ${spliterWidth + 15}px)` : '100%' }}>
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
        let followed = false
        if (followedTopics && followedTopics.topics) {
          followed = !!followedTopics.topics.find(x => x.term_id === termId)
        }
        if (!_.find(findTerms, term => isSameStringOnUrl(term, title))) {
          carouselItems.push(
            <div
              className='topic'
              key={`navigate-to-${title}-${termId}`}
            >
              <span
                onClick={() => {
                  this.props.onSelectChildTerm(term)
                }}
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.8)), url(${img || '/static/images/no-image.png'})`,
                  backgroundSize: 'cover',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  padding: '4px 120px 4px 8px'
                }}
                className='current-topic-name tags' rel='tag'>
                {title}
              </span>
              <div className='topic-follow' style={{
                position: 'absolute',
                right: -14,
                bottom: -4
              }}>
                <label className='label'>
                  <input className='label__checkbox' type='checkbox' checked={followed} onChange={() => this.changeFollow(term.term_id, followed, term.term_name)} />
                  <span className='label__text'>
                    <span className='label__check'>
                      <i className='fa fa-check icon' />
                    </span>
                  </span>
                </label>
              </div>
            </div>)
        }
      })
    }

    if (carouselItems.length > 0) {
      const settings = {
        variableWidth: true,
        infinite: false,
        centerMode: false
      }
      return (
        <div className={'navigation-pane bounceInLeft animated'} style={{ width: isSplitView ? `calc(100vw - ${spliterWidth + 15}px)` : '100%' }}>
          <div className='breadcrum'>
            {items}
          </div>
          {carouselItems.length > 0 &&
            <div className='breadcrum' style={{ maxWidth: isSplitView ? `calc(100vw - ${spliterWidth + 15}px)` : '100%', width: 'auto' }}>
              <Carousel settings={settings} className='slick-nav'>
                {carouselItems}
              </Carousel>
            </div>
          }
        </div>
      )
    } else {
      return (
        <div className={'navigation-pane bounceInLeft animated'} style={{ width: isSplitView ? `calc(100vw - ${spliterWidth + 15}px)` : '100%' }}>
          <div className='breadcrum'>
            {items}
          </div>
        </div>
      )
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return false
  }

  render () {
    return this.renderDiscoveryPath()
  }
}

export default DiscoveryPath
