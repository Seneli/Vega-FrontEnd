import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { VulnerabilityViewColumn } from 'helpers/enums/enums';

import CheckboxDropdownButton from 'components/CheckboxDropdownButton';

interface ShowInfoAndExportProps {
  shownColumns: string[];
  setShownColumns: Function;
  columnDropdown: string[];
}

const ShowInfoAndExport = ({
  shownColumns,
  setShownColumns,
  columnDropdown,
}: ShowInfoAndExportProps) => {
  const themeContext = useContext(ThemeContext);

  const exportDashboard = () => {
    const exportEndpoint = 'export';
    console.log(
      'EXPORT ENDPOINT: ',
      `${process.env.REACT_APP_SERVER_ENDPOINT}/${exportEndpoint}`
    );
  };

  return (
    <Container>
      <CheckboxDropdownButton
        checkboxOptions={columnDropdown}
        checkedList={shownColumns}
        setCheckedList={setShownColumns}
      >
        <OptionButton color={themeContext.colors.primaryPink} width={'170px'}>
          <FontAwesomeIcon icon={icon({ name: 'sliders' })} />
          Show Other Info
        </OptionButton>
      </CheckboxDropdownButton>

      <OptionButton
        onClick={() => exportDashboard()}
        color={themeContext.colors.minor}
        width={'130px'}
      >
        <FontAwesomeIcon icon={icon({ name: 'file-export' })} />
        Export
      </OptionButton>
    </Container>
  );
};

const Container = styled.div`
  grid-area: ShowInfoAndExport;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-end;
`;

interface OptionButtonProps {
  color: string;
  width: string;
}

const OptionButton = styled.button<OptionButtonProps>`
  border: 2px solid ${(props) => props.color};
  border-radius: 7px;
  background-color: #fff;
  color: ${(props) => props.color};
  text-align: left;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width};
  height: 40px;

  &:hover {
    margin-top: 2px;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
  }
`;

export default ShowInfoAndExport;
