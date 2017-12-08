/**
*
* Slogan
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header'

@inject('term')
@inject('store')
@inject('ui')
@observer
class Slogan extends Component {
  static propTypes = {
    redirectUrl: PropTypes.string
  }

  redirectToSpecialUrl = (evt, url) => {
    evt.preventDefault()
    if (url && url.length > 0) {
      this.props.term.restoreLastPagination()
      Router.push({
        pathname: '/',
        query: { profileUrl: `/${url}` }
      },
        `/${url}`,
       { shallow: true })
    } else {
      window.location.href = '/'
    }
  }

  render () {
    return (
      <div onClick={(evt) => this.redirectToSpecialUrl(evt, this.props.redirectUrl)}>
        <Header>
          <img className='logo-image' src='/static/images/logo-blue-42.png' alt='maomao' />
        </Header>
      </div>
    )
  }
}

export default Slogan
