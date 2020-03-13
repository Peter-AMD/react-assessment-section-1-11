import news from '../api/news';

const searchArticles = ({ newsType, searchString, country }) => {
  console.log('searchString', searchString);
  console.log('country',country)
  console.log('newsType', newsType);
  let params = { q: searchString };
  if (newsType !== 'everything') params = {...params, country}
  return news.get(`/${newsType}`, {
    params
  });
};

export default searchArticles;