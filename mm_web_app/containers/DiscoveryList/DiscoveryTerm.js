/**
*
* DiscoveryTerm
*
*/

import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ReactPlayer from 'react-player'
import { tagColor, isVideo } from '../../utils/helper'
import logger from '../../utils/logger'

@inject('term')
@inject('ui')
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

  state = {
    termHover: false
  }

  noImage = (evt) => {
    evt.target.src = '/static/images/no-image.png'
  }

  changeFollow = (evt, termId, followed, title) => {
    evt.preventDefault()
    if (followed) {
      this.props.term.unfollowTopicUser(termId, () => {
        this.props.ui.addNotification(`${title} unfollowed`)
        this.props.ui.setFollowedTermHover(!followed)
        this.props.ui.hideTermHover()
        this.setState({ termHover: false })
      })
    } else {
      this.props.term.followTopicUser(termId, () => {
        this.props.ui.addNotification(`${title} followed`)
        this.props.ui.setFollowedTermHover(!followed)
        this.props.ui.hideTermHover()
        this.setState({ termHover: false })
      })
    }
  }

  render () {
    /* eslint-disable camelcase */
    const { termObj, onClick, termName, ingoreTerms, termImg, termId, termClass } = this.props
    const { termHover } = this.state
    return (
      <div>
        <div
            className={termClass}
            onClick={this.props.onClickEvt}
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
