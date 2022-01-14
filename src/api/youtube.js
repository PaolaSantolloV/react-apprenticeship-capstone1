import axios from 'axios';
const KEY = 'AIzaSyDIzNcKagNp_ubbTGlG9mnY8PiOEUFMsYY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
  headers: {},
});
