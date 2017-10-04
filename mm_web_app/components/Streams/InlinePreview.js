/**
*
* YoutubePlayer
*
*/

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import urlParser from 'js-video-url-parser'
import logger from '../../utils/logger'

export default class InlinePreview extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    closePreview: PropTypes.func,
    width: PropTypes.any.isRequired,
    height: PropTypes.any.isRequired,
    allowScript: PropTypes.bool.isRequired
  }

  static defaultProps = {
    url: '',
    closePreview: () => {},
    width: '100%',
    height: '100%',
    allowScript: false
  }

  renderPlayer = () => {
    const { url, width, height } = this.props
    logger.info('renderPlayer', url, width, height)
    if (!url) {
      return null
    }
    return (<ReactPlayer
      url={url}
      playsinline
      playing
      width={width || '100%'}
      height={height || '100%'}
      controls
      />)
  }

  renderIframe = () => {
    const { url, width, height, allowScript } = this.props
    logger.info('renderIframe', url, width, height)
    if (!url) {
      return null
    }
    const PROXY_URL = '/api/preview'
    const proxyUrl = `${PROXY_URL}?url=${url}`
    return (
      <div
        style={{width: width || '100%', height: height || '100%'}}
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
        />
      </div>
    )
  }

  render () {
    const { url } = this.props
    const parsed = urlParser.parse(url)
    logger.info('video parse result', parsed)
    const isVideoPlayer = !!parsed
    logger.info('isVideoPlayer', isVideoPlayer)
    return (
      <div className='grid-item--full'>
        <div className='close_button' onClick={this.props.closePreview} />
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
