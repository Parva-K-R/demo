// src/components/FileUpload.js
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [insights, setInsights] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setInsights(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <Dropzone onDrop={onDrop} accept=".pdf">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '2px dashed #0087F7', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop a PDF file here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      <button onClick={handleSubmit} disabled={!file}>Generate Insights</button>
      {insights && (
        <div>
          <h3>Insights:</h3>
          <pre>{JSON.stringify(insights, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
