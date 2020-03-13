import React from 'react';
import { Loader } from 'semantic-ui-react';

const SearchLoader = props => {
  const toRender = () => {
    if (props.isShowLoader) return <Loader active inline />
    else {
      return (
        <div>
          <p>Search Results!</p>
          <p>Found {props.noOfArticles} articles</p>
        </div>
      )
    }
  }
  return (
    <div>
      {toRender()}
    </div>
  );
}

export default SearchLoader;