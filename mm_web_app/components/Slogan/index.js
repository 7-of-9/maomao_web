/**
*
* Slogan
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'
import LogoIcon from '../../components/LogoIcon'
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
      <div style={{margin: '0 16px'}} onClick={(evt) => this.redirectToSpecialUrl(evt, this.props.redirectUrl)}>
        <Header>
          <LogoIcon />
          <img className='logo-image' src='/static/images/maomao.png' alt='maomao' width='165' height='24' />
          <span className='paragraph-smarter'> discover & share </span>
        </Header>
      </div>
    )
  }
}

export default Slogan
