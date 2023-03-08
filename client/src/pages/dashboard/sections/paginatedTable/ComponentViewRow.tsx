import React, { useState } from 'react';
import styled from 'styled-components';

import { vulnerabilityColumnList } from 'helpers/constants/enumLists';
import enumToString from 'helpers/functions/enumToString';
import DropdownVulnerabilityViewRow from './DropdownVulnerabilityViewRow';

interface ComponentViewRowProps {
  rowData: any;
  rowIndex: number;
  shownColumns: string[];
}

const ComponentViewRow = ({
  rowData,
  rowIndex,
  shownColumns,
}: ComponentViewRowProps) => {
  const [dropdownStatus, setDropdownStatus] = useState<boolean>(false);
  return (
    <>
      <Row even={0 === rowIndex % 2} key={rowIndex}>
        {shownColumns.map((column, index: number) => {
          return (
            <td key={index}>
              {index === 0 && (
                <PlusButton
                  selected={dropdownStatus}
                  onClick={() => {
                    setDropdownStatus(!dropdownStatus);
                  }}
                >
                  +
                </PlusButton>
              )}
              {rowData[column]}
            </td>
          );
        })}
      </Row>
      <tr>
        <td colSpan={shownColumns.length}>
          {dropdownStatus && (
            <DropdownTable selected={dropdownStatus}>
              <thead>
                <tr>
                  {vulnerabilityColumnList.map(
                    (column: string, index: number) => {
                      return <th key={index}>{enumToString(column)}</th>;
                    }
                  )}
                </tr>
              </thead>
              <tbody>
                {rowData.Vulnerabilities.map((vuln: any, index: number) => {
                  return (
                    <DropdownVulnerabilityViewRow
                      rowData={vuln}
                      rowIndex={index}
                      shownColumns={vulnerabilityColumnList}
                    />
                  );
                })}
              </tbody>
            </DropdownTable>
          )}
        </td>
      </tr>
    </>
  );
};

interface RowProps {
  even: boolean;
}

const Row = styled.tr<RowProps>`
  background-color: ${(props) => (props.even ? '#ced0dc' : '#eae7e7')};
`;

interface DropdownProps {
  selected: boolean;
}

const PlusButton = styled.button<DropdownProps>`
  float: left;
  border: none;
  border-radius: 100px;
  color: white;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primaryPink : 'black'};
  transform: 1s ease-in-out;
  &:hover {
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
    background-color: ${(props) => props.theme.colors.backgroundGrey};
  }
`;

const DropdownTable = styled.table<DropdownProps>`
  border-top: 10px solid ${(props) => props.theme.colors.primaryPink};
  border-bottom: 10px solid ${(props) => props.theme.colors.primaryPink};
  width: 90%;
  margin-left: 10%;
  background-color: white;
  padding: 10px 0;
  height: auto;
  max-height: 350px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px #00000062;

  & th {
    color: ${(props) => props.theme.colors.minor};
    position: sticky;
    min-width: 90px;
  }
  tr {
    width: 100%;
  }
  th + th,
  td + td {
    border-left: 2px dotted ${(props) => props.theme.colors.backgroundGrey};
  }
`;

export default ComponentViewRow;
