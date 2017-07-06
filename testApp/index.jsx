import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import makeInstances from './makeInstances';
import App from './App';

let instances;

const rerenderApp = () => {
  if (instances !== undefined){
    ReactDOM.render(<App instances={instances} />, $('#react-mount')[0]);
  }
}

$(document).ready(() => {
  /* should be of shape (updateFn) =>
    {
      server: { actions, ... },
      clients: [ { actions, ... } ],
    }
  */
  instances = makeInstances(rerenderApp);
  rerenderApp();
});
