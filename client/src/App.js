const axios = require('axios');

const apiKey = 'AIzaSyAHY8qXcMRgItfxDE2scj38-2Pq3_avWm4';
const apiUrl = 'https://www.googleapis.com/youtube/v3/search/videos?part=snippet&maxResults=25&q=react&key=' + apiKey + '&type=video';

axios.get(apiUrl, {
  params: {
    key: apiKey
  }
})
.then(response => {
  const data = response.data;
  const videos = data.items;
  videos.forEach(video => {
    console.log(video.snippet.title);
  });
})
.catch(error => {
  
  console.error(error);
});
