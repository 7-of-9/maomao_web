/**
*
* SearchBar
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import _ from 'lodash'
import SelectedItem from './SelectedItem'

const Carousel = dynamic(
  import('../../components/Carousel'),
  {
    ssr: false,
    loading: () => null
  }
)

class SelectedList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: [],
    onRemove: (id, name, img) => {}
  }

  render () {
    const { items } = this.props
    return (
      <Carousel className='carousel-wrapper'>
        {
        _.map(items, ({name, img, id}) => (
          <SelectedItem
            key={`${id}-${name}`}
            name={name}
            img={img}
            id={id}
            onRemove={this.props.onRemove}
          />
        ))
        }
      </Carousel>
    )
  }
}

export default SelectedList
