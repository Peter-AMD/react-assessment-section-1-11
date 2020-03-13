import axios from 'axios';

export default axios.create({
  baseURL: 'http://newsapi.org/v2',
  headers: {
    'X-Api-Key': 'ff69b88b08b34a1da07dbd782038866c'
  },
});