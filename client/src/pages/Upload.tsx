import styled from 'styled-components';

import RadioDropdown from 'components/RadioDropdown';
import FileUploadeButton from 'components/FileUploadButton';

const Upload = () => {
  return (
    <>
      <PageHeader>Upload an SBOM</PageHeader>
      <PageBody>
        <Container>
          <RadioDropdown
            prompt={'Select SBOM Format'}
            options={['CycloneDX', 'SPDX']}
          />
          <RadioDropdown
            prompt={'Select Upload Method'}
            options={['Input Manually (copy-paste text)', 'Upload File']}
          />
          <FileUploadeButton />
        </Container>
      </PageBody>
    </>
  );
};

const PageHeader = styled.h1`
  font-size: 80px;
  line-height: 84px;
  margin: 0;
  padding: 100px;
  font-weight: 700;
  color: rgb(25, 25, 27);
  background-image: linear-gradient(
    147deg,
    rgba(141, 141, 236, 0.17) 0%,
    rgba(84, 84, 212, 0) 100%
  );
`;

const PageBody = styled.div`
  padding: 20px 100px 0 100px;
  width: 80%;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  direction: row;
  justify-content: space-evenly;
`;

export default Upload;
