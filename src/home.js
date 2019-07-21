import React, { Component } from 'react';
import ArticleContainer from './ArticleContainer'

export default class Home extends Component {

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
      <div>
        <ArticleContainer data={this.state.articles} />
      </div>
    )
};
}