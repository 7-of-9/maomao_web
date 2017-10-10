/**
*
* StreamItem
*
*/

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import moment from 'moment'
import InlinePreview from '../../components/Streams/InlinePreview'
import Loading from '../../components/Loading'
import logger from '../../utils/logger'

const DiscoveryNavigation = dynamic(
  import('../../containers/DiscoveryNavigation'),
  {
    loading: () => (<Loading isLoading />),
    ssr: false
  }
)

@observer
class DiscoveryDetail extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    termIds: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    utc: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    closePreview: PropTypes.func.isRequired,
    onSelectTerm: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: [],
    termIds: [],
    title: '',
    url: '',
    utc: '',
    width: '100%',
    closePreview: () => { },
    onSelectTerm: (term) => { }
  }

  handleClick = (event) => {
    event.preventDefault()
    window.open(this.props.url, '_blank')
  }

  componentWillReact () {
    logger.info('DiscoveryDetail componentWillReact', this.props)
  }

  render () {
    /* eslint-disable camelcase */
    const { items, title, url, utc, termIds, width } = this.props
    logger.info('DiscoveryDetail render', items, title, url, utc, termIds, width)
    const isReady = termIds.length === items.length
    const date = moment.utc(utc).local().format('LLLL')
    return (
      <div>
        <div className='close_button' onClick={this.props.closePreview} />
        <div className='discovery-detail'>
          <h3><a onClick={this.handleClick}>{title}</a></h3>
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
