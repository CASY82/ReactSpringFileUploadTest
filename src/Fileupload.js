import React, { useState, useEffect, useRef } from "react";
import FileUploadService from "./FileUploadService";
import UploadService from "./FileUploadService";

const UploadFiles = () => {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [progressInfos, setProgressInfos] = useState({ val: [] });
    const [message, setMessage] = useState([]);
    const progressInfosRef = useRef(null);

    const selectFiles = (event) => {
        setSelectedFiles(event.target.files);
        setProgressInfos({ val: [] });
      };

    const uploadFiles = () => {
        if(selectedFiles != null){
          const files = Array.from(selectedFiles);
          let _progressInfos = files.map(file => ({ percentage: 0, fileName: file.name }));
          progressInfosRef.current = {
            val: _progressInfos,
          }

          const uploadPromises = files.map((file, i) => upload(i, file));
        }
        else{
          const uploadPromises = FileUploadService.upload_nonFile();
        }
        setMessage([]);
      };

      const upload = (idx, file) => {
        let _progressInfos = [...progressInfosRef.current.val];
        return UploadService.upload(file, (event) => {
          _progressInfos[idx].percentage = Math.round(
            (100 * event.loaded) / event.total
          );
          setProgressInfos({ val: _progressInfos });
        })
          .then(() => {
            setMessage((prevMessage) => ([
              ...prevMessage,
              "Uploaded the file successfully: " + file.name,
            ]));
          })
          .catch(() => {
            _progressInfos[idx].percentage = 0;
            setProgressInfos({ val: _progressInfos });
            setMessage((prevMessage) => ([
              ...prevMessage,
              "Could not upload the file: " + file.name,
            ]));
          });
      };

      useEffect(() => {

      }, []);

    return (
        <div>
        <br />
        <span>title : </span><input type="text"/><hr /> 
        <span>content : </span><input type="textarea"/><hr />
        {progressInfos && progressInfos.val.length > 0 &&
          progressInfos.val.map((progressInfo, index) => (
            <div className="mb-2" key={index}>
              <span>{progressInfo.fileName}</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={progressInfo.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progressInfo.percentage + "%" }}
                >
                  {progressInfo.percentage}%
                </div>
              </div>
            </div>
          ))}
        <div className="row my-3">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" multiple onChange={selectFiles} />
            </label>
          </div>
          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              // disabled={!selectedFiles}
              onClick={uploadFiles}
            >
              Upload
            </button>
          </div>
        </div>
        {message.length > 0 && (
          <div className="alert alert-secondary" role="alert">
            <ul>
              {message.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  };


  export default UploadFiles;