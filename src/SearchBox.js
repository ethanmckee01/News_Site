import React, { Component } from 'react';
import ArticleContainer from './ArticleContainer'

export default class SearchBox extends Component {

    constructor() {
      super();
      this.state = {
        searchedArticles: [],
        search: ''
      };
    }     

handleQuery = (e) => {
    e.preventDefault();
    let searchQuery = this.state.search;
    fetch('https://newsapi.org/v2/everything?q=' + searchQuery + '&apiKey=fd75dd4fe27d4d66a9a4e0eedea77f66&pageSize=5')      /*API call for the list of articles*/
    .then(response => response.json())
    .then(data => this.setState({searchedArticles: data.articles}));
}

handleChange = (e) => {
    this.setState({search: e.target.value})
}

  render() {
    return(
      <div>
        <form onSubmit={this.handleQuery}>
          <input class="form-control form-control-lg" type="text" placeholder="Search..." onChange={this.handleChange} /><br />
          <button className="btn btn-primary" type="submit">Search</button>
        </form><br />
        <div>
        <ArticleContainer data={this.state.searchedArticles} />
      </div>
      </div>
    )
};
}