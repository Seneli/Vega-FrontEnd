import { useState } from 'react';
import styled from 'styled-components';

interface ComponentViewRowProps {
  rowData: any;
  rowIndex: number;
  shownColumns: string[]; //VulnerabilityViewColumn[] | ComponentViewColumn[];
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
      <tr >
        <td colSpan={shownColumns.length}>
          {dropdownStatus && (
            <DropdownTable selected={dropdownStatus}>
              <thead>
                <tr>
                  {shownColumns.map((column: string, index: number) => {
                    return <th key={index}>{column}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {shownColumns.map((data: string, index: number) => {
                  return <td key={index}>{data}</td>;
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

const DropdownTable = styled.div<DropdownProps>`
  background-color: white;
  padding: 5px 20px 10px 10px;
  height: auto;
  max-height: 350px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px #00000062;
  /* display: ${(props) => (props.selected ? 'block' : 'none')}; */
`;

export default ComponentViewRow;
