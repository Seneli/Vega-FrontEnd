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
  max-width: 400px;
  display: flex;
  gap: 15px;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
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
  color: ${(props) =>
    (props.view === props.option && '#fff') || props.theme.colors.textGrey};
  & > * {
    color: ${(props) =>
      (props.view === props.option && '#fff') || props.theme.colors.textGrey};
  }

  &:hover {
    margin-top: 5px;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
    border: none;
  }
`;

export default ViewButtons;
