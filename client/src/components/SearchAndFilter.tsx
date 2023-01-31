import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Severity } from 'helpers/enums/dashboard';

import CheckboxDropdownButton from 'components/CheckboxDropdownButton';

const filterOptions = Object.keys(Severity).filter((item) => {
  return isNaN(Number(item));
});

interface SearchAndFilterProps {
  riskFilters: string[];
  setRiskFilters: Function;
  impactFilters: string[];
  setImpactFilters: Function;
  searchBy: string;
  setSearchBy: any;
}

const SearchAndFilter = ({
  impactFilters,
  setImpactFilters,
  riskFilters,
  setRiskFilters,
  searchBy,
  setSearchBy,
}: SearchAndFilterProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Container>
      {/* <SearchContainer>
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
      </SearchContainer> */}

      <CheckboxDropdownButton
        checkboxOptions={filterOptions}
        checkedList={riskFilters}
        setCheckedList={setRiskFilters}
      >
        <DropdownButton color={themeContext.colors.primaryPink}>
          Filter By Risk
          <FontAwesomeIcon icon={icon({ name: 'angle-down' })} />
        </DropdownButton>
      </CheckboxDropdownButton>

      <CheckboxDropdownButton
        checkboxOptions={filterOptions}
        checkedList={impactFilters}
        setCheckedList={setImpactFilters}
      >
        <DropdownButton color={themeContext.colors.minor}>
          Filter By Impact
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

interface DropdownButtonProps {
  color: string;
}

const DropdownButton = styled.button<DropdownButtonProps>`
  border: none;
  border-radius: 7px;
  background-color: ${(props) => props.color};
  color: white;
  text-align: left;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  width: 200px;
  height: 35px;
  align-items: baseline;

  &:hover {
    margin-top: 2px;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
  }
`;

export default SearchAndFilter;
