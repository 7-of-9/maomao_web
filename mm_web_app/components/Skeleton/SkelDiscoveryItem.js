import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SkelText from './SkelText'

export default class SkelDiscoveryItem extends Component {
  static propTypes = {
    id: PropTypes.number
  }
  render () {
    return <div
      key={this.props.id}
      className='grid-item shuffle-item'
    >
      <div className='thumbnail-box'>
        <div
          className='thumbnail'
        >
          <div
            style={{
              background: '#eee'
            }}
            className='thumbnail-image'
          />
        </div>
      </div>
      <div className='discovery-title-wrap'>
        <SkelText height={12} margin={'4px auto'} />
        <SkelText height={12} margin={'4px auto'} />
        <SkelText height={12} margin={'4px auto'} />
      </div>
    </div>
  }
}
