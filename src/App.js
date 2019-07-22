import React, { Component } from 'react';
import {Route, HashRouter} from 'react-router-dom'

import './App.css';

import Home from './Home'
import SearchPage from './SearchPage'
import Nav from './Nav'
import WeatherPage from './WeatherPage'

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
      <div className="test">
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/Search" component={SearchPage}/>
        <Route path="/Weather" component={WeatherPage}/>
      </div>
    </HashRouter>
    )
};
}

