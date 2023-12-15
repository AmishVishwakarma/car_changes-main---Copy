import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [outputText, setOutputText] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    // Assuming only one file is allowed to be uploaded at a time
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Uploaded File:', uploadedFile);
    console.log('Text Input:', textInput);

    // Your processing logic here...

    // For demonstration, just concatenate the inputs
    const result = `Uploaded File: ${uploadedFile ? uploadedFile.name : 'None'}\nText Input: ${textInput}`;
    setOutputText(result);

    // Reset state after submission if needed
    setUploadedFile(null);
    setTextInput('');
  };

  return (
    <Container maxWidth="md" style={containerStyle}>
      <Paper elevation={3} style={boxStyle}>
        <h1>Summarizer</h1>
        

        <div {...getRootProps()} style={dropzoneStyle}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop a file here, or click to select a file</p>
        </div>

        {uploadedFile && (
          <div style={filePreviewStyle}>
            <p>Uploaded File: {uploadedFile.name}</p>
            <Button onClick={handleDeleteFile} style={deleteButtonStyle} variant="contained" color="error">
              Delete File
            </Button>
          </div>
        )}
        <Typography variaint="h3" sx={{textAlign:"center", fontWeight: "bold",fontSize:12}}>OR</Typography>
        <TextField
          type="text"
          label="Enter text"
          style={inputStyle}
          value={textInput}
          onChange={handleTextInputChange}
          fullWidth
        />

        <Button onClick={handleSubmit} style={submitStyle} variant="contained" color="primary">
          Submit
        </Button>

        <Card style={cardStyle}>
          <CardContent>
            <h2>Summary:</h2>
            <TextField
                placeholder="Summary will appear here"
              value={outputText}
              multiline
              fullWidth
              variant="outlined"
              rows={4}
              disabled
            />
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
}

const containerStyle = {
  marginTop: '0px',
  display: 'inline',
  flexDirection: 'column',
  alignItem: 'center',
  justifyContent: 'center',
};

const boxStyle = {
  padding: '150px',
  margin: 'auto',
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '30px',
  textAlign: 'center',
  cursor: 'pointer',
  marginBottom: '40px',
};

const filePreviewStyle = {
  marginTop: '10px',
  marginBottom: "20px",
  sx:{alignItems:"center"}
  
};

const inputStyle = {
  marginTop: '10px',
  marginBottom: '20px',
};

const submitStyle = {
  marginTop: '10px',
  alignItems:"center",
  backgroundColor: "#f44",
};

const deleteButtonStyle = {
  marginTop: '5px',
};

const cardStyle = {
  marginTop: '20px',
  width: '100%',
  height: "100%",
  padding:"20px"
};

export default App;
