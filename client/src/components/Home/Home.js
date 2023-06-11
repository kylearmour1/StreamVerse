import React, { useEffect, useState } from "react";
import "./Home.css";

const HomePage = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    const apiKey = "AIzaSyAHY8qXcMRgItfxDE2scj38-2Pq3_avWm4";
    const maxResults = 5;
    const searchQuery = "";

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchQuery}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const videos = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
        setUploadedVideos(videos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  };

  const deleteVideo = (videoId) => {
    const updatedVideos = uploadedVideos.filter(
      (video) => video.id !== videoId
    );
    setUploadedVideos(updatedVideos);
    localStorage.setItem("uploadedVideos", JSON.stringify(updatedVideos));
  };

  return (
    <div className="container">
      <main className="main-content">
        <section className="section">
          <h2>About StreamVerse</h2>
          <p>
            StreamVerse is the best platform for streaming your favorite
            content!
          </p>
        </section>

        <section className="section">
          <h2>Trending</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="featured-streams">
              {uploadedVideos.map((video) => (
                <div className="stream-card" key={video.id}>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <img src={video.thumbnail} alt={video.title} />
                  <video src={video.videoUrl} controls />
                  <button onClick={() => deleteVideo(video.id)}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default HomePage;