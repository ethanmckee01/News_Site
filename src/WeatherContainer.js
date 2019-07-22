import React from 'react'
import Weather from './Weather.js'

const WeatherContainer = props => {
if (!props.data || props.data.length === 0) {       //if statement makes sure props.data exists and is empty during the initial render
    return null                                     
  }
  const results = props.data;                       //if it exists and isn't empty, it builds the array of Article components using the map function
  let forecast;
  forecast = results.map((Day,i) => <Weather whichDay={Day} key={i}    //Passing some props and a key prop so the map can give each item a unique id, this weather API doesn't provide one
  imgPath={'https://www.weatherbit.io/static/img/icons/' + Day.weather.icon + '.png'}  //Passing this as a prop so I can dynamically build the icon URLs, the API doesn't provide the links in the return
  date={Day.datetime.slice(5)}/>)                                      //Slicing the year off the date to make it look neater
  return (
    <div className="card-deck">
        {forecast}                                
    </div>
    )
}
export default WeatherContainer;