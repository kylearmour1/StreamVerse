import React from 'react';



function VideoPlayer({ video }) {
    if (!video) {
        return <div> No video selected. Please select a video</div>;
    }
// <iframe is used to display the YouTube video on our site without having a user be redirected to YouTube. It also has a set of allowances, such as allow autoplay, or allowFullScreen 
    return (
        <div className="video-player">
            <h2>{video.title}</h2>
            <iframe
                src={`https://www.youtube.com/embed/${id.videoId}`}
                title={snippet.title}
                allow="autoplay; encrypted-media" 
                allowFullScreen
            />
        </div>
    );
}

export default VideoPlayer;
