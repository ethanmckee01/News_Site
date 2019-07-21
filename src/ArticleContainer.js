import React from 'react'
import Article from './Article.js'

const ArticleContainer = props => {
if (!props.data || props.data.length === 0) {       //if statement makes sure props.data exists 
    return null                                     //before it tries to render
  }
  console.log(props.data)
  const results = props.data;
  let articles;
  articles = results.map((article,i) => <Article whichArticle={article} key={i} />)
  return (
    <div className="card-deck">
        {articles}
    </div>
    )
}
export default ArticleContainer;