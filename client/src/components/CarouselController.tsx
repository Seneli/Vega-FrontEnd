import { useState } from 'react';
import styled from 'styled-components';

interface CarouselControllerProps {
  currentStep: number;
  setCurrentStep: Function;
}

const CarouselController = ({
  currentStep,
  setCurrentStep,
}: CarouselControllerProps) => {
  return (
    <Container>
      <StepContainer onClick={() => setCurrentStep(1)}>
        <p>Logo</p>
        <Number>Step 1</Number>
        <Name>Select Format</Name>
      </StepContainer>

      <StepContainer onClick={() => setCurrentStep(2)}>
        <p>Logo</p>
        <Number>Step 2</Number>
        <Name>Select Upload Method</Name>
      </StepContainer>

      <StepContainer onClick={() => setCurrentStep(3)}>
        <p>Logo</p>
        <Number>Step 3</Number>
        <Name>Upload SBOM</Name>
      </StepContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.backgroundGrey};
  padding: 20px;
`;

const StepContainer = styled.div`
  /* padding: 20px; */
  /* display: grid; */
  width: 100%;
  /* height: 100px; */
  & > * {
    margin: 7px;
    padding: 0;
  }
`;

const Number = styled.h3`
  color: grey;
  font-weight: normal;
`;

const Name = styled.h4`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryPink};
`;

export default CarouselController;
