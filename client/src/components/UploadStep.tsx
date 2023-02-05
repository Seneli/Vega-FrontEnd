import styled from 'styled-components';

interface UploadStepProps {
  visible: boolean;
  step: number;
  title: string;
  children?: JSX.Element;
}

const UploadStep = ({ visible, step, title, children }: UploadStepProps) => {
  return (
    <Container visible={visible}>
      <h2>{`Step ${step}`}</h2>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

interface ContainerProps {
  visible: boolean;
}

const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  /* visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  width: ${(props) => (props.visible ? '100%' : '0%')}; */
  /* margin: 0px 30px;
  height: 100%; */
  position: relative;
  /* top: 0%; */
  transition: 2s ease-out;
  /* transform: translate3d(0, -100%, 0); */
  padding: 30px;
  width: 600px;
`;

export default UploadStep;
