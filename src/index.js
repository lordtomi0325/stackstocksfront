import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-175799903-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} onUpdate={logPageView} />
  </BrowserRouter>, document.getElementById('root'));
