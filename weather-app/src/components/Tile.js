import React from "react";

const Tile = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City Name..."/>
		{/* <input type="text" name="country" placeholder="Country..."/> */}
		<button>Get Weather</button>
	</form>
);

export default Tile;