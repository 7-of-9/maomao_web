/**
*
* Loading
*
*/

import React from 'react'
import PropTypes from 'prop-types'

function Loading (props) {
  return (
    <div style={{ display: props.isLoading ? 'inline-block' : 'none', textAlign: 'center', margin: '0 auto', width: '100%' }}>
      <img src='/static/images/balls.svg' alt='loading' style={{ margin: '0 auto' }} />
    </div>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Loading
