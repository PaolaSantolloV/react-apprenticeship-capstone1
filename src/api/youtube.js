import axios from 'axios';
const KEY = 'AIzaSyAJBqhPEHJQEZhCa3_Fw01ZjRMyrs1asng';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
  headers: {},
});
