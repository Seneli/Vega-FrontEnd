import { useState } from 'react';
import styled from 'styled-components';

interface FileUploadProps {
  format: string | undefined;
  uploadMethod: string | undefined;
}

const FileUpload = ({ format, uploadMethod }: FileUploadProps) => {
  const [file, setFile] = useState();
  const [uploadMessage, setUploadMessage] = useState('');

  const setUploadStateMessage = () => {
    let tempMsg = '';
    if (format && uploadMethod) {
      tempMsg = `You have chosen to upload your SBOM in format: ${format} and method: ${uploadMethod}`;
    } else if (format === undefined && uploadMethod === undefined) {
      tempMsg =
        'You have not chosen a SBOM format or method of upload. Please select one to resume.';
    } else if (format === undefined) {
      tempMsg =
        'You have not chosen a SBOM format to upload. Please select one to resume.';
    } else {
      tempMsg =
        'You have not chosen a SBOM upload method. Please select one to resume.';
    }
    return tempMsg;
  };

  const uploadStateMessage = setUploadStateMessage();

  const uploadFile = (e: any) => {
    e.preventDefault();
    setUploadMessage('Upload Complete');
    // include file upload logic in here!
  };

  return (
    <form
      onSubmit={(e: any) => {
        uploadFile(e);
      }}
    >
      <p>{uploadStateMessage}</p>
      <FileInput />
      <Button />
      <p>{uploadMessage}</p>
    </form>
  );
};

const FileInput = styled.input.attrs({ type: 'file' })`
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
