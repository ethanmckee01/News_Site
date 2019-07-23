import React, { Component } from 'react';
import {Route, HashRouter} from 'react-router-dom'

import './App.css';

import Home from './Home.js'
import SearchPage from './SearchPage.js'
import Nav from './Nav.js'
import WeatherPage from './WeatherPage.js'

export default class App extends Component {

    constructor() {
      super();
      this.state = {
        articles: []
      };
    }     

componentDidMount() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fd75dd4fe27d4d66a9a4e0eedea77f66&pageSize=5')      /*API call for the list of articles*/
    .then(response => response.json())
    .then(data => this.setState({articles: data.articles}))
}


  render() {
    return(
    <HashRouter>
      <div className='wrapper'>
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/Search" component={SearchPage}/>
        <Route path="/Weather" component={WeatherPage}/>
      </div>
    </HashRouter>
    )
};
}

