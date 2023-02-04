import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface FileUploadProps {
  format: string | undefined;
  fileType: string | undefined;
}

const FileUpload = ({ format, fileType }: FileUploadProps) => {
  const [uploadStateMessage, setUploadStateMessage] = useState<string>('');
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [file, setFile] = useState();
  const [fileFormat, setFileFormat] = useState<number>(-1);

  const updateFileFormat = (format: string, fileType: string) => {
    if (format === 'SPDX' && fileType === 'JSON') {
      setFileFormat(0);
    } else if (format === 'SPDX' && fileType === 'TAG VALUE') {
      setFileFormat(1);
    } else if (format === 'CycloneDX' && fileType === 'XML') {
      setFileFormat(2);
    } else if (format === 'CycloneDX' && fileType === 'JSON') {
      setFileFormat(3);
    }
  };

  useEffect(() => {
    if (format && fileType) {
      setUploadStateMessage(
        `You have chosen to upload your SBOM in format: ${format} and file type: ${fileType}`
      );
      updateFileFormat(format, fileType);
    } else if (format === undefined && fileType === undefined) {
      setUploadStateMessage(
        'You have not chosen a SBOM format or file type to upload. Please select one to resume.'
      );
    } else if (format === undefined) {
      setUploadStateMessage(
        'You have not chosen a SBOM format to upload. Please select one to resume.'
      );
    } else {
      setUploadStateMessage(
        'You have not chosen a file type to upload. Please select one to resume.'
      );
    }
  }, [format, fileType]);

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = (e: any) => {
    e.preventDefault();
    if (!file) {
      setSubmitMessage('You have not entered a file to submit.');
      return;
    }
    const queryParams = {
      format: fileFormat,
      sessionID: 0,
    };
    const formData = new FormData();
    formData.append('sbom', file);
    axios
      .post(`${process.env.REACT_APP_SERVER_ENDPOINT}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: queryParams,
      })
      .then(() => {
        setSubmitMessage('Upload Complete.');
      })
      .catch((error: any) => {
        console.log(error);
        setSubmitMessage('There was an error, you fool');
      });
  };

  return (
    <form
      onSubmit={(e: any) => {
        uploadFile(e);
      }}
    >
      <p>{uploadStateMessage}</p>
      <FileInput onChange={onChange} />
      <Button />
      <p>{submitMessage}</p>
    </form>
  );
};

const FileInput = styled.input.attrs({
  type: 'file',
  accept: 'text/xml,application/xml,application/json',
})`
  width: 100%;
  &::-webkit-file-upload-button {
    border: 2px solid ${(props) => props.theme.colors.backgroundGrey};
    border-radius: 7px;
    background-color: #fff;
    color: ${(props) => props.color};
    text-align: left;
    padding: 10px 20px;
    width: 200px;
    height: 40px;
    text-align: center;
    &:hover {
      box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
    }
    margin-top: 10px;
  }
`;

const Button = styled.input.attrs({ type: 'submit' })`
  border: 2px solid ${(props) => props.theme.colors.backgroundGrey};
  border-radius: 7px;
  background-color: #fff;
  color: ${(props) => props.color};
  text-align: left;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  width: 200px;
  height: 40px;
  &:hover {
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
  }
  margin-top: 10px;
`;

export default FileUpload;
