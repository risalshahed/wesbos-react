import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return(
      <>
        <div className='inventory'>
          <h2>Inventory</h2>
          {/* addFish function ta Inventory.js a nei, eita App.js theke passed in hoice via props, so write this.props.addFish instead of this.addFish */}
          <AddFishForm addFish={this.props.addFish} />
        </div>
      </>
    )
  }
}

export default Inventory;