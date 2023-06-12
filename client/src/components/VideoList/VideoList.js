import React, { useEffect, useState } from 'react';
import AuthService from '../../utils/auth';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const VideoList = () => {
const [videos, setVideos] = useState([]);
const [searchQuery, setSearchQuery] = useState('');

useEffect(() => {
if (!AuthService.loggedIn()) {

window.location.assign('/');
} else {

fetchVideos('cats');
}
}, []);

const fetchVideos = (query) => {
const apiKey = "AIzaSyCwPfZd-GUMIhn3B-vhW4fMph-XDnLMtQE";
const maxResults = 5;
fetch(
  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&key=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    const videosData = data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
    }));
    setVideos(videosData);
  })
  .catch((error) => {
    console.error('Error fetching videos:', error);
  });
};

const handleSearch = (event) => {
event.preventDefault();
fetchVideos(searchQuery);
};

const handleSearchQueryChange = (event) => {
setSearchQuery(event.target.value);
};

return (
<div>
<Sidebar />
<Header />
<div>
<form onSubmit={handleSearch}>
<input
         type="text"
         placeholder="Search videos..."
         value={searchQuery}
         onChange={handleSearchQueryChange}
       />
<button type="submit">Search</button>
</form>
{videos.map((video) => (
<div key={video.id}>
<h3>{video.title}</h3>
{/* <img src={video.thumbnail} alt={video.title} /> */}
<iframe
  title={video.title}
  src={video.videoUrl}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
</div>
))}
</div>
<Footer />
</div>
);
};

export default VideoList;
