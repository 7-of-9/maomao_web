import React from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../stores/home'
import { initUIStore } from '../stores/ui'
import { initDiscoveryStore } from '../stores/discovery'
import { initTermStore } from '../stores/term'
import stylesheet from '../styles/index.scss'
import logger from '../utils/logger'
import UserTopics from '../containers/UserTopics'

export default class Topics extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    let userAgent = ''
    if (req && req.headers && req.headers['user-agent']) {
      userAgent = req.headers['user-agent']
    }
    const user = req && req.session ? req.session.currentUser : null
    const store = initStore(isServer, userAgent, user, true)
    const uiStore = initUIStore(isServer)
    const discovery = initDiscoveryStore(isServer, userAgent, user, [])
    const term = initTermStore(isServer, [], { terms: [] })
    term.getTopicTree()
    term.getFollowedTopics()
    return { isServer, ...store, ...uiStore, ...discovery, ...term }
  }

  constructor (props) {
    super(props)
    logger.info('Topics', props)
    this.store = initStore(props.isServer, props.userAgent, props.user, true)
    this.term = initTermStore(props.isServer, props.findTerms, props.termsInfo)
    this.uiStore = initUIStore(props.isServer)
    this.store.checkEnvironment()
    this.discovery = initDiscoveryStore(props.isServer, props.userAgent, props.user, props.terms)
  }

  componentWillMount () {
    const { userId, userHash } = this.store
    this.term.setApiToken(userId, userHash)
    this.term.getTopicTree()
    this.term.getFollowedTopics()
  }

  render () {
    logger.info('Topics render')
    return (
      <Provider store={this.store} discovery={this.discovery} ui={this.uiStore} term={this.term}>
        <div>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <UserTopics />
        </div>
      </Provider>

    )
  }
}
