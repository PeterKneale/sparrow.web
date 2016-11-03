import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Jumbo from './components/Jumbo'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Jumbo heading="Sparrow!" body="Sparrow is a lightweight application" />
      </div>
    );
  }
}

export default App;
