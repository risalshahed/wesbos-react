import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
/* import StorePicker from './components/StorePicker';
import App from './components/App'; */
import Router from './components/Router';
import './css/style.css';

// ei render method use krte hoile agey import kore nite hbe
render(<Router />, document.querySelector('#main'));