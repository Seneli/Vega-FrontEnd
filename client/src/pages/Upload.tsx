import { useState } from 'react';
import styled from 'styled-components';


import CarouselBody from 'components/CarouselBody';
import CarouselController from 'components/CarouselController';
const Upload = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [format, setFormat] = useState<string | undefined>(undefined);
  const [uploadMethod, setUploadMethod] = useState<string | undefined>(
    undefined
  );

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
        <CarouselBody
          currentStep={currentStep}
          format={format}
          setFormat={setFormat}
          uploadMethod={uploadMethod}
          setUploadMethod={setUploadMethod}
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
  width: 80%;
  margin: auto;
  display: flex;
  direction: row;
  justify-content: center;
`;

export default Upload;
