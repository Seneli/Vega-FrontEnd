import { useState, useEffect } from 'react';
import styled from 'styled-components';

import CarouselBody from 'components/CarouselBody';
import CarouselController from 'components/CarouselController';
const Upload = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [availableSteps, setAvailableSteps] = useState<number[]>([1]);
  const [format, setFormat] = useState<string | undefined>(undefined);
  const [fileType, setFileType] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (format && fileType) {
      setAvailableSteps([1, 2, 3]);
    } else if (format) {
      setAvailableSteps([1, 2]);
    }
  }, [format, fileType]);

  return (
    <>
      <PageHeader>
        <PageTitle>Upload an SBOM</PageTitle>
      </PageHeader>
      <PageBody>
        <CarouselController
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          availableSteps={availableSteps}
        />
        <CarouselBody
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          format={format}
          setFormat={setFormat}
          fileType={fileType}
          setFileType={setFileType}
        ></CarouselBody>
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
  min-height: 350px;
  width: 80%;
  margin: auto;
  display: flex;
  direction: row;
  justify-content: center;
`;

export default Upload;
