import React from 'react';
import Tile from './Tile';
import PropTypes from 'prop-types';

function TilesList (props){
    return(
        <div className="tileGrid">
            {props.tiles
                .sort(function(x,y){
                    return y.id - x.id;
                })
                .map((tile, index) => <Tile key={index}
                    tile={tile}
                    onTileRemoved={props.onTileRemoved} />)}
        </div>

    );
}

TilesList.propTypes = {
    tiles: PropTypes.array.isRequired,
    onTileRemoved: PropTypes.func.isRequired
}
export default TilesList;