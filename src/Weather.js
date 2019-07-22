import React from 'react'

const Weather = props => (
    <div class="card">
    <p class="card-text date">{props.date}</p>
    <img src={props.imgPath} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title temp">{props.whichDay.temp}°F</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">High: {props.whichDay.max_temp}°F</li>
      <li class="list-group-item">Low: {props.whichDay.min_temp}°F</li>
      <li class="list-group-item weatherDesc">{props.whichDay.weather.description}</li>
    </ul>
  </div>
)

export default Weather


