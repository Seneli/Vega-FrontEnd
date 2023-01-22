import { useState } from 'react';
import styled from 'styled-components';

import UploadStep from 'components/UploadStep';
import CarouselController from 'components/CarouselController';
import RadioDropdown from 'components/RadioDropdown';
import FileUploadeButton from 'components/FileUploadButton';

interface CarouselBodyProps {}

const CarouselBody = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const length = 3;

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
        />
      </UploadStep>

      <UploadStep
        visible={currentStep === 3}
        step={3}
        title={'How Will You Upload Your SBOM?'}
      >
          <FileUploadeButton />
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
