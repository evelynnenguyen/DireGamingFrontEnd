import React from "react";

const CityFounder = props => (
	<div>
		<form onSubmit={props.getWeather}>
			<input type="text" name="city" placeholder="City Name..."/>
			<button>Get Weather</button>
		</form>
	</div>
	
);

export default CityFounder;