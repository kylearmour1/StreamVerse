import React from 'react';
// import axios from 'axios';


//assign what you need from the API call as a variable 
//then pass the variable as props below inside the function 
//then map over the function with mapVideoList function component 

//this variable will have the exact path of however you receive the object in the API call

// const videoIds = ['videoId1', 'videoId2', 'videoId3'];

// function App() {
//   return (
//     <div>
//       <h1>Video List</h1>
//       <VideoList videoIds={videoIds} />
//     </div>
//   );
// }

export default function VideoList({ videoIds }) {
  // const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div key={videoIds.map((videoId)) className="youtube-video-container">
      <iframe 
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      />
    </div>
  }
  );
}
