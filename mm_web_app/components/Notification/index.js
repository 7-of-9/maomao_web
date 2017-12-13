/*
 *
 * Notification
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { NotificationStack } from 'react-notification'
import logger from '../../utils/logger'

@inject('notificationStore')
@observer
class Notification extends React.Component {
  removeNotification = (uuid) => {
    this.props.notificationStore.removeNotification(uuid)
  }

  componentWillReact () {
    logger.info('Notification componentWillReact')
  }

  componentWillUnmount () {
    logger.info('Notification componentWillUnmount')
    this.props.notificationStore.clearNotifications()
  }

  barStyle = (index, style, notification) => {
    return {
      backgroundImage: 'url(/static/images/icons/android-icon-48x48.png), linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundPosition: '1.5em, left',
      color: '#222',
      paddingLeft: 100,
      right: '1rem',
      left: 'auto',
      top: 'auto',
      bottom: `${2 + index * 6}rem`
    };
  }

  render () {
    return (
      <NotificationStack
        notifications={this.props.notificationStore.notifications.slice()}
        dismissAfter={500000}
        onDismiss={this.removeNotification}
        barStyleFactory={this.barStyle}
        activeBarStyleFactory={this.barStyle}
        />)
  }
}

export default Notification
