import React, { Component } from 'react';
import ArticleContainer from './ArticleContainer'

export default class home extends Component {    //This page is a stateful component because I wanted a fetch to happen upon component mount, so there would always be 
                                                 //some articles displayed.
    constructor() {
      super();
      this.state = {
        articles: [],
        apiKey: 'fd75dd4fe27d4d66a9a4e0eedea77f66'
      };
    }     

componentDidMount() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.state.apiKey + '&pageSize=5')      //API call for the list of articles
    .then(response => response.json())
    .then(data => this.setState({articles: data.articles}))   /*Gets saved to the state variable 'articles'*/
    .catch(error => console.error('Error:' + error))
}


  render() {
    return(
      <div>
        <ArticleContainer data={this.state.articles} />   {/*prop gets passed so the ArticleContainer can pass info to Article component */}
      </div>
    )
};
}
