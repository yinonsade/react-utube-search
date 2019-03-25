import axios from 'axios';

const KEY = 'AIzaSyBkB0YvBLcUbtlPtXuP4dfEYBo6Cd7VPBs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});