import React, { useState } from 'react';
import axios from 'axios'; 
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'Kyle Armour',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla metus id augue semper, vel viverra magna luctus.',
    avatar: 'https://example.com/avatar.jpg'
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [comments, setComments] = useState({});

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a video file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await axios.post('http://localhost:3001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    const uploadedFilePath = `http://localhost:3001/uploads/${response.data.filename}`;

    const uploadedVideoData = {
      id: Date.now(),
      title,
      description,
      videoUrl: uploadedFilePath
    };

    setUploadedVideos([uploadedVideoData, ...uploadedVideos]);

    console.log(`Uploading ${selectedFile.name}...`);
  };

  const handleDelete = (id) => {
    setUploadedVideos(uploadedVideos.filter(video => video.id !== id));

    const newLikes = { ...likes };
    delete newLikes[id];
    setLikes(newLikes);

    const newDislikes = { ...dislikes };
    delete newDislikes[id];
    setDislikes(newDislikes);

    const newComments = { ...comments };
    delete newComments[id];
    setComments(newComments);
  };

  const handleLike = (id) => {
    if (dislikes[id]) {
      setDislikes(prevDislikes => {
        const newDislikes = { ...prevDislikes };
        delete newDislikes[id];
        return newDislikes;
      });
    } else if (likes[id]) {
      setLikes(prevLikes => {
        const newLikes = { ...prevLikes };
        delete newLikes[id];
        return newLikes;
      });
    } else {
      setLikes(prevLikes => {
        const newLikes = { ...prevLikes, [id]: true };
        return newLikes;
      });
    }
  };

  const handleDislike = (id) => {
    if (likes[id]) {
      setLikes(prevLikes => {
        const newLikes = { ...prevLikes };
        delete newLikes[id];
        return newLikes;
      });
    } else if (dislikes[id]) {
      setDislikes(prevDislikes => {
        const newDislikes = { ...prevDislikes };
        delete newDislikes[id];
        return newDislikes;
      });
    } else {
      setDislikes(prevDislikes => {
        const newDislikes = { ...prevDislikes, [id]: true };
        return newDislikes;
      });
    }
  };

  const handleComment = (event, id) => {
    event.preventDefault();
    const comment = event.target.comment.value;

    setComments(prevComments => {
      const newComments = { ...prevComments, [id]: (prevComments[id] || []).concat(comment) };
      return newComments;
    });

    event.target.comment.value = '';
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <div className="user-details"></div>
      </div>
      <div className="bio">
        <h3>Bio:</h3>
        <p>{user.bio}</p>
      </div>

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
