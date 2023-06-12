import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const VideoUpload = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div>
        <h3>Upload a Video</h3>
        <a 
          href="https://www.youtube.com/upload" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button>Upload to YouTube</button>
        </a>
      </div>
      <Footer />
    </div>
  );
};


export default VideoUpload;
