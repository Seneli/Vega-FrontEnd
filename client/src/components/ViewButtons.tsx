import styled from 'styled-components';
import { View } from 'static/enums/dashboard';

interface ViewButtonsProps {
  view: View;
  setView: Function;
}

const ViewButtons = ({ view, setView }: ViewButtonsProps) => {
  return (
    <ViewButtonsDiv>
      <ViewLabel>View</ViewLabel>
      <ViewButton
        view={view}
        option={View.Component}
        onClick={() => setView(View.Component)}
      >
        {View.Component}
      </ViewButton>
      <ViewButton
        view={view}
        option={View.Vulnerability}
        onClick={() => setView(View.Vulnerability)}
      >
        {View.Vulnerability}
      </ViewButton>
    </ViewButtonsDiv>
  );
};

const ViewButtonsDiv = styled.div`
  background-color: red;
  grid-area: ViewToggle;
`;

const ViewLabel = styled.label``;

interface ButtonProps {
  view: View;
  option: View;
}

const ViewButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    (props.view === props.option && 'orange') || 'blue'};
`;

export default ViewButtons;
