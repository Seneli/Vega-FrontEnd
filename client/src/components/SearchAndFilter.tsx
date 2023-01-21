import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Risk } from 'helpers/enums/dashboard';

import CheckboxDropdownButton from 'components/CheckboxDropdownButton';

const filterOptions = Object.keys(Risk).filter((item) => {
  return isNaN(Number(item));
});

interface SearchAndFilterProps {
  filterList: Risk[];
  setFilterList: Function;
  searchBy: string;
  setSearchBy: any;
}

const SearchAndFilter = ({
  filterList,
  setFilterList,
  searchBy,
  setSearchBy,
}: SearchAndFilterProps) => {
  return (
    <Container>
      <SearchContainer>
        <FontAwesomeIcon icon={icon({ name: 'search' })} onClick={() => true} />
        <SearchInput
          type='text'
          placeholder='Search..'
          value={searchBy}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setSearchBy(e.target.value);
          }}
        />
      </SearchContainer>

      <CheckboxDropdownButton
        checkboxOptions={filterOptions}
        checkedList={filterList}
        setCheckedList={setFilterList}
      >
        <DropdownButton>
          Filter By
          <FontAwesomeIcon icon={icon({ name: 'angle-down' })} />
        </DropdownButton>
      </CheckboxDropdownButton>
    </Container>
  );
};

const Container = styled.div`
  grid-area: SearchAndFilter;
  display: flex;
  gap: 15px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  border: 2px solid lightgray;
  padding: 0 8px;
  border-radius: 7px;
  height: 35px;
  width: 300px;
`;

const SearchInput = styled.input`
  border: none;
  padding: 10px;
  width: 260px;
  &:focus {
    outline: none;
  }
`;

const DropdownButton = styled.button`
  border: none;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.primaryPink};
  color: white;
  text-align: left;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  width: 120px;
  height: 35px;
  align-items: baseline;

  &:hover {
    margin-top: 2px;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
  }
`;

export default SearchAndFilter;
