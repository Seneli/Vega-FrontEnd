import { useState } from 'react';
import styled from 'styled-components';

import UploadStep from 'components/UploadStep';
import CarouselController from 'components/CarouselController';
import RadioDropdown from 'components/RadioDropdown';
import FileUploadeButton from 'components/FileUploadButton';

const Upload = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <>
      <PageHeader>
        <PageTitle>Upload an SBOM</PageTitle>
      </PageHeader>
      <PageBody>
        <CarouselController
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
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
      </PageBody>
    </>
  );
};

const PageHeader = styled.div`
  background-image: linear-gradient(
    147deg,
    rgba(141, 141, 236, 0.17) 0%,
    rgba(84, 84, 212, 0) 100%
  );
  height: 20vh;
  min-height: 200px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const PageTitle = styled.h1`
  text-align: center;
  width: 80%;
  font-size: 80px;
  line-height: 84px;
  margin: auto;
  font-weight: 700;
  color: rgb(25, 25, 27);
`;

const PageBody = styled.div`
  padding: 40px 0;
  width: 80%;
  margin: auto;
  display: flex;
  direction: row;
  justify-content: center;
`;

export default Upload;
