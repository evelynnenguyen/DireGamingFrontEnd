import React from "react";
import Title from "./components/Title";
import CityFounder from "./components/CityFounder";
import Weather from "./components/Weather";
import TilesList from "./components/TilesList";
import WeatherIcon from "./components/WeatherIcon";
import AddTile from "./components/AddTile";

const API_KEY = "747e8bc063feec4c6efe3893a9f561db";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tiles: [],
      cityId: undefined,
      addedcity: undefined,
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      icon: undefined,
      error: undefined
    }
    this.removeTile = this.removeTile.bind(this);
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city) {
      this.setState({
        cityId: data.id,
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: "",
        addedcity:{
          cityId: data.id,
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          error: ""
        }
      });

      this.addTile(this.state.addedcity);
      console.log(this.state.tiles);

    } else {
      this.setState({
        cityId: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Please choose a city"
      });
    }
    console.log(this.state.icon);
    console.log('http://openweathermap.org/img/wn/'+ this.state.icon +'@2x.png');
  }

  removeTile(tileRemoved){
    console.log(tileRemoved.city);
    this.setState((state) => ({
      tiles: state.tiles.filter(tile => tile !== tileRemoved )
    }));
  }

  addTile(tileSubmitted){
    this.setState(state => ({
      tiles: state.tiles.concat([tileSubmitted])
    }));
  }

  render() {
    return (
      <div>
        <div>
          <Title title="How's The Weather?"/>
        </div>
        <div>
          <CityFounder getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature} 
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
              icon={this.state.icon}
            />
        </div>
        <div>
          <TilesList tiles = {this.state.tiles}
            onTileRemoved={this.removeTile}/>
        </div>
      </div>
    );
  }
};

export default App;