import styled from 'styled-components';
import { Input, Button } from 'antd';
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
}

const SearchAndFilter = ({
  filterList,
  setFilterList,
}: SearchAndFilterProps) => {
  return (
    <Container>
      <SearchBar
        size='middle'
        placeholder='Search by Package Name...'
        // onSearch={(value) => console.log(value)}
        enterButton={true}
        loading={false}
      />

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
`;

const SearchBar = styled(Input.Search)`
  width: 50%;
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
  height: 40px;
  align-items: baseline;

  &:hover {
    margin-top: 2px;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
  }
`;

export default SearchAndFilter;
