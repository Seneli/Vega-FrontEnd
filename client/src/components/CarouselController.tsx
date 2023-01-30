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
      <StepContainer
        chosenStep={1 === currentStep}
        onClick={() => setCurrentStep(1)}
      >
        <p>Insert Logo</p>
        <Number>Step 1</Number>
        <Name>Select Format</Name>
      </StepContainer>

      <StepContainer
        chosenStep={2 === currentStep}
        onClick={() => setCurrentStep(2)}
      >
        <p>Insert Logo</p>
        <Number>Step 2</Number>
        <Name>Select File Type</Name>
      </StepContainer>

      <StepContainer
        chosenStep={3 === currentStep}
        onClick={() => setCurrentStep(3)}
      >
        <p>Insert Logo</p>
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

interface StepContainerProps {
  chosenStep: boolean;
}

const StepContainer = styled.div<StepContainerProps>`
  padding: 5px;
  border-radius: 15px;
  background-color: ${(props) => (props.chosenStep ? '#e4e4e4' : 'white')};
  width: 100%;
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
