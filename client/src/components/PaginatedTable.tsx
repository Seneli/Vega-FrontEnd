import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import VulnerabilityViewRow from 'components/rows/VulnerabilityViewRow';
import ComponentViewRow from 'components/rows/ComponentViewRow';
import { View } from 'helpers/enums/enums';
import { usePagination } from 'helpers/hooks/usePagination';
import { enumToString } from 'helpers/enums/enumToString';

import PaginationController from './PaginationController';

interface PaginatedTableProps {
  view: View;
  setSortBy: Function;
  shownColumns: string[];
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
  const totalCount: number = data.length;

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
                      {enumToString(column)}
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
            {view === View.Vulnerability
              ? data.map((rowData: any, index: number) => {
                  return (
                    <VulnerabilityViewRow
                      rowData={rowData}
                      rowIndex={index}
                      shownColumns={shownColumns}
                    />
                  );
                })
              : data.map((rowData: any, index: number) => {
                  return (
                    <ComponentViewRow
                      rowData={rowData}
                      rowIndex={index}
                      shownColumns={shownColumns}
                    />
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
  min-height: 500px;
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
`;

export default PaginatedTable;
