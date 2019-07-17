import React, { Component } from 'react'

class Article extends React.Component {

constructor(props) {
    super(props);
    this.state = {
         test: null,
         title: null
                 };
                   }
        
componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fd75dd4fe27d4d66a9a4e0eedea77f66')      /*API call for the list of articles*/
    .then(response => response.json())
    .then(data => this.setState({title: data.articles[0].title}))
                    }

render() {
    return (
        <h3>{this.state.title}</h3>
        );
          }
}

export default Article