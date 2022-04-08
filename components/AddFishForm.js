import React from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (e) => {
    // stop the form from submitting
    e.preventDefault();
    // console.log(this.nameRef.current.value);

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    /* console.log(fish);
    // console.log(fish.status); */
    this.props.addFish(fish);
    // ei addFish function with parameter 'fish' ase App.js a, check that!

    // refresh the form
    // console.log(e.currentTarget);
    e.currentTarget.reset();

  }

  // ekhn, fish-form a submitted data header, inventory soho shob jaygay effective tokhn e hbe jokhn eita kono higher component theke render kora hbe! r ei higher component is 'app.js'

  
  render() {
    return(
      <>
        <form className='fish-edit' onSubmit={this.createFish}>
          <input type='text' name='name' ref={this.nameRef} placeholder='Name' />
          <input type='text' name='price' ref={this.priceRef} placeholder='Price' />
          <select name='status' ref={this.statusRef}>
            <option value='available'>Fresh!</option>
            <option value='unavailable'>Sold Out!</option>
          </select>
          <textarea name='desc' ref={this.descRef} placeholder='Desc'></textarea>
          <input type='text' name='image' ref={this.imageRef} placeholder='Image' />
          <button type='submit'>+ Add Fish</button>
        </form>
      </>
    )
  }
}

export default AddFishForm;