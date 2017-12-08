/**
*
* SearchBar
*
*/

import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Subscribe } from 'react-subscribe'
import eventEmitter from '../../utils/eventEmitter'
import logger from '../../utils/logger'

class Carousel extends React.Component {
  onCarousel = (isAdd) => {
    logger.info('onCarousel', isAdd, this.slider)
    if (isAdd) {
      this.slider.next()
    } else {
      this.slider.prev()
    }
  }

  render () {
    const { className, settings, style, ...props } = this.props
    const defaultSettings = {
      navContainerClass: 'carousel-nav owl-nav',
      stageOuterClass: 'carousel-outer owl-stage-outer',
      stageClass: 'carousel-stage owl-stage',
      nav: true,
      autoWidth: true,
      navText: [
        '<',
        '>'
      ]
    }
    return (
      <div className={className} style={style}>
        <Subscribe target={eventEmitter} eventName='carousel' listener={this.onCarousel} />
        <OwlCarousel
          className='owl-theme'
          ref={(el) => { this.slider = el }}
          {... settings ? Object.assign({}, defaultSettings, settings) : defaultSettings}
          {... props}
          >
          { this.props.children }
        </OwlCarousel>
      </div>
    )
  }
}

export default Carousel
