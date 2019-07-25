import React, { Component } from 'react';
import ArticleContainer from './ArticleContainer.js'

export default class SearchInput extends Component {

    constructor() {
      super();
      this.state = {
        searchedArticles: [],         /*State variable array for the initial fetch return*/
        search: '',                  /*State variable for the search string*/
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

validateForm = (e) => {
    var lastChar = this.state.search.slice(-1);             //Get the last character of the input
    if (!(/[a-zA-Z0-9\s,]+/g.test(lastChar))) {               //Check if it's a letter or a number
      var NewSearch = this.state.search.slice(0, this.state.search.length-1);         //If it's not, create a new variable that slices off the last character
      this.setState({search: NewSearch});                                             //Then set the state to remove the invalid character
    }
}

  render() {
    return(
      <div>
        <br />
        <form onSubmit={this.handleQuery} class="searchform">
          <input 
          class="searchbox"
          type="text" 
          placeholder="Letters and numbers only, please..."
          onChange={this.handleChange}
          value={this.state.search} 
          onKeyUp={this.validateForm}/>
          <button className="btn btn-dark searchbutton" type="submit">Search</button>
        </form><br />
        <div>
        <ArticleContainer data={this.state.searchedArticles} />
      </div>
      </div>
    )
};
}