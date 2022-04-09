import React from 'react';
import { getFunName } from '../helpers';

// import css in react
// import '../css/style.css';

class StorePicker extends React.Component {
  myInput = React.createRef();

  /* constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  } */

  // V.V.I. BUT, onk gulo constructor function thakle, it'll look ODD!! so, instead of using constructor, we'll use ARROW Function

  /* handleClick() {
    alert('heyyy');
  } */

  goToStore = (event) => {
    // well. form submit hoye page reload hosse eikhane, but we don't want it!
    // 1. stop the form from submitting
    event.preventDefault();
    // console.log("Going to Store");
    // 2. Get the text from that input
    // console.log(this.myInput);  // error asbe; this undefined dekhabe; constructor/ ARROW Function diye bind krte hbe (upore)
    
    // nicher 3 line ekta kore console.log kore jete hbe vlo mto bujhte hoile
    // console.log(this.myInput);
    // console.log(this.myInput.current);
    // console.log(this.myInput.current.value);

    // 3. change the page to /store/whatever-they-want
    const storeName = this.myInput.current.value;
    this.props.history.push(`store/${storeName}`);
    // V.V.I. eikhane, push state use kore page change kora hosse, vlo mto bujhte hbe

  }

  render() {
    return (
      // React.createElement('p', { className: 'hey' }, React.createElement()
      <>
      {/* JSX a HTML er mto class dle hbe na, className dte hbe */}
      {/* values of input always need to be directly attached with state (will be explained later); tai amra eikhane value na niye defaultValue nibo */}
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>

          {/* this.handleClick(); ei () dle, direct alert hbe kono button a click sarai, component mount howar sathe sathe! */}
          {/* <button onClick={this.handleClick}>Click Me!</button> */}

          <input type='text' ref={this.myInput} required placeholder='Store Name' defaultValue={getFunName()} />
          <button type='submit'>Visit Store ➡️</button>
        </form>
      </>
    );
  }
}

export default StorePicker;