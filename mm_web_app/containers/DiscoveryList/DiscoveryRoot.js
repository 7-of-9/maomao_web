import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import _ from 'lodash'
import DiscoveryItem from './DiscoveryItem'
import logger from '../../utils/logger'

@inject('term')
@inject('store')
@observer
class DiscoveryRoot extends Component {
  static propTypes = {
    getCurrentTerm: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onSelectChildTerm: PropTypes.func.isRequired,
    onSelectShareTerm: PropTypes.func.isRequired,
    onSelectUser: PropTypes.func.isRequired
  }

  static defaultProps = {
    getCurrentTerm: () => {},
    onSelect: () => {},
    onSelectChildTerm: () => {},
    onSelectShareTerm: () => {},
    onSelectUser: () => {}
  }

  componentWillReact () {
    const { discoveries, page } = this.props.term
    logger.warn('DiscoveryRoot componentWillReact', discoveries, page)
  }

  render () {
    const items = []
    const { discoveries } = this.props.term
    const { mine, received } = toJS(this.props.store.userHistory)
    _.forEach(received, (receivedIten, index) => {
      _.forEach(receivedIten.shares, (shareItem, index) => {
        _.forEach(shareItem.urls, (item, index) => {
          if (shareItem.type === 'topic') {
            items.push(
              <DiscoveryItem
                key={`${item.url_id}-${item.href}-${index}`}
                main_term_img={receivedIten.avatar}
                main_term_name={receivedIten.fullname}
                sub_term_img={'/static/images/no-image.png'}
                sub_term_name={shareItem.topic_name}
                userData={receivedIten}
                shareTerm={shareItem}
                onSelectShareTerm={this.props.onSelectShareTerm}
                onSelectUser={this.props.onSelectUser}
                onSelect={this.props.onSelect}
                url={item.href}
                desc={item.href}
                {...item}
              />
            )
          } else {
            items.push(
              <DiscoveryItem
                key={`${item.url_id}-${item.href}-${index}`}
                main_term_img={receivedIten.avatar}
                main_term_name={receivedIten.fullname}
                userData={receivedIten}
                onSelectUser={this.props.onSelectUser}
                onSelect={this.props.onSelect}
                url={item.href}
                desc={item.href}
                {...item}
              />
            )
          }
        })
      })
    })
    _.forEach(mine.urls, (item, index) => {
      items.push(
        <DiscoveryItem
          key={`${item.url_id}-${item.href}-${index}`}
          main_term_img={mine.avatar}
          main_term_name={mine.fullname}
          userData={mine}
          onSelectUser={this.props.onSelectUser}
          url={item.href}
          desc={item.href}
          onSelect={this.props.onSelect}
          {...item}
        />
      )
    })
    _.forEach(discoveries, (item, index) => {
      /* eslint-disable camelcase */
      if (item.main_term_id) {
        const term = this.props.getCurrentTerm(item.main_term_id)
        const subTerm = this.props.getCurrentTerm(item.sub_term_id)
        if (term && subTerm) {
          const { img: main_term_img, term_name: main_term_name } = term
          const { img: sub_term_img, term_name: sub_term_name } = subTerm
          items.push(
            <DiscoveryItem
              key={`${item.disc_url_id}-${item.url}-${index}`}
              main_term_img={main_term_img}
              main_term_name={main_term_name}
              main_term={term}
              sub_term={subTerm}
              sub_term_img={sub_term_img}
              sub_term_name={sub_term_name}
              onSelect={this.props.onSelect}
              onSelectTerm={this.props.onSelectChildTerm}
              {...item}
            />
          )
        }
      }
    })

    return items
  }
}

export default DiscoveryRoot
