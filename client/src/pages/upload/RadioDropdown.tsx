import { MouseEvent, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface RadioDropdownProps {
  prompt: string;
  options: string[];
  state: string | undefined;
  setState: Function;
  currentStep: number;
  setCurrentStep: Function;
  resetVariable?: Function;
}

const RadioDropdown = ({
  currentStep,
  setCurrentStep,
  prompt,
  options,
  setState,
  resetVariable,
}: RadioDropdownProps) => {
  const [dropdownStatus, setDropdownStatus] = useState<boolean>(false);
  const [buttonContent, setButtonContent] = useState<string>(prompt);

  const selectOption = (
    e: MouseEvent<HTMLDivElement>,
    selectedOption: string
  ) => {
    setDropdownStatus(false);
    setButtonContent(selectedOption);
    setState(selectedOption);
    if (resetVariable) resetVariable();
    setTimeout(setCurrentStep(currentStep + 1), 4000);
  };

  return (
    <Container>
      <PopupWrapper>
        <DropdownButton onClick={() => setDropdownStatus(!dropdownStatus)}>
          {buttonContent}
        </DropdownButton>

        <Popup dropdownStatus={dropdownStatus}>
          <DropdownContainer>
            {options.map((item: any, index: number) => (
              <DropdownOption key={item} onClick={(e) => selectOption(e, item)}>
                {item}
              </DropdownOption>
            ))}
          </DropdownContainer>
        </Popup>
      </PopupWrapper>
    </Container>
  );
};

const textTransition = keyframes`
  0%{ opacity: 0 }
  100% {opacity: 1}
`;

const Container = styled.div`
  display: flex;
  direction: column;
`;

const PopupWrapper = styled.div`
  padding: 1px;
  position: static;
  display: inline-block;
`;

const DropdownButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.backgroundGrey};
  border-radius: 7px;
  background-color: #fff;
  color: ${(props) => props.color};
  text-align: left;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  width: 200px;
  &:hover {
    margin-top: 2px;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.backgroundGrey};
  }
  &::content {
    animation-name: ${textTransition};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;

interface FilterByInterface {
  dropdownStatus: boolean;
}

const Popup = styled.div<FilterByInterface>`
  z-index: 3;
  background-color: white;
  padding: 5px 20px 10px 10px;
  height: auto;
  max-height: 350px;
  min-width: 170px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px #00000062;
  position: absolute;
  display: ${(props) => (props.dropdownStatus ? 'inherit' : 'none')};
`;

const DropdownContainer = styled.div`
  overflow: auto;
  height: auto;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DropdownOption = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.backgroundGrey};
  &:hover {
    cursor: pointer;
  }
`;

export default RadioDropdown;
