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

    console.log(`Uploading ${selectedFile.name}...`);
  };

  
}

export default VideoUpload;