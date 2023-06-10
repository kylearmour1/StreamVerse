import React from 'react';
import VideoList from '../VideoList/VideoList'

//include the actual video data from the YouTube API 
// fetch the video data from the YouTube API --> Save it to the state, and pass it as a prop to MapVideoList.

const apiInfo = {
  videoId: 'snippet.id.videoId',
  title: 'snippet.title',

}

export default function MapVideoList({ videos }) {
    return (
      <div className="youtube-video-list">
        {videos.map((VideoList) => (
          <VideoList key={apiInfo.video.id.videoId} videoId={apiInfo.video.id.videoId} />
        ))}
      </div>
    );
  }

