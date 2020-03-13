import React from 'react';
import './SearchResult.css';

const SearchResult = props => {
  const imageRender = article => {
    if (!article.urlToImage) return;
    else {
      return (
        <img className="image-class" alt={article.title} src={article.urlToImage} />
      );
    }
  }
  const render = () => {
    if (!props.articles.length) return <div></div>
    else {
      return (
        <div>
          {
            props.articles.map(article => {
              return (
                <div className="searchresult-wrapper" key={article.url}>
                  {imageRender(article) }
                  <div>
                    <h1 className="title"><a href={article.url} target="_blank" rel="noreferrer noopener">{article.title}</a></h1>
                    <p className="description">{article.description}</p>
                  </div>
                </div>
              )
          })}
        </div>
      )
    }
  }
  return (
    <div>
      { render() }
    </div>
  );
}

export default SearchResult;