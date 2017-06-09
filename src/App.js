import React, { Component } from 'react';
import Elm from 'react-elm-components'
import {Buttons} from './elm/Buttons'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Elm src={Buttons} />
      </div>
    );
  }
}

export default App;
