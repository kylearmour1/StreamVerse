import React, { useState } from 'react';

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a video file to upload");
      return;
    }

// allows users to enter a title and a description for their video upload, and then select a video file from their device to upload

    console.log(`Uploading ${selectedFile.name}...`);
  };

  return (
    <div className="video-upload-page">
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
          <input type="file" accept="video/*" onChange={handleFileChange} />
        </label>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}


export default VideoUpload;