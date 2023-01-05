import React, { useEffect, useState } from 'react';
// import { PaginationData, User } from './types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import {
  ComponentViewColumn,
  VulnerabilityViewColumn,
} from 'helpers/enums/dashboard';

interface PaginatedTableProps {
  sortBy: VulnerabilityViewColumn;
  setSortBy: Function;
  shownColumns: VulnerabilityViewColumn[] | ComponentViewColumn[];
  data: any; // TODO: STORE THIS IN A FRONT END CACHE OR SOMETHING? IDK - BASICALLY MOVE IT OUT LATER!
}

const PaginatedTable = ({
  sortBy,
  setSortBy,
  shownColumns,
  data,
}: PaginatedTableProps) => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // const getData = async () => {
    //   const tableData = (await import('./getTableData')).default<User>({
    //     limit,
    //     offset,
    //   });
    //   setData(tableData);
    // };
    // getData();
  }, [limit, offset]);

  return (
    <Container>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              {shownColumns.map((column) => {
                return (
                  <th>
                    <HeaderContainer>
                      {column}
                      <HeaderIconsWrap>
                        <FontAwesomeIcon
                          onClick={() => null /*show popup*/}
                          icon={icon({ name: 'circle-info' })}
                        />
                        <FontAwesomeIcon
                          onClick={() => setSortBy(column)}
                          icon={icon({ name: 'arrow-down-a-z' })}
                        />
                      </HeaderIconsWrap>
                    </HeaderContainer>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData: any, index: number) => {
              return (
                <tr key={index}>
                  {shownColumns.map((column) => {
                    return <td>{rowData[column]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  grid-area: PaginatedTable;
`;

const TableContainer = styled.div`
  height: 500px;
  overflow: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
`;

const HeaderIconsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  /* width: 500px; */
  border-collapse: collapse;
  position: relative;
  & th {
    background: #fff;
    color: ${(props) => props.theme.colors.insignificant};
    position: sticky;
    min-width: 90px;
  }
  & th,
  & td {
    text-align: center;
    padding: 0.3rem;
    font-size: 0.7rem;
  }
  & tbody tr:nth-child(even) {
    & td {
      background: #fff;
    }
  }
  & tbody tr:nth-child(odd) {
    & td {
      background: #ced0dc;
    }
  }
`;

export default PaginatedTable;
