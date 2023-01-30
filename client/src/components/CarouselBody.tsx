import styled from 'styled-components';

import UploadStep from 'components/UploadStep';
import RadioDropdown from 'components/RadioDropdown';
import FileUpload from 'components/FileUpload';

interface CarouselBodyProps {
  currentStep: number;
  setCurrentStep: Function;
  format: string | undefined;
  setFormat: Function;
  uploadMethod: string | undefined;
  setUploadMethod: Function;
}

const CarouselBody = ({
  currentStep,
  setCurrentStep,
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
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </UploadStep>

      <UploadStep
        visible={currentStep === 2}
        step={2}
        title={'Which File Type Will You Upload?'}
      >
        <RadioDropdown
          prompt={'Select File Type'}
          options={['JSON', 'XML']}
          state={uploadMethod}
          setState={setUploadMethod}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
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
  transition: 2s;
`;

export default CarouselBody;