import React, { Component } from 'react';
import ArticleContainer from './ArticleContainer'

export default class SearchInput extends Component {

    constructor() {
      super();
      this.state = {
        searchedArticles: [],         /*State variable array for the initial fetch return*/
        search: ''                    /*State variable for the search string*/
      };
    }     

handleQuery = (e) => {
    e.preventDefault();  //Stops page from reloading upon submit
    let searchQuery = this.state.search;
    fetch('https://newsapi.org/v2/everything?q=' + searchQuery + '&apiKey=fd75dd4fe27d4d66a9a4e0eedea77f66&pageSize=5&language=en')      /*API call for the list of articles*/
    .then(response => response.json())
    .then(data => this.setState({searchedArticles: data.articles}));
}

handleChange = (e) => {
    this.setState({search: e.target.value})   /*function for setting the state each time the text inside the input changes*/
}

  render() {
    return(
      <div>
        <br />
        <form onSubmit={this.handleQuery}>
          <input class="form-control form-control-lg input-field" type="text" onChange={this.handleChange} /><br />
          <button className="btn btn-dark" type="submit">Search</button>
        </form><br />
        <div>
        <ArticleContainer data={this.state.searchedArticles} />
      </div>
      </div>
    )
};
}