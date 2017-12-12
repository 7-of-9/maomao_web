import React, { Component } from 'react'
import logger from '../../utils/logger'

function withSW (BaseComponent) {
  class WithSW extends Component {
    componentDidMount () {
      if ('serviceWorker' in navigator) {
        if (process.env.NODE_ENV === 'production') {
          navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
              logger.log('service worker registration successful')
            })
            .catch(err => {
              logger.info('service worker registration failed', err.message)
            })
        }
      }
    }

    render () {
      return (
        <BaseComponent {...this.props} {...this.state} />
      )
    }
  }

  return WithSW
}

export default withSW
