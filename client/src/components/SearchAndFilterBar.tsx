import { ChangeEvent, MutableRefObject, useState, useRef } from 'react';
import styled from 'styled-components';
import { Input, Button, Badge } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Risk } from 'static/enums/dashboard';

const filterByOptions = Object.keys(Risk).filter((item) => {
  return isNaN(Number(item));
});

interface SearchAndFilterBarProps {
  checkedList: Risk[];
  setCheckedList: Function;
}

const SearchAndFilterBar = ({
  checkedList,
  setCheckedList,
}: SearchAndFilterBarProps) => {
  const ref: MutableRefObject<HTMLInputElement[]> = useRef([]);

  const [dropdownStatus, setDropdownStatus] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      // push selected value in list
      setCheckedList((prev: string[]) => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setCheckedList((prev: string[]) =>
        prev.filter((x: string) => x !== value)
      );
    }
  };

  const clearAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked = false;
    ref.current.forEach((element) => (element.checked = false));
    setCheckedList([]);
  };

  return (
    <Container>
      <SearchBar
        size='middle'
        placeholder='Search by Package Name...'
        // onSearch={(value) => console.log(value)}
        enterButton={true}
        loading={false}
      />

      <PopupWrapper>
        <Badge count={checkedList.length}>
          <DropdownButton onClick={() => setDropdownStatus(!dropdownStatus)}>
            Filter By
            <FontAwesomeIcon icon={icon({ name: 'angle-down' })} />
          </DropdownButton>
        </Badge>

        <Popup dropdownStatus={dropdownStatus}>
          <CheckboxList>
            {filterByOptions.map((risk, index) => (
              <label key={risk}>
                <input
                  type='checkbox'
                  name='lang'
                  value={risk}
                  onChange={handleChange}
                  ref={(element: HTMLInputElement) => {
                    ref.current[index] = element;
                  }}
                />{' '}
                {risk}
              </label>
            ))}
            <label key={'Clear All'}>
              <input type='checkbox' name='lang' onChange={clearAll} />
              Clear All
            </label>
          </CheckboxList>
        </Popup>
      </PopupWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: blue;
  grid-area: SearchBar;
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled(Input.Search)`
  /* width: 30%; */
`;

const PopupWrapper = styled.div`
  border: 1px solid red;
  padding: 1px;
  position: static;
  display: inline-block;
`;

interface FilterByInterface {
  dropdownStatus: boolean;
}

const Popup = styled.div<FilterByInterface>`
  z-index: 3;
  background-color: white;
  padding: 5px;
  height: auto;
  max-height: 350px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: absolute;
  display: ${(props) => (props.dropdownStatus ? 'inherit' : 'none')};
`;

const CheckboxList = styled.div`
  overflow: auto;
  height: auto;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const DropdownButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primaryPink};
  color: white;
  text-align: left;
  padding: 10px 20px;
`;

export default SearchAndFilterBar;
