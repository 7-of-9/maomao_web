import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SkelDiscoveryItem from '../Skeleton/SkelDiscoveryItem'

export default class DiscoveryListLoading extends Component {
  static propTypes = {
    number: PropTypes.number
  }

  static defaultProps = {
    number: 10
  }

  render () {
    var data = []
    for (var i = 0; i < this.props.number; i++) {
      data.push(<SkelDiscoveryItem key={i} />)
    }
    return data
  }
}
