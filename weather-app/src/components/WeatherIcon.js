import React, {Component} from 'react';

class WeatherIcon extends Component {
    render() {
        return (
            <img className="weather_icon" scr={'http://openweathermap.org/img/wn/'+ this.props.icon +'@2x.png'} alt="weather icon"/>
        )
    }
}

export default WeatherIcon