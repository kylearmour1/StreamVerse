import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Make a request to your server-side route
    axios.get('/api/videos/search', { params: { q: 'cats' } })
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <img src={video.thumbnail} alt={video.title} />
        </div>
      ))}
    </div>
  );
};
<div></div>
export default VideoList;