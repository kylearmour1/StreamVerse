import React from 'react';
import axios from 'axios'; 

// TODO: Confirm data for video submission 
// TODO: Ensure YT API info is passed in where needed 

function VideoListPage(props) {
  const { suggestedVideos, categorizedVideos } = props;

  return (
    <div>
      <h2>Suggested Videos</h2>
      <div className="suggested-videos">
        {/* using unique keys to help with rerendering the page with new information each time  */}
        {suggestedVideos.map(video => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <video src={video.url} controls />
            <p>Uploaded by {video.uploader}</p>
          </div>
        ))}
      </div>

      {Object.entries(categorizedVideos).map(([category, videos]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
            {videos.map(video => (
              <div key={video.id}>
                <h3>{video.title}</h3>
                <video src={video.url} controls />
                <p>Uploaded by {video.uploader}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoListPage;