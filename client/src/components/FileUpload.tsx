import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface FileUploadProps {
  format: string | undefined;
  fileType: string | undefined;
}

const FileUpload = ({ format, fileType }: FileUploadProps) => {
  const [submitMessage, setSubmitMessage] = setState<string>('');
  const [file, setFile] = useState();

  const setUploadStateMessage = () => {
    let tempMsg = '';
    if (format && fileType) {
      tempMsg = `You have chosen to upload your SBOM in format: ${format} and file type: ${fileType}`;
    } else if (format === undefined && fileType === undefined) {
      tempMsg =
        'You have not chosen a SBOM format or file type to upload. Please select one to resume.';
    } else if (format === undefined) {
      tempMsg =
        'You have not chosen a SBOM format to upload. Please select one to resume.';
    } else {
      tempMsg =
        'You have not chosen a file type to upload. Please select one to resume.';
    }
    return tempMsg;
  };

  const uploadStateMessage = setUploadStateMessage();

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = (e: any) => {
    e.preventDefault();
    if (!file) {
      setSubmitMessage('You have not entered a file to submit.');
      return;
    }
    try {
      axios
        .post(`${process.env.REACT_APP_SERVER_ENDPOINT}/upload`, {
          
        })
        .then(setSubmitMessage('Upload Complete.'))
        .catch();
    } catch (error: any) {
      // setSubmitMessage(
      //     'This submission failed with error code: ',
      //     error.status
      //   );
      console.log(error);
      console.log(error.message);
    }
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
