import { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

interface PaginationControllerProps {
  paginationRange: number[];
  currentPage: number;
  setCurrentPage: Function;
}

const PaginationController = ({
  paginationRange,
  currentPage,
  setCurrentPage,
}: PaginationControllerProps) => {
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const firstPage: number = paginationRange[0];
  const leftArrowActive: boolean = currentPage !== firstPage;
  const lastPage: number = paginationRange[paginationRange.length - 1];
  const rightArrowActive: boolean = currentPage !== lastPage;

  return (
    <PaginationContainer>
      <PaginationDiv
        onClick={() => {
          if (leftArrowActive) setCurrentPage(currentPage - 1);
        }}
      >
        <FontAwesomeIcon icon={icon({ name: 'chevron-left' })} />
      </PaginationDiv>
      {paginationRange?.map((paginationIndex: any, index: number) => {
        return (
          <PaginationDiv
            onClick={() => {
              if (paginationIndex > -1) {
                //IF ITS NOT THE "..." DIV
                setCurrentPage(paginationIndex);
              }
            }}
            key={index}
            currentPage={paginationIndex === currentPage ? true : false}
          >
            {paginationIndex < 0 ? '...' : paginationIndex}
          </PaginationDiv>
        );
      })}
      <PaginationDiv
        onClick={() => {
          if (rightArrowActive) setCurrentPage(currentPage + 1);
        }}
      >
        <FontAwesomeIcon icon={icon({ name: 'chevron-right' })} />
      </PaginationDiv>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

interface PaginationDivInterface {
  currentPage?: boolean;
}

const PaginationDiv = styled.div<PaginationDivInterface>`
  padding: 10px 15px;
  border-radius: 100px;
  border: ${(props) => (props.currentPage ? 'black solid 1px' : 'none')};
  background-color: ${(props) => props.theme.colors.backgroundGrey};
  &:hover {
    margin-top: 2px;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
  }
`;

export default PaginationController;
