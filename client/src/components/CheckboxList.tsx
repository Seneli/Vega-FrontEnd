import { ChangeEvent, MutableRefObject, useRef } from 'react';
import styled from 'styled-components';

interface CheckboxListProps {
  checkboxOptions: string[];
  setCheckedList: Function;
}

const CheckboxList = ({
  checkboxOptions,
  setCheckedList,
}: CheckboxListProps) => {
  const ref: MutableRefObject<HTMLInputElement[]> = useRef([]);

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
      {checkboxOptions.map((risk, index) => (
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
