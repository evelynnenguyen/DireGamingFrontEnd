import React from 'react';
import PropTypes from 'prop-types';

function Tile(props){

    const tile = props.tile;
    return(
        <figure className="figure">
            <img className="weather_icon" scr={'http://openweathermap.org/img/wn/'+ tile.icon +'@2x.png'} alt="weather icon"/>
            <div className="button-container">
                <button onClick={()=>{
                    props.onTileRemoved(tile)
                }}>Remove</button>
            </div>
        </figure>
    );
}

Tile.propTypes = {
    tile: PropTypes.object.isRequired,
    onTileRemoved: PropTypes.func.isRequired
}
export default Tile;