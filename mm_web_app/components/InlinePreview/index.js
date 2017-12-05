/**
*
* YoutubePlayer
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { isVideo } from '../../utils/helper'

export default class InlinePreview extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    width: PropTypes.any.isRequired,
    height: PropTypes.any.isRequired,
    allowScript: PropTypes.bool.isRequired
  }

  static defaultProps = {
    url: '',
    width: '100%',
    height: '100%',
    allowScript: false
  }

  state = {
    isReady: false
  }

  renderPlayer = () => {
    const { url, width, height } = this.props
    if (!url) {
      return <div />
    }
    return (<ReactPlayer
      url={url}
      playsinline
      playing
      width={width || '100%'}
      controls={true}
      onReady={this.onLoad}
      />)
  }

  renderIframe = () => {
    const { url, width, height, allowScript } = this.props
    if (!url) {
      return <div />
    }
    const PROXY_URL = '/api/preview'
    const proxyUrl = `${PROXY_URL}?url=${url}`
    return (
      <div
        style={{width: width || '100%', height: height || '100%', background: '#000'}}
        >
        <iframe
          className='iframe-view'
          sandbox={allowScript ? 'allow-same-origin allow-scripts allow-forms allow-presentation allow-popups' : 'allow-same-origin allow-forms allow-presentation allow-popups'}
          id={`frame-${url}`}
          name={`frame-${url}`}
          ref={(iframe) => { this.iframe = iframe }}
          width={width}
          height={height}
          frameBorder='0'
          allowFullScreen
          allowTransparency
          src={proxyUrl}
          onLoad={this.onLoad}
        />
      </div>
    )
  }

  showLoading = () => {
    this.setState({
      isReady: false
    })
  }

  onLoad = () => {
    this.setState({
      isReady: true
    })
  }

  componentWillMount () {
    this.showLoading()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.url && this.props.url !== nextProps.url) {
      this.showLoading()
    }
  }

  render () {
    const { url, width, height } = this.props
    const isVideoPlayer = isVideo(url)
    const { isReady } = this.state
    return (
      <div className='grid-item--full'>
        { isReady || <div className='grid-item--loading'>
          <div
            style={{width: width || '100%', height: height || '100%'}}
          />
        </div>}
        {
          isVideoPlayer &&
          this.renderPlayer()
        }
        {
          !isVideoPlayer &&
          this.renderIframe()
        }
      </div>
    )
  }
}
