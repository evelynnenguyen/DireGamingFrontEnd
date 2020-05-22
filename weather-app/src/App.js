import React from "react";
import Title from "./components/Title";
import CityFounder from "./components/CityFounder";
import Weather from "./components/Weather";
import WeatherIcon from "./components/WeatherIcon";

const API_KEY = "747e8bc063feec4c6efe3893a9f561db";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
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

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title title="How's The Weather?"/>
                </div>
                <div className="col-xs-7 form-container">
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
                  {/* <WeatherIcon icon={this.state.icon}/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;