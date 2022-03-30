import axios from 'axios';

const upload = (file, onUploadProgress) => {
    let formData = new FormData();
    
    // 동오 테스트 환경
    formData.append('testobject', new Blob([JSON.stringify({
      board_name : "되나연?",
      board_content : "킬끼루빵뿡",
      board_price : 200000000
    })], {type: "application/json"}));
    return axios.post("http://192.168.0.76:8080/notToken/insertBoard", formData, {
        headers: {
            "content-type": "multipart/form-data"
        },
        onUploadProgress,
    });

    // 준모 테스트 환경
    // formData.append('testobject', new Blob([JSON.stringify({
    //   back_Qna_Name : "되나연?",
    //   back_Qna_Content : "ㅋㅋㅋㄹㄹㄼㅂㅂㅂㅂ",
    //   user_Idx : 5
    // })], {type: "application/json"}));
    // formData.append("file", file);
    // return axios.post("http://192.168.0.121:8080/MainView/qnaInsert", formData, {
    //     headers: {
    //         "content-type": "multipart/form-data"
    //     },
    //     onUploadProgress,
    // });
    
  };

  const upload_nonFile = () => {
    let formData = new FormData();
    // 동오 테스트 환경
    formData.append('testobject', new Blob([JSON.stringify({
      board_name : "안녕하세요",
      board_content : "으아아갘",
      board_price : 2000
    })], {type: "application/json"}));
    
    return axios.post("http://192.168.0.76:8080/notToken/insertBoard", formData, {
        headers: {
            "content-type": "multipart/form-data"
        }
    });
    
    // 준모 테스트 환경
    // formData.append('testobject', new Blob([JSON.stringify({
    //   back_Qna_Name : "되나연?",
    //   back_Qna_Content : "ㅋㅋㅋㄹㄹㄼㅂㅂㅂㅂ",
    //   user_Idx : 5
    // })], {type: "application/json"}));
    // return axios.post("http://192.168.0.121:8080/MainView/qnaInsert", formData, {
    //     headers: {
    //         "content-type": "multipart/form-data"
    //     }
    // });
  };

  const FileUploadService = {
    upload,
    upload_nonFile
  };
  
export default FileUploadService; 


