import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

function Tile(props){
    const tile = props.tiles;
    return(
        <div className="mainTile">
            <GridList>
                {tile.map((tile) => (
                <GridListTile key={tile.id}>
                    <GridListTileBar
                    title={tile.name}
                    />
                </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

Tile.propTypes = {
    tile: PropTypes.object.isRequired,
    // onPhotoRemoved: PropTypes.func.isRequired
}

export default Tile;