import { useState } from 'react';
// import { PaginationData, User } from './types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import {
  View,
  ComponentViewColumn,
  ComponentViewColumnStrings,
  VulnerabilityViewColumn,
  VulnerabilityViewColumnStrings,
} from 'helpers/enums/dashboard';
import { usePagination } from 'helpers/hooks/usePagination';

import PaginationController from './PaginationController';

interface PaginatedTableProps {
  view: View;
  setSortBy: Function;
  shownColumns: string[]; //VulnerabilityViewColumn[] | ComponentViewColumn[];
  currentPage: number;
  setCurrentPage: Function;
  data: any;
}

const PaginatedTable = ({
  view,
  setSortBy,
  shownColumns,
  currentPage,
  setCurrentPage,
  data,
}: PaginatedTableProps) => {
  const pageSize: number = 25;
  const siblingCount: number = 1;
  const totalCount: number = 500;

  const paginationRange: number[] = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  return (
    <Container>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              {shownColumns.map((column: string, index: number) => {
                return (
                  <th key={index}>
                    <HeaderContainer>
                      {column}
                      <HeaderIconsWrap>
                        <FontAwesomeIcon // SHOW INFO
                          onClick={() => null /*show popup*/}
                          icon={icon({ name: 'circle-info' })}
                        />
                        <FontAwesomeIcon // FILTER BY
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
                  {shownColumns.map((column, index: number) => {
                    return <td key={index}>{rowData[column]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
      <PaginationController
        paginationRange={paginationRange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

const Container = styled.div`
  grid-area: PaginatedTable;
  padding-top: 30px;
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
  width: 100%;
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
