import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'available';
    if (!isAvailable) {
      return (
        <>
          <li key={key}>
            {/* check asholei fish ta ase ki na, thakle 'name' naile 'fish' */}
            Sorry {fish ? fish.name : 'fish'} is not available now
            {/* V.V.I. inspect kore, Components er 'App.js' a giye, state theke status change kore unavailable korle this will cause effect, props theke korle this won't! */}
          </li>
        </>
      );
    }
    return (
      <>
        <li key={key}>
          {count} lbs {fish.name}

          {formatPrice(count * fish.price)}
        </li>
      </>
    );
  }
  render() {
    // calculate the total price
    const orderIds = Object.keys(this.props.order);
    // console.log(orderIds);
    // reduce function (To Understand what it is)
    /* const array1 = [1, 2, 3, 4];
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    console.log(sumWithInitial);
    // expected output: 10 */

    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      // console.log(fish.name);
      const count = this.props.order[key];
      // console.log(count);
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);  // here, 0 is initial value of reduce function
    return(
      <>
        <div className='order-wrap'>
          <h2>Order</h2>
          <ul className='order'>
            {/* {orderIds.map(key => <li>{key}</li>)} */}
            {/* uporer line short krte, we used renderOrder funtion above */}
            {orderIds.map(this.renderOrder)}
          </ul>
          <div className="total">
            Total Price:
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </>
    )
  }
}

export default Order;