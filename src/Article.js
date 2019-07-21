import React from 'react'

const Article = props => (
    <div className="card">
    <a href={props.whichArticle.url}><img src={props.whichArticle.urlToImage} className="card-img-top" alt={props.whichArticle.title} /></a>
    <div className="card-body">
      <h5 className="card-title">{props.whichArticle.title}</h5>
      <p className="card-text">{props.whichArticle.description}</p>
      <a href={props.whichArticle.url} class="btn btn-primary">Read More</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Source: {props.whichArticle.source.name}</small>
    </div>
  </div>
)

export default Article