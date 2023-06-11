import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthService from '../../utils/auth'; // Import AuthService

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Check if the user is authenticated
    if (!AuthService.loggedIn()) {
      // If not authenticated, redirect to the login page
      window.location.assign('/');
    } else {
      // Make a request to your server-side route
      axios.get('/api/videos/search', { params: { q: 'cats' } })
        .then((response) => {
          setVideos(response.data);
        })
        .catch((error) => {
          console.error('Error fetching videos:', error);
        });
    }
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

export default VideoList;
