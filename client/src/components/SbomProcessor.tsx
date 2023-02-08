import { useContext, useState, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import LoadingSpin from 'react-loading-spin';

import { SbomProcessingState } from 'helpers/enums/enums';

interface SbomProcessorProps {
  loading: boolean;
  uploadSuccessful: boolean;
  sbomProcessingState: SbomProcessingState;
  setSbomProcessingState: Function;
}

const SbomProcessor = ({
  loading,
  uploadSuccessful,
  sbomProcessingState,
  setSbomProcessingState,
}: SbomProcessorProps) => {
  const themeContext = useContext(ThemeContext);
  const [querySuccessful, setQuerySuccessful] = useState(null);
  const [riskAnalysisSuccessful, setriskAnalysisSuccessful] = useState(null);

  useEffect((): void => {
    if (uploadSuccessful) setSbomProcessingState(SbomProcessingState.Query);
    else {
      return;
    }
    if (querySuccessful)
      setSbomProcessingState(SbomProcessingState.RiskAnalysis);
    else if (riskAnalysisSuccessful)
      setSbomProcessingState(SbomProcessingState.Done);
  }, [uploadSuccessful, querySuccessful, riskAnalysisSuccessful]);

  return (
    <Container loading={loading}>
      <Content>
        <LoadingSpin
          width={'15px'}
          size={'180px'}
          primaryColor={themeContext.colors.primaryPink}
        />
        <Text top={true}>Current State:</Text>
        <Text>{sbomProcessingState}</Text>
      </Content>
    </Container>
  );
};

interface ContainerProps {
  loading: boolean;
}

const Container = styled.div<ContainerProps>`
  z-index: 10;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(138, 138, 138, 0.7);
  display: ${(props) => (props.loading ? 'block' : 'none')};
  margin: auto;
`;

const Content = styled.div`
  opacity: 100%;
  margin: auto;
  width: 200px;
  padding-top: 30vh;
  color: white;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

interface TextProps {
  top?: boolean;
}

const Text = styled.p<TextProps>`
  margin: ${(props) => (props.top ? '25px 0 0 0' : '10px 0 0 0')};
`;

export default SbomProcessor;
