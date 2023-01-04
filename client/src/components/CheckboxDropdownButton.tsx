import { useState } from 'react';
import styled from 'styled-components';
import { Badge } from 'antd';
import { Column, Risk } from 'static/enums/dashboard';

import CheckboxList from 'components/CheckboxList';

interface CheckboxDropdownButtonProps {
  checkboxOptions: string[];
  checkedList: Risk[] | Column[];
  setCheckedList: Function;
  children: JSX.Element;
}

const CheckboxDropdownButton = ({
  checkboxOptions,
  checkedList,
  setCheckedList,
  children,
}: CheckboxDropdownButtonProps) => {
  const [dropdownStatus, setDropdownStatus] = useState<boolean>(false);

  return (
    <PopupWrapper>
      <Badge count={checkedList.length}>
        <div onClick={() => setDropdownStatus(!dropdownStatus)}>{children}</div>
      </Badge>

      <Popup dropdownStatus={dropdownStatus}>
        <CheckboxList
          checkboxOptions={checkboxOptions}
          setCheckedList={setCheckedList}
        />
      </Popup>
    </PopupWrapper>
  );
};

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

export default CheckboxDropdownButton;
