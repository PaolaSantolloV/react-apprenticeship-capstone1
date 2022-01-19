import axios from 'axios';
const KEY = 'AIzaSyDgVK77w2s3mDpJv210ZHOpWksFJWXhPYQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
  headers: {},
});
