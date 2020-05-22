import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import TilesList from './components/TilesList';

class App extends Component {
  componentDidMount(){
    fetch("https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02")
    .then(response => response.json())
    .then(jsondata => console.log(jsondata))
  }

  render() {
      return (
      <div>
          <Title title={'How\'s the weather?'} />
          {/* <TilesList/> */}
      </div>
      )
  }
}

export default App;
