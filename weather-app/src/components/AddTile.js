import React, {Component} from 'react';

class AddTile extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const temperature = event.target.elements.temperature;
        const humidity= event.target.elements.humidity;
        const city= event.target.elements.city;
        const country= event.target.elements.country;
        const description= event.target.elements.description;
        const error= event.target.elements.error;
        const icon= event.target.elements.icon;

        const tile = {
            temperature: temperature,
            humidity: humidity,
            city: city,
            country: country,
            description: description,
            error: error,
            icon: icon
        }
        this.props.onAddTile(tile);
    }

    render(){
        return (
            <div>
                <h1> Your Cities </h1>
                <div>
                    <div className="button-container">
                        <button onClick={this.handleSubmit}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTile;