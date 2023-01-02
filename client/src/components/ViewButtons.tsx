import styled from 'styled-components';
import { View } from 'static/enums/dashboard';

interface ViewButtonsProps {
  view: View;
  setView: Function;
}

const ViewButtons = ({ view, setView }: ViewButtonsProps) => {
  return (
    <ViewButtonsDiv>
      <ViewLabel>View</ViewLabel>
      <ViewButton
        view={view}
        option={View.Component}
        onClick={() => setView(View.Component)}
      >
        {View.Component}
      </ViewButton>
      <ViewButton
        view={view}
        option={View.Vulnerability}
        onClick={() => setView(View.Vulnerability)}
      >
        {View.Vulnerability}
      </ViewButton>
    </ViewButtonsDiv>
  );
};

const ViewButtonsDiv = styled.div`
  background-color: red;
  grid-area: ViewToggle;
`;

const ViewLabel = styled.label``;

interface ButtonProps {
  view: View;
  option: View;
}

const ViewButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    (props.view === props.option && 'orange') || 'blue'};
`;

export default ViewButtons;

// import styled from 'styled-components';

// interface ViewButtonsProps {
//   id: string;
//   toggled: boolean;
//   onChange?: Function;
// }

// const ViewButtons = ({ id, toggled, onChange }: ViewButtonsProps) => {
//   return (
//     <ViewButtonsDiv>
//       <SwitchInput
//         className='switch-checkbox'
//         id={id}
//         type='checkbox'
//         checked={toggled}
//         // onChange={onChange}
//       />
//       <SwitchLabel className='switch-label' htmlFor={id}>
//         <SwitchButton className='switch-button' />
//       </SwitchLabel>
//     </ViewButtonsDiv>
//   );
// };

// const ViewButtonsDiv = styled.div`
//   background-color: red;
//   grid-area: ViewToggle;
// `;

// const SwitchInput = styled.input`
//   height: 0;
//   width: 0;
//   visibility: hidden;
// `;

// const SwitchLabel = styled.label`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   cursor: pointer;
//   width: 80px;
//   height: 40px;
//   border-radius: 100px;
//   border: 2px solid gray;
//   position: relative;
//   transition: background-color 0.2s;
// `;

// const SwitchButton = styled.span`
//   content: 'hello';
//   position: absolute;
//   top: 2px;
//   left: 2px;
//   width: 36px;
//   height: 36px;
//   border-radius: 45px;
//   transition: 0.2s;
//   background: grey;
//   box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
//   ${SwitchInput}:checked + ${SwitchLabel} & {
//     left: calc(100% - 2px);
//     transform: translateX(-100%);
//   }

//   ${SwitchLabel}:active & {
//     width: 45px;
//   }
// `;

// export default ViewButtons;
