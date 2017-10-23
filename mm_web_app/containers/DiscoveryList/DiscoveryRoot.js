import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import _ from 'lodash'
import DiscoveryItem from './DiscoveryItem'
import logger from '../../utils/logger'

@inject('term')
@observer
class DiscoveryRoot extends Component {
  static propTypes = {
    getCurrentTerm: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onSelectChildTerm: PropTypes.func.isRequired
  }

  static defaultProps = {
    getCurrentTerm: () => {},
    onSelect: () => {},
    onSelectChildTerm: () => {}
  }

  componentWillReact () {
    const { discoveries, page } = this.props.term
    logger.warn('DiscoveryRoot componentWillReact', discoveries, page)
  }

  render () {
    const items = []
    const { discoveries } = this.props.term
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
