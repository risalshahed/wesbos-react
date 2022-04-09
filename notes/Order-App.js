import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import { lightness } from 'stylus/lib/functions';

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
  // now, let's create a secondary method
  addFish = (fish) => {
    // update a state is of two steps
    // 1. take a copy of the existing state (using spread operator)
    const fishes = {...this.state.fishes};
    // 2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({
      // fishes: fishes,
      fishes,
    });
  }
  // *** ekhn, ei addFish method asey App.js a, kin2 amdr eita lagbe 'Inventory.js' a, BUT HOW??? answer is, with PROPS! (see inside Inventory tag below)

  // j kono custom function ja state update kore, sheikhane ba shei component a thakte hobe jei component a STATE thake
  loadSampleFishes = () => {
    // alert('sample fishes');
    this.setState({
      fishes: sampleFishes,
    })
  }

  // now, let's create another secondary method
  addToOrder = (key) => {
    // update a state is of two steps
    // 1. take a copy of the existing state (using spread operator)
    const order = {...this.state.order};
    // 2. Either add to the order or update the number in order to that order variable
    // order.fish1 = order.fish1 + 1 || 1
    order[key] = order[key] + 1 || 1;
    // jodi order[key] thake, increment by 1, else print 1;
    // set the new fishes object to state
    this.setState({
      // order: order,
      order,
    });
  }

  render() {
    return(
      <>
        <div className='catch-of-the-day'>
          <div className='menu'>
            <Header tagline='Fresh Seafood Market' />
            <ul className='fishes'>
              {/* <Fish /> */}
              {/* loop krte hbe, maybe with map, forEach or anything, but eigula array er upor korte hy; kin2 amdr STATE is an OBJECT! */}
              {/* ei object k array te convert krbo Object.keys diye */}
              {Object.keys(this.state.fishes).map(key => (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder} />
              ))}

            </ul>
          </div>
          {/* End of menu */}
          <Order />
          <Inventory
            addFish={this.addFish}
            loadSampleFishes = {this.loadSampleFishes}
          />
        </div>
        {/* End of catch-of-the-day*/}
      </>
    )
  }
}

export default App;