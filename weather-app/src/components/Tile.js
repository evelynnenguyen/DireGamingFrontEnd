import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

function Tile(props){

    const tile = props.tile;
    return(
        <Paper className="tile">
            <Grid container spacing={2}>
            <Grid item>
                <ButtonBase>
                <img className="weather_icon" scr={'http://openweathermap.org/img/wn/'+ tile.icon +'@2x.png'} alt="weather icon"/>
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                        Location: {tile.city}, {tile.country}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Temperature: {tile.temperature}{'\u00b0'}C
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Humidity: {tile.humidity}%
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {tile.description}
                    </Typography>
                </Grid>
                <Grid item>
                    <div className="button-container">
                        <button onClick={()=>{
                            props.onTileRemoved(tile)
                        }}>Remove</button>
                    </div>
                </Grid>
            </Grid>
            </Grid>
            </Grid>
        </Paper>

    );
}

Tile.propTypes = {
    tile: PropTypes.object.isRequired,
    onTileRemoved: PropTypes.func.isRequired
}
export default Tile;