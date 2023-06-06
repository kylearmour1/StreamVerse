import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './Profile.css';

const Profile = () => {
  // A dummy user data
  const user = {
    name: 'Kyle Armour',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla metus id augue semper, vel viverra magna luctus.',
    avatar: 'https://example.com/avatar.jpg'
  };

  // Defining the state variables
  const [selectedFile, setSelectedFile] = useState(null); // Selected file for video upload
  const [title, setTitle] = useState(''); // Title of the uploaded video
  const [description, setDescription] = useState(''); // Description of the uploaded video
  const [uploadedVideos, setUploadedVideos] = useState([]); // List of uploaded videos
  const [likes, setLikes] = useState({}); // Object storing likes of each video
  const [dislikes, setDislikes] = useState({}); // Object storing dislikes of each video
  const [comments, setComments] = useState({}); // Object storing comments of each video

  // Fetching stored videos, likes, dislikes and comments from local storage when the component mounts
  useEffect(() => {
    const storedVideos = localStorage.getItem('uploadedVideos');
    const storedLikes = localStorage.getItem('likes');
    const storedDislikes = localStorage.getItem('dislikes');
    const storedComments = localStorage.getItem('comments');

    if (storedVideos) {
      setUploadedVideos(JSON.parse(storedVideos));
    }

    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }

    if (storedDislikes) {
      setDislikes(JSON.parse(storedDislikes));
    }

    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Functions to handle changes in file, title and description fields
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Function to handle video upload
  const handleSubmit = async (event) => {
    event.preventDefault();

    // If no file is selected, show an alert
    if (!selectedFile) {
      alert('Please select a video file to upload');
      return;
    }

    // Preparing the file for upload
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Making a POST request to upload the file
    const response = await axios.post('http://localhost:3001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    // Getting the uploaded file path
    const uploadedFilePath = `http://localhost:3001/uploads/${response.data.filename}`;

    // Creating an object for the uploaded video
    const uploadedVideoData = {
      id: Date.now(),
      title,
      description,
      videoUrl: uploadedFilePath
    };

    // Updating the uploadedVideos state and storing it in local storage
    setUploadedVideos([uploadedVideoData, ...uploadedVideos]);
    localStorage.setItem('uploadedVideos', JSON.stringify([uploadedVideoData, ...uploadedVideos]));

    console.log(`Uploading ${selectedFile.name}...`);
  };

  // Function to handle video delete
  const handleDelete = (id) => {
    // Removing the video from the uploadedVideos state and local storage
    const newUploadedVideos = uploadedVideos.filter(video => video.id !== id);
    setUploadedVideos(newUploadedVideos);
    localStorage.setItem('uploadedVideos', JSON.stringify(newUploadedVideos));

    // Removing likes, dislikes and comments related to the video
    const newLikes = { ...likes };
    delete newLikes[id];
    setLikes(newLikes);
    localStorage.setItem('likes', JSON.stringify(newLikes));

    const newDislikes = { ...dislikes };
    delete newDislikes[id];
    setDislikes(newDislikes);
    localStorage.setItem('dislikes', JSON.stringify(newDislikes));

    const newComments = { ...comments };
    delete newComments[id];
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));
  };

  // Functions to handle like and dislike actions
  const handleLike = (id) => {
    // Removing dislike if it exists, or removing like if it exists, or adding a like
    // Updating the likes and dislikes states and storing them in local storage
    if (dislikes[id]) {
      setDislikes(prevDislikes => {
        const newDislikes = { ...prevDislikes };
        delete newDislikes[id];
        localStorage.setItem('dislikes', JSON.stringify(newDislikes));
        return newDislikes;
      });
    } else if (likes[id]) {
      setLikes(prevLikes => {
        const newLikes = { ...prevLikes };
        delete newLikes[id];
        localStorage.setItem('likes', JSON.stringify(newLikes));
        return newLikes;
      });
    } else {
      setLikes(prevLikes => {
        const newLikes = { ...prevLikes, [id]: true };
        localStorage.setItem('likes', JSON.stringify(newLikes));
        return newLikes;
      });
    }
  };

  const handleDislike = (id) => {
    // Removing like if it exists, or removing dislike if it exists, or adding a dislike
    // Updating the likes and dislikes states and storing them in local storage
    if (likes[id]) {
      setLikes(prevLikes => {
        const newLikes = { ...prevLikes };
        delete newLikes[id];
        localStorage.setItem('likes', JSON.stringify(newLikes));
        return newLikes;
      });
    } else if (dislikes[id]) {
      setDislikes(prevDislikes => {
        const newDislikes = { ...prevDislikes };
        delete newDislikes[id];
        localStorage.setItem('dislikes', JSON.stringify(newDislikes));
        return newDislikes;
      });
    } else {
      setDislikes(prevDislikes => {
        const newDislikes = { ...prevDislikes, [id]: true };
        localStorage.setItem('dislikes', JSON.stringify(newDislikes));
        return newDislikes;
      });
    }
  };

  // Function to handle comment submission
  const handleComment = (event, id) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    // Adding the comment to the comments state and storing it in local storage
    setComments(prevComments => {
      const newComments = { ...prevComments, [id]: (prevComments[id] || []).concat(comment) };
      localStorage.setItem('comments', JSON.stringify(newComments));
      return newComments;
    });
    event.target.comment.value = '';
  };

  // Returning the JSX to render for this component
  return (
    // The entire structure of the Profile page
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <div className="user-details">
          {/* <p>{user.name}</p> */}
        </div>
      </div>
      <div className="bio">
        <h3>Bio:</h3>
        <p>{user.bio}</p>
      </div>

      {/* The video upload form */}
      <div className="video-upload">
        <h2>Upload a Video</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={handleDescriptionChange} />
          </label>
          <label>
            Video File:
            <input type="file" accept=".mp4, video/mp4" onChange={handleFileChange} />
          </label>
          <button type="submit">Upload</button>
        </form>
      </div>

      {/* Displaying the uploaded videos, with their likes, dislikes and comments */}
      {uploadedVideos.map((video) => (
        <div key={video.id} className="video-content">
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <video src={video.videoUrl} controls />

          <div className="video-actions">
            <button className={`like-button ${likes[video.id] ? 'active' : ''}`} onClick={() => handleLike(video.id)}>{likes[video.id] ? '👍 Liked' : '👍 Like'}</button>
            <button className={`dislike-button ${dislikes[video.id] ? 'active' : ''}`} onClick={() => handleDislike(video.id)}>{dislikes[video.id] ? '👎 Disliked' : '👎 Dislike'}</button>
            <button onClick={() => handleDelete(video.id)}>Delete</button>
          </div>

          {(comments[video.id] || []).map((comment, index) => <p key={index}>{comment}</p>)}

          {/* The comment form for each video */}
          <form onSubmit={(event) => handleComment(event, video.id)}>
            <label>
              Comment:
              <input type="text" name="comment" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Profile;
