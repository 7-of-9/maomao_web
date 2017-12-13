/**
*
* TopicTree
*
*/

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import SortableTree, { changeNodeAtPath } from 'react-sortable-tree'

@inject('store')
@inject('term')
@inject('ui')
@inject('notificationStore')
@observer
class TopicTree extends Component {
  constructor (props) {
    super(props)
    this.generateData()
  }

  generateData = () => {
    const { tree } = toJS(this.props.term)
    const treeData = tree.map((item, index) => {
      item.index = index
      item.children = item.child_topics.map((item2, index) => {
        item2.index = index
        item2.children = item2.child_topics.map((item3, index) => {
          item3.index = index
          item3.children = item3.child_topics.map((item4, index) => {
            item4.index = index
            item4.followed = this.checkFollowed(item4)
            return item4
          })
          item3.followed = this.checkFollowed(item3)
          item3.expanded = !!item3.children.find(x => x ? x.followed : false)
          return item3
        })
        item2.followed = this.checkFollowed(item2)
        item2.expanded = !!item2.children.find(x => x ? x.followed : false)
        return item2
      })
      item.followed = this.checkFollowed(item)
      item.expanded = !!item.children.find(x => x ? x.followed : false)
      return item
    })
    this.state = {
      treeData
    }
  }

  cleanClassName = () => {
    /* global $ */
    if (this.animateEl && typeof $ !== 'undefined') {
      $(this.animateEl).removeClass('bounceInLeft animated bounceInRight')
    }
  }

  componentWillUpdate () {
    this.cleanClassName()
  }

  getNodeKey = ({ node: { term_id: termId, index } }) => '' + termId + index;

  checkFollowed = (term) => {
    const { followedTopics } = toJS(this.props.term)
    return followedTopics.topics ? !!followedTopics.topics.find(x => x.term_id === term.term_id) : false
  }

  changeFollow = (termId, followed, title, node, path) => {
    if (followed) {
      this.props.term.unfollowTopicUser(termId, () => {
        this.props.notificationStore.addNotification(`${title} unfollowed`, 'Topics')
        this.setState(state => ({
          treeData: changeNodeAtPath({
            treeData: state.treeData,
            path,
            getNodeKey: this.getNodeKey,
            newNode: { ...node, followed: !followed }
          })
        }))
      })
    } else {
      this.props.term.followTopicUser(termId, () => {
        this.props.notificationStore.addNotification(`${title} followed`, 'Topics')
        this.setState(state => ({
          treeData: changeNodeAtPath({
            treeData: state.treeData,
            path,
            getNodeKey: this.getNodeKey,
            newNode: { ...node, followed: !followed }
          })
        }))
      })
    }
  }

  render () {
    const { isProcessingTopicTree } = toJS(this.props.term)
    const { treeData } = this.state
    if (isProcessingTopicTree) {
      return <div />
    }
    const { treeLevel, animationType } = toJS(this.props.ui)
    const animateClassName = animationType === 'LTR' ? `grid-row grid-user-topic bounceInLeft animated level-${treeLevel}` : `grid-row bounceInRight animated level-${treeLevel}`
    return (
      <div className='topic-tree' style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{ margin: 16 }}>
          <h1 style={{ fontWeight: 700, fontSize: '2.5em' }}>Topic Following</h1>
          <span>Follow and unfollow your favorite topics</span>
        </div>
        <div className='main-inner' style={{ height: 'calc(100vh - 256px)', marginBottom: 16 }}>
          <SortableTree
            className={animateClassName}
            treeData={treeData}
            onChange={treeData => this.setState({ treeData })}
            getNodeKey={this.getNodeKey}
            canDrag={false}
            generateNodeProps={({ node, path }) => {
              return {
                className: 'user-topic-tree',
                title: (
                  <div
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${node.img || '/static/images/no-image.png'})`,
                      backgroundSize: 'cover',
                      height: '100%',
                      borderRadius: 8,
                      color: '#fff',
                      padding: '8px 120px 8px 8px'
                    }}
                  >
                    {node.term_name}
                    <div style={{
                      position: 'absolute',
                      right: -14,
                      bottom: -4
                    }}>
                      <label className='label'>
                        <input className='label__checkbox' type='checkbox' checked={node.followed} onChange={() => this.changeFollow(node.term_id, node.followed, node.term_name, node, path)} />
                        <span className='label__text'>
                          <span className='label__check'>
                            <i className='fa fa-check icon' />
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                )
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default TopicTree
