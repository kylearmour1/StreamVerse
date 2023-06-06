import React, { useEffect, useState } from 'react'; // 
import './Home.css'; 

const HomePage = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]); 
  // Here, we're using the useState hook from React to manage state in our functional component. 
  // We have declared a new state variable, "uploadedVideos", and set it to an empty array.
  // "setUploadedVideos" is the function we'll use to update the state.

  useEffect(() => {
    const storedVideos = localStorage.getItem('uploadedVideos');
    // Using localStorage to get the data saved under 'uploadedVideos'. 
    // This could be from the Profile.js where the videos are uploaded and then saved to the localStorage.

    if (storedVideos) {
      setUploadedVideos(JSON.parse(storedVideos));
      // If there are any stored videos, we parse the JSON string into an object and set it to our state.
      // The reason we're doing JSON.parse is because localStorage stores everything as strings.
    }
  }, []);
  // The empty array [] as the second parameter means this useEffect will run once after the component render.

  // Now, returning the JSX which forms the layout for our HomePage component.
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
              // Looping over the uploadedVideos array from our state and displaying each video with its details.
              <div className="stream-card" key={video.id}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <video src={video.videoUrl} controls />
                {/* This <video> element displays the video, the "src" attribute points to the video's URL,
                and the "controls" attribute adds the video player's default controls like play, pause, etc. */}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage; 
