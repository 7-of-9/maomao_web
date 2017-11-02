/**
*
* StreamItem
*
*/

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import moment from 'moment'
import InlinePreview from '../../components/InlinePreview'
import DiscoveryNavigation from '../../containers/DiscoveryNavigation'

@observer
class DiscoveryDetail extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    termIds: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    utc: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelectTerm: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: [],
    termIds: [],
    title: '',
    url: '',
    utc: '',
    width: '100%',
    onSelectTerm: (term) => { }
  }

  handleClick = (event) => {
    event.preventDefault()
    window.open(this.props.url, '_blank')
  }

  render () {
    /* eslint-disable camelcase */
    const { items, title, url, utc, termIds, width } = this.props
    const isReady = termIds.length === items.length
    const date = moment.utc(utc).local().format('LLLL')
    return (
      <div>
        <div className='discovery-detail'>
          <h4><a onClick={this.handleClick}>{title}</a></h4>
          <a href={url} style={{
            display: 'block',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }}>{url}</a>
          <span>{date}</span>
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
          height={'100vh'}
          url={url}
          allowScript
        />
      </div>
    )
  }
}

export default DiscoveryDetail
