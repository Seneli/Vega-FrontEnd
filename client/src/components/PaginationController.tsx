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
  // Do not render component if only one page
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const firstPage: number = paginationRange[0];
  const leftArrowActive: boolean = currentPage !== firstPage;
  const lastPage: number = paginationRange[paginationRange.length - 1];
  const rightArrowActive: boolean = currentPage !== lastPage;
  const ELIPSIS_DIV = -1;

  return (
    <PaginationContainer>
      <PaginationDiv
        clickable={currentPage > 1}
        onClick={() => {
          if (leftArrowActive && currentPage > 1)
            setCurrentPage(currentPage - 1);
        }}
      >
        <FontAwesomeIcon icon={icon({ name: 'chevron-left' })} />
      </PaginationDiv>
      {paginationRange?.map((paginationIndex: any, index: number) => {
        return (
          <PaginationDiv
            clickable={paginationIndex < 0 ? false : true}
            onClick={() => {
              if (paginationIndex > ELIPSIS_DIV) {
                // All pagination values are greater than -1
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
        clickable={currentPage < paginationRange[paginationRange.length - 1]}
        onClick={() => {
          if (
            rightArrowActive &&
            currentPage < paginationRange[paginationRange.length - 1]
          )
            setCurrentPage(currentPage + 1);
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
  clickable?: boolean;
}

const PaginationDiv = styled.div<PaginationDivInterface>`
  opacity: ${(props) => (props.clickable ? '1' : '0.4')};
  padding: 10px 15px;
  border-radius: 100px;
  border: ${(props) => (props.currentPage ? 'black solid 1px' : 'none')};
  background-color: ${(props) => props.theme.colors.backgroundGrey};
  &:hover {
    margin-top: ${(props) => (props.clickable ? '1px' : '2px')};
    box-shadow: ${(props) =>
      props.clickable
        ? 'none'
        : `0 0 3px 1px ${props.theme.colors.backgroundGrey}`};
  }
`;

export default PaginationController;
