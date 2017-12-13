/**
*
* SearchBar
*
*/

import React from 'react'
import Slider from 'react-slick'
import { Subscribe } from 'react-subscribe'
import eventEmitter from '../../utils/eventEmitter'
import logger from '../../utils/logger'

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      onClick={onClick}
    ></div>
  );
}

class Carousel extends React.Component {
  onCarousel = (isAdd) => {
    logger.info('onCarousel', isAdd, this.slider)
    if (isAdd) {
      this.slider.slickNext()
    } else {
      this.slider.slickPrev()
    }
  }

  render () {
    const { className, settings, style, ...props } = this.props
    const defaultSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      autoplay: false,
      nextArrow: <NextArrow className='slick-next' />,
      prevArrow: <PrevArrow className='slick-prev' />
    }
    return (
      <div className={className} style={style}>
        <Subscribe target={eventEmitter} eventName='carousel' listener={this.onCarousel} />
        <Slider
          ref={(el) => { this.slider = el }}
          {... settings ? Object.assign({}, defaultSettings, settings) : defaultSettings}
          {... props}
          >
          { this.props.children }
        </Slider>
      </div>
    )
  }
}

export default Carousel
