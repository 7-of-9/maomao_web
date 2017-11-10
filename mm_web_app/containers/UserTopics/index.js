/*
 *
 * UserTopics
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'
import { observer, inject } from 'mobx-react'
import Loading from '../../components/Loading'
import Layout from '../../components/Layout'
import logger from '../../utils/logger'

const TopicTree = dynamic(
import('./TopicTree'),
  {
    loading: () => (<Loading isLoading />)
  }
)

@inject('store')
@inject('term')
@inject('ui')
@observer
class UserTopics extends React.Component {
  renderTopicTree = () => {
    const { isLogin } = this.props.store
    return (
      <div className='wrapper-slide'>
        { isLogin && <TopicTree /> }
      </div>)
  }

  render () {
    const title = 'maomao - discover & share'
    let description = 'maomao is a peer-to-peer real time content sharing network, powered by a deep learning engine.'
    logger.info('User Topics render', this.props)
    return (
      <Layout title={title} description={description}>
        { this.renderTopicTree() }
      </Layout>
    )
  }
}

export default UserTopics
