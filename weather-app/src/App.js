import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import TilesList from './components/TilesList';

class App extends Component {
  render() {
      return (
      <div>
          <Title title={'How\'s the weather?'} />
          <TilesList tiles={'abc'}/>
      </div>
      )
  }
}

export default App;
