import React, { Component } from 'react'
import logger from '../../utils/logger'

function withSW (BaseComponent) {
  class WithSW extends Component {
    componentDidMount () {
      /* eslint-disable no-console */
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          console.log('service worker registration successful');
        })
        .catch((err) => {
          console.warn('service worker registration failed', err.message);
        });
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
