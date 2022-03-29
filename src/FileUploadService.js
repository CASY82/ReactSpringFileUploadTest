import axios from 'axios';

const upload = (file, onUploadProgress) => {
    let formData = new FormData();
    formData.append("file", file);
    return axios.post("http://192.168.0.76:8080/notToken/insertBoard", formData, {
        headers: {
            "content-type": "multipart/form-data"
        },
        onUploadProgress,
    });
  };

  const FileUploadService = {
    upload,
  };
  
export default FileUploadService; 