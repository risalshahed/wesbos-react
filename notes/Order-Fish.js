import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }
  render() {
    // destructuring
    const {image, name, price, desc, status} = this.props.details;
    // which is equvalent to
    /*  const image = this.props.details.image;
        const name = this.props.details.name; 
        ... ... ...
    */
    const isAvailable = status === 'available';

    return(
      <>
        <li className='menu-fish'>
          {/* 🐟 */}
          <img src={image} alt={name}></img>
          <h3 className='fish-name'>
            {name} <span className='price'>{formatPrice(price)}</span>
          </h3>
          <p>{desc}</p>
          <button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'Add To Cart' : 'Sold Out'}</button>
        </li>
      </>
    )
  }
}

export default Fish;