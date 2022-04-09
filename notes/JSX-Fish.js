import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    // destructuring
    const {image, name, price, desc, status} = this.props.details;
    // which is equvalent to
    /*  const image = this.props.details.image;
        const name = this.props.details.name; 
        ... ... ...
    */
    return(
      <>
        <li className='menu-fish'>
          {/* 🐟 */}
          {/* N.B. here, img src= er pore kono '' i.e quote nai */}
          <img src={image} alt={name}></img>
          <h3 className='fish-name'>
            {name} <span className='price'>{formatPrice(price)}</span>
          </h3>
          <p>{desc}</p>
          <button>Add To Cart</button>
        </li>
      </>
    )
  }
}

export default Fish;