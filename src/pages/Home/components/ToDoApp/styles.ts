import styled from "styled-components";

export const ToDoContainer = styled.div`
  width: 46rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 746px) {
    width: 100vw;
    padding: 0 0.5rem;
  }
`
// .toDo {
//   width: 46rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4rem;
// }

// @media screen and (max-width: 746px) {
//   .toDo {
//     width: 100vw;
//     padding: 0 0.5rem;
//   }
// }


export const ToDoFormContainer = styled.form`
  height: 54px;
  width: 100%;
  margin-top: -27px;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  input {
    background: ${(props) => props.theme["gray-500"]};
    height: 100%;
    width: 39.875rem;
    border: 1px solid ${(props) => props.theme["gray-500"]};
    border-radius: 8px;
    padding: 1rem;
  }

  button {
    background: ${(props) => props.theme["blue-500"]};
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-100"]};
    border: 1px solid ${(props) => props.theme["blue-500"]};
    border-radius: 8px;
    height: 100%;
    width: 5.625rem;
    padding: 1rem;
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    transition: color 0.1s;

    :hover {
      background: ${(props) => props.theme["blue-300"]};
      cursor: pointer;
    }
  }
`
// .toDoForm {
//   height: 54px;
//   width: 100%;
//   margin-top: -27px;
//   display: flex;
//   flex-direction: row;
//   gap: 0.5rem;
// }

// .toDoForm input {
//   background: var(--gray-500);
//   height: 100%;
//   width: 39.875rem;
//   border: 1px solid var(--gray-500);
//   border-radius: 8px;
//   padding: 1rem;
// }

// .toDoForm button {
//   background: var(--blue-500);
//   font-size: 0.875rem;
//   color: var(--gray-100);
//   border: 1px solid var(--blue-500);
//   border-radius: 8px;
//   height: 100%;
//   width: 5.625rem;
//   padding: 1rem;
//   font-weight: bold;
//   text-decoration: none;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.4rem;

//   transition: color 0.1s;
// }

// .toDoForm button:hover {
//   background: var(--blue-300);
//   cursor: pointer;
// }


export const TaskGridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
// .taskGrid {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1.5rem;
// }

// .wrapper {
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
// }

const BaseTaskHeaderItem = styled.div`
  width: auto;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  div {
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-200"]};
    font-size: 0.75rem;
    font-weight: bold;
    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
  }
`

export const CreatedTasks = styled(BaseTaskHeaderItem)`
  color: ${(props) => props.theme["blue-300"]};
`

export const FinishedTasks = styled(BaseTaskHeaderItem)`
  color: ${(props) => props.theme["purple-300"]};

  div {
    display: flex;
    justify-content: space-evenly;
  }
`

// .createdTasks {
//   width: auto;
//   color: var(--blue-300);
//   font-size: 0.875rem;
//   display: flex;
//   justify-content: space-between;
//   gap: 0.5rem;
// }
// .finishedTasks {
//   width: auto;
//   color: var(--purple-300);
//   font-size: 0.875rem;
//   display: flex;
//   justify-content: space-between;
//   gap: 0.5rem;
// }

// .createdTasks span{
//   background: var(--gray-400);
//   color: var(--gray-200);
//   font-size: 0.75rem;
//   font-weight: bold;
//   border: 1px solid var(--gray-400);
//   border-radius: 50%;
//   padding: 0.125rem 0.5rem;
// }
// .finishedTasks div{
//   background: var(--gray-400);
//   color: var(--gray-200);
//   font-size: 0.75rem;
//   font-weight: bold;
//   border: 1px solid var(--gray-400);
//   border-radius: 999px;
//   padding: 0.125rem 0.5rem;

//   display: flex;
//   justify-content: space-evenly;
// }

export const NoTaskContainer = styled.div`
  width: 100%;
  height: 15.25rem;
  border-top: 1px solid var(--gray-400);
  border-radius: 8px;
  padding: 4rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
// .noTask {
//   width: 100%;
//   height: 15.25rem;
//   border-top: 1px solid var(--gray-400);
//   border-radius: 8px;
//   padding: 4rem 1.5rem;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
// }

// .noTask div {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

export const TaskListContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
// .taskList {
//   width: 100%;
//   margin-bottom: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 0.75rem;
// }