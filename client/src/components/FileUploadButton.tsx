import { ChangeEvent, MutableRefObject, useRef } from 'react';
import styled from 'styled-components';

const FileUploadeButton = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log('BUTTON WAS CLICKED!');
    if (hiddenFileInput.current === null) {
      //throw error or report some problem :")
    } else {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const fileUploaded = e.target.files[0];
      console.log(fileUploaded);
      uploadFile(fileUploaded);
    } else {
      console.log('THE REF FAILED FUCKK');
      // TELL THE USER THEIR FILE WASN'T PROPERLY UPLOADED?
    }
  };

  const uploadFile = (file: File) => {
    console.log('uploading file:', file);
  };

  return (
    <>
      <Button onClick={() => handleClick()}>Upload a file</Button>
      <input
        type='file'
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <Button>Generate Dashboard!</Button>
    </>
  );
};

const Button = styled.button`
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
    margin-top: 2px;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
  }
`;

export default FileUploadeButton;
