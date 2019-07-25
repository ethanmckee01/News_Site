import React, { Component } from 'react';
import WeatherContainer from './WeatherContainer.js'

export default class WeatherInput extends Component {

    constructor() {
      super();
      this.state = {
        weatherArray: [],         /*State variable array for the initial fetch return*/
        zip: '',
      };
    }     

handleWeatherQuery = (e) => {
    e.preventDefault();     //Stops page from reloading upon submit
    let zipQuery = this.state.zip;
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?postal_code=' + zipQuery + '&units=I&days=7&key=ae16450f03734d7fbb5cac0e7840888d')      /*API call for the list of articles*/
    .then(response => response.json())
    .then(data => this.setState({weatherArray: data.data}))
}

handleZipChange = (e) => {
    this.setState({zip: e.target.value})   /*function for setting the state each time the text inside the input changes*/
}

  render() {
    return(
      <div>
        <br />
        <form onSubmit={this.handleWeatherQuery} class="searchform">
          <input 
          class="searchbox"
          type="number" 
          placeholder="Enter A Zip Code..." 
          onChange={this.handleZipChange} />
          <button className="btn btn-dark searchbutton" type="submit">Get Weather</button>
        </form><br />
        <div>
        <WeatherContainer data={this.state.weatherArray} />
      </div>
      </div>
    )
};
}