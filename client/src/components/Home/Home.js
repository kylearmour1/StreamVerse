import React, { useEffect, useState } from 'react'; // 
import './Home.css'; 

const HomePage = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]); 

  useEffect(() => {
    const storedVideos = localStorage.getItem('uploadedVideos');

    if (storedVideos) {
      setUploadedVideos(JSON.parse(storedVideos));
    }
  }, []);

  // Adding a new function to delete a video
  const deleteVideo = (videoId) => {
    // Filtering the uploadedVideos to remove the one with the given id
    const updatedVideos = uploadedVideos.filter(video => video.id !== videoId);

    // Setting the state to the updated list
    setUploadedVideos(updatedVideos);

    // Saving the updated list back to localStorage
    localStorage.setItem('uploadedVideos', JSON.stringify(updatedVideos));
  };

  return (
    <div className="container">
      <main className="main-content">
        <section className="section">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Video Search</button>
          </div>
          <h2>About StreamVerse</h2>
          <p>StreamVerse is the best platform for streaming your favorite content!</p>
        </section>

        <section className="section">
          <h2>Featured Streams</h2>
          <div className="featured-streams">
            {uploadedVideos.map((video) => (
              <div className="stream-card" key={video.id}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <video src={video.videoUrl} controls />
                <button onClick={() => deleteVideo(video.id)}>Delete</button>
                {/* Adding a delete button for each video */}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;

