import styled from "styled-components";
import uncheckedBox from './assets/checkbox_unchecked.png';
import checkedBox from './assets/checkbox_checked.png';

export const TaskContainer = styled.div`
  background: ${(props) => props.theme["gray-500"]};
  width: 100%;
  height: 4.5rem;
  border: 1px solid ${(props) => props.theme["gray-500"]};
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    label {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-100"]};
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      
      gap: 0.75rem;
    }

    input {
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      :not(:checked) + label::before {
        content: url(${uncheckedBox})
      }

      :checked + label {
        text-decoration: line-through;
      }

      :checked + label::before {
        content: url(${checkedBox});
      }
    }
  }

  button {
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme["gray-300"]};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    :hover {
      background: ${(props) => props.theme["gray-400"]};
      color: ${(props) => props.theme["red-500"]};
    }
  }
`