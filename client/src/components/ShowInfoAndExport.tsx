import styled from 'styled-components';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { VulnerabilityViewColumn } from 'helpers/enums/dashboard';

import CheckboxDropdownButton from 'components/CheckboxDropdownButton';

const columnOptions = Object.keys(VulnerabilityViewColumn).filter((item) => {
  return isNaN(Number(item));
});

interface ShowInfoAndExportProps {
  shownColumns: VulnerabilityViewColumn[];
  setShownColumns: Function;
}

const ShowInfoAndExport = ({
  shownColumns,
  setShownColumns,
}: ShowInfoAndExportProps) => {
  return (
    <Container>
      <CheckboxDropdownButton
        checkboxOptions={columnOptions}
        checkedList={shownColumns}
        setCheckedList={setShownColumns}
      >
        <ShowOtherInfoButton>
          <FontAwesomeIcon icon={icon({ name: 'sliders' })} />
          Show Other Info
        </ShowOtherInfoButton>
      </CheckboxDropdownButton>

      <ExportButton>
        <FontAwesomeIcon icon={icon({ name: 'file-export' })} />
        Export
      </ExportButton>
    </Container>
  );
};

const Container = styled.div`
  grid-area: ShowInfoAndExport;

  display: flex;
  flex-direction: column;
`;

const ShowOtherInfoButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.primaryPink};
  color: ${(props) => props.theme.colors.primaryPink};
  text-align: left;
  padding: 10px 20px;
`;

const ExportButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.minor};
  color: ${(props) => props.theme.colors.minor};
  text-align: left;
  padding: 10px 20px;
`;

export default ShowInfoAndExport;
