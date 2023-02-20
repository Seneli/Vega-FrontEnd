import React, { ChangeEvent, MutableRefObject, useRef } from 'react';
import styled from 'styled-components';

import { enumToString } from 'helpers/enums/enumToString';

interface CheckboxListProps {
  checkboxOptions: string[];
  checkedList: any;
  setCheckedList: Function;
}

const CheckboxList = ({
  checkboxOptions,
  checkedList,
  setCheckedList,
}: CheckboxListProps) => {
  const ref: MutableRefObject<HTMLInputElement[]> = useRef([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      // push selected value in list if it isn't already in list
      if (!checkedList.includes(value))
        setCheckedList((prev: string[]) => [...prev, value]);
    } else {
      // remove unchecked value from the list if it is already in list
      setCheckedList((prev: string[]) =>
        prev.filter((x: string) => x !== value)
      );
    }
  };

  const selectAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked = false;
    ref.current.forEach((element) => (element.checked = true));
    setCheckedList([]);
  };

  const clearAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked = false;
    ref.current.forEach((element) => (element.checked = false));
    setCheckedList([]);
  };

  return (
    <Container>
      {checkboxOptions.map((item: any, index: number) => (
        <label key={item}>
          <input
            type='checkbox'
            name='lang'
            value={item}
            defaultChecked={true}
            onChange={handleChange}
            ref={(element: HTMLInputElement) => {
              ref.current[index] = element;
            }}
          />{' '}
          {enumToString(item)}
        </label>
      ))}
      {/* <label key={'Clear All'}>
        <input type='checkbox' name='lang' onChange={clearAll} />
        Clear All
      </label> */}
    </Container>
  );
};

const Container = styled.div`
  overflow: auto;
  height: auto;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CheckboxList;
