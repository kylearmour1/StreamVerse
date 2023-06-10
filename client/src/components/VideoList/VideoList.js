import React from 'react';
// import axios from 'axios';


//assign what you need from the API call as a variable 
//then pass the variable as props below inside the function 
//then map over the function with mapVideoList function component 

//this variable will have the exact path of however you receive the object in the API call

export default function VideoList({ videoId }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-video-container">
      <iframe 
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      />
    </div>
  );
}

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     // Make a request to your server-side route
//     axios.get('/api/videos/search', { params: { q: 'cats' } })
//       .then((response) => {
//         setVideos(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching videos:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {videos.map((video) => (
//         <div key={video.id}>
//           <h3>{video.title}</h3>
//           <img src={video.thumbnail} alt={video.title} />
//         </div>
//       ))}
//     </div>
//   );
// };
// <div></div>
