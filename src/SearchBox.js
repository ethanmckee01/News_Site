import React, { Component } from 'react';

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
    let searchQuery = this.query;
    fetch('https://newsapi.org/v2/everything?q=' + {searchQuery} + '&apiKey=fd75dd4fe27d4d66a9a4e0eedea77f66')      /*API call for the list of articles*/
    .then(response => response.json())
    .then(data => this.setState({searchedArticles: data.articles}))
}

  render() {
    return(
      <div>
        <form onSubmit=''>
          <input type="text" placeholder="Name"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
    console.log(this.state.searchedArticles)
};
}