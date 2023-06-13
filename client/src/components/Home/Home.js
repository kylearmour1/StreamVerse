import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button } from "@mui/material";
import "./Home.css";

const HomePage = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    const apiKey = "AIzaSyCwPfZd-GUMIhn3B-vhW4fMph-XDnLMtQE";
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
          videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
        }));
        setUploadedVideos(videos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <Header>
        <Link to="/streamverse">Go to StreamVerse</Link>
      </Header>
      <div className="container">
        <main className="main-content">
          <section className="section full-width-section">
            <h2>About StreamVerse</h2>
            <p>
            Welcome to StreamVerse, the ultimate destination for video sharing and streaming! Our platform is designed with your needs in mind, offering a seamless experience for registration, uploading, viewing, interaction, and sharing of videos. Inspired by the best features of popular video sharing platforms, StreamVerse boasts a polished and user-friendly interface that makes navigating the site a breeze. We prioritize your security and privacy, ensuring that your personal information is protected. Whether you're a content creator looking to share your talents with the world or a viewer seeking high-quality videos, StreamVerse is here to make your experience enjoyable and hassle-free. Join us today and become a part of our vibrant community of creators and viewers, where your passion for videos comes to life.
            </p>
          </section>
          <div className="half-width-sections">
            <section className="section">
              <h2>Create a Reel</h2>
              
              <p>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec libero nec lacus suscipit tincidunt. Phasellus gravida
                ultricies risus, eu condimentum massa pretium non.
              </p>
            </section>
            <section className="section">
              <h2>Upload</h2>
              <div>
                <a 
                  href="https://www.youtube.com/upload" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="upload" variant="contained">Upload to YouTube</Button>
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec libero nec lacus suscipit tincidunt. Phasellus gravida
                ultricies risus, eu condimentum massa pretium non.
              </p>
            </section>
            <section className="section">
              <h2>Share</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec libero nec lacus suscipit tincidunt. Phasellus gravida
                ultricies risus, eu condimentum massa pretium non.
              </p>
            </section>
          </div>
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
                    <iframe
                      title={video.title}
                      src={video.videoUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div>
                      {/* Facebook */}
                      <Button className="shareButtons" variant="contained">
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${video.videoUrl}`} target="_blank" rel="noopener noreferrer">
                          Share on Facebook
                        </a>
                      </Button>
                      {/* Twitter */}
                      <Button className="shareButtons" variant="contained">
                        <a href={`https://twitter.com/intent/tweet?text=${video.title}&url=${video.videoUrl}`} target="_blank" rel="noopener noreferrer">
                          Share on Twitter
                        </a>
                      </Button>
                      {/* Email */}
                      <Button className="shareButtons" variant="contained">
                        <a href={`mailto:?subject=${video.title}&body=Check out this video: ${video.videoUrl}`} target="_blank" rel="noopener noreferrer">
                          Share via Email
                        </a>
                      </Button>
                      {/* SMS */}
                      <Button className="shareButtons" variant="contained">
                        <a href={`sms:?&body=Check out this video: ${video.videoUrl}`}>
                          Share via Text Message
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

