import React from 'react';
import ReactDOM from 'react-dom';
import PricinPage from './containers/PricingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';

//React-Dom.render()pregunta que voy a renderizar.
//donde lo voy a renderizar

ReactDOM.render(
  <PricinPage />
,  
  document.getElementById('app-pricing')
);


