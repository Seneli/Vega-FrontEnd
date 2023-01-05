import styled from 'styled-components';
import { Button } from 'antd';
import { View } from 'helpers/enums/dashboard';

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
  grid-area: ViewButtons;
`;

const ViewLabel = styled.label``;

interface ButtonProps {
  view: View;
  option: View;
}

const ViewButton = styled(Button)<ButtonProps>`
  background-color: ${(props) =>
    (props.view === props.option && props.theme.colors.primaryPink) ||
    props.theme.colors.white};
    &:hover{
      margin-top: 2px;
    }
`;

export default ViewButtons;
