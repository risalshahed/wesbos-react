import React from 'react';

// class component
/* class Header extends React.Component {
  render() {
    return(
      <>
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">of</span>
              <span className="the">the</span>
            </span>
            Day
          </h1>
          <h3 className='tagline'>
            <span>Fresh Seafood Market</span>
            let's make it dynamic
            <span>{this.props.tagline}</span>
          </h3>
        </header>
      </>
    )
  }
} */

// functional component
/* function Header(props) { //functional component a 'props' parameter hishabe pass krte hy
  return(
    <>
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className='tagline'>
          // functional component a, this lage naaa
          <span>{props.tagline}</span>
        </h3>
      </header>
    </>
  );
} */

// arrow function
const Header = (props) => //{ //functional component a 'props' parameter hishabe pass krte hy
  // return(  // arrow function a, implicitly return hy!
    <>
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className='tagline'>
          {/* functional component a, this lage naaa */}
          <span>{props.tagline}</span>
        </h3>
      </header>
    </>
  // );
//}



export default Header;