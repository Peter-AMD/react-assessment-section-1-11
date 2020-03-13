import React, { Component } from 'react';
import searchArticles from './services/news';
import SearchBar from './components/SearchBar/SearchBar';
import SearchLoader from './components/SearchLoader/SearchLoader';
import SearchResult from './components/SearchResult/SearchResult';
import './app.css';

class App extends Component {
  searchInput = React.createRef();
  state = {
    articles: [],
    isShowLoader: false,
  }

  componentDidMount() {
    
  }
  optionsHandler = async(values) => {
    const { country, newsType, searchString } = values;
    this.setState({
      isShowLoader: true,
    })
    try {
      const articles = await searchArticles({ country, newsType, searchString });
      this.setState({
        articles: articles.data.articles,
        isShowLoader: false,
      });
    }
    catch (e) {
      this.setState({ articles: [], isShowLoader: false, })
    }
    
  }
  render() {
    return (
      <div className="app-wrapper">
        <h1>Pew News</h1>
        <SearchBar onOptionChange={this.optionsHandler}/>
        <SearchLoader isShowLoader={this.state.isShowLoader} noOfArticles={this.state.articles.length} />
        <SearchResult articles={this.state.articles}/>
      </div>
    );
  };
}

export default App;
