import React from 'react'
import Article from './Article.js'

const ArticleContainer = props => {
if (!props.data || props.data.length === 0) {       //if statement makes sure props.data exists and is empty during the initial render
    return null                                     
  }
  const results = props.data;                       //if it exists and isn't empty, it builds the array of Article components using the map function
  let articles;
  articles = results.map((article,i) => <Article whichArticle={article} key={i} />) //Passes the necessary props for the Article component to build an Article card
  return (
    <div className="card-deck">
        {articles}
    </div>
    )
}
export default ArticleContainer;