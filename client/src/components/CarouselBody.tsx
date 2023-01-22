import styled from 'styled-components';

import UploadStep from 'components/UploadStep';
import RadioDropdown from 'components/RadioDropdown';
import FileUpload from 'components/FileUpload';

interface CarouselBodyProps {
  currentStep: number;
  format: string | undefined;
  setFormat: Function;
  uploadMethod: string | undefined;
  setUploadMethod: Function;
}

const CarouselBody = ({
  currentStep,
  format,
  setFormat,
  uploadMethod,
  setUploadMethod,
}: CarouselBodyProps) => {
  return (
    <Container>
      <UploadStep
        visible={currentStep === 1}
        step={1}
        title={'What Format is your SBOM in?'}
      >
        <RadioDropdown
          prompt={'Select SBOM Format'}
          options={['CycloneDX', 'SPDX']}
          state={format}
          setState={setFormat}
        />
      </UploadStep>

      <UploadStep
        visible={currentStep === 2}
        step={2}
        title={'How Will You Upload Your SBOM?'}
      >
        <RadioDropdown
          prompt={'Select Upload Method'}
          options={['Input Manually (copy-paste text)', 'Upload File']}
          state={uploadMethod}
          setState={setUploadMethod}
        />
      </UploadStep>

      <UploadStep
        visible={currentStep === 3}
        step={3}
        title={'Upload Your SBOM'}
      >
        <FileUpload format={format} uploadMethod={uploadMethod} />
      </UploadStep>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
  /* text-align: center; */
  /* background-color: #16a756;
  color: white;
  border-radius: 2px; */
  transition: 2s;
`;

export default CarouselBody;
