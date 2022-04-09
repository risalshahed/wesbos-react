import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  // initially eivabe kora jaite pare
  /* constructor() {
    super();
    this.state = {
      // add state here
    }
  } */

  // or, we can use property, which is preferred
  state = {
    fishes: {},
    order: {}
  };
  // jei method state update kore shei method r actual state always exactly same component a thakte hbe
  // now, let's create a secondary method
  addFish = (fish) => {
    // console.log('Adding a fish');
    // update a state is of two steps
    // akta object/ state a directly reach kore modify kora k mutation bole, which cause issues, so at first amra state copy korbo
    // 1. take a copy of the existing state (using spread operator)
    const fishes = {...this.state.fishes};
    // 2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({
      // fishes: fishes,
      // property r value same hoile, uporer r nicher line SAME
      fishes,
      // V.V.I. eikhane, amra sudhu 'fishes' state k update korci, 'order' state k update kori nai! That's completely okay, setState er vitore ENTIRE state pass kora mandatory na, amra state er j kono ekta ba 2ta or kisu piece o pass kore update korte pari
    });
  }
  // *** ekhn, ei addFish method asey App.js a, kin2 amdr eita lagbe 'Inventory.js' a, BUT HOW??? answer is, with PROPS! (see inside Inventory tag below)

  render() {
    return(
      <>
        <div className='catch-of-the-day'>
          <div className='menu'>
            <Header tagline='Fresh Seafood Market' />
            <Header tagline='We are cool' />
          </div>
          {/* End of Menu */}
          <Order />
          <Inventory addFish={this.addFish} />
        </div>
        {/* End of catch-of-the-day*/}  
      </>
    )
  }
}

export default App;