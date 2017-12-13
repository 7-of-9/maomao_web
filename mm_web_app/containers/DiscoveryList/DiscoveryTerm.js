/**
*
* DiscoveryTerm
*
*/

import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { tagColor } from '../../utils/helper'

@inject('term')
@inject('ui')
@inject('notificationStore')
@observer
export default class DiscoveryTerm extends Component {
  static propTypes = {
    termObj: PropTypes.string,
    onClick: PropTypes.func,
    termName: PropTypes.string,
    ingoreTerms: PropTypes.array,
    termImg: PropTypes.string,
    termId: PropTypes.number,
    termClass: PropTypes.string
  }

  static defaultProps = {
  }

  noImage = (evt) => {
    evt.target.src = '/static/images/no-image.png'
  }

  changeFollow = (evt, termId, followed, title) => {
    evt.preventDefault()
    if (followed) {
      this.props.term.unfollowTopicUser(termId, () => {
        this.props.notificationStore.addNotification(`${title} unfollowed`)
        this.props.ui.setFollowedTermHover(!followed)
        this.props.ui.hideTermHover()
        this.setState({ termHover: false })
      })
    } else {
      this.props.term.followTopicUser(termId, () => {
        this.props.notificationStore.addNotification(`${title} followed`)
        this.props.ui.setFollowedTermHover(!followed)
        this.props.ui.hideTermHover()
        this.setState({ termHover: false })
      })
    }
  }

  render () {
    /* eslint-disable camelcase */
    const { onClick, termName, ingoreTerms, termImg, termId, termClass } = this.props
    return (
      <div>
        <div
          className={termClass}
          onClick={onClick}
          key='term'
        >
          <span
            className={`current-topic-name tags ${tagColor(termName)}`}
            rel='tag'
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${termImg || '/static/images/no-image.png'})`,
              backgroundSize: 'cover',
              cursor: _.indexOf(ingoreTerms, termId) === -1 ? 'pointer' : 'default'
            }}
          >
            {termName}
          </span>
        </div>
      </div>
    )
  }
}
