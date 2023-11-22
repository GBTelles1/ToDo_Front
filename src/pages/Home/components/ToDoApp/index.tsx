import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react';

import clipboard from './assets/clipboard.svg';

import { PlusCircle } from 'phosphor-react';
import { Task } from '../Task';
import { 
  CreatedTasks,
  FinishedTasks,
  NoTaskContainer,
  TaskGridContainer,
  TaskListContainer,
  ToDoContainer,
  ToDoFormContainer
 } from './styles';

export interface ToDo {
  id: string;
  content: string;
  done: boolean;
}

export function ToDoApp() {
  const [toDosList, setToDosList] = useState<ToDo[]>(() => {
    const localToDos = localStorage.getItem('@to-do:toDosList-state-0.0.0.0')

    if (localToDos) {
      return JSON.parse(localToDos)
    }

    return []
  })

  const isToDosEmpty = toDosList.length === 0;

  const [newToDoText, setNewToDoText] = useState('')

  const isNewToDoTextEmpty = newToDoText.length === 0;

  const doneToDos = toDosList.filter((toDo) => {
    return toDo.done === true;
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(toDosList)

    localStorage.setItem('@to-do:toDosList-state-0.0.0.0', stateJSON)
  }, [toDosList])

  function handleCreateToDo(event: FormEvent) {
    event.preventDefault()

    setToDosList((state) => [...state, {
      id: crypto.randomUUID(),
      content: newToDoText,
      done: false
    }]);

    setNewToDoText('');
  }

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewToDoText(event.target.value);
  }

  function handleNewToDoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('You must write something to to do');
  }

  function finishToDo(idToDoToFinish: string) {
    const currentToDoIsFinished = toDosList.find((toDo) => toDo.id === idToDoToFinish)?.done

    setToDosList((state) => 
      state.map((toDo) => {
        if (toDo.id === idToDoToFinish) {
          return {...toDo, done: !currentToDoIsFinished}
        }

        return {...toDo}
      }),
    )
  }

  function isToDoInToDoList(toDoList:ToDo[], toDoId:string) {
    const toDoToDeleteList = toDoList.filter( toDo => {
      return toDo.id === toDoId;
    })

    if (toDoToDeleteList.length > 0) {
      return true;
    } else if (toDoToDeleteList.length === 0) {
      return false;
    }
  }

  function deleteToDo(idDoneToDoToDelete: string) {
    
    if (isToDoInToDoList(toDosList, idDoneToDoToDelete)) {
      const toDosWithoutDeletedOne = toDosList.filter(toDo => {
        return toDo.id !== idDoneToDoToDelete;
      })

      setToDosList(toDosWithoutDeletedOne);
    }
  }

  return(
    <ToDoContainer>
      
      <ToDoFormContainer onSubmit={handleCreateToDo}>
        <input
          type='text'
          name='toDo'
          placeholder='Adicione uma nova tarefa'
          value={newToDoText}
          onChange={handleNewToDoChange}
          onInvalid={handleNewToDoInvalid}
          required
        />

        <button
          type='submit'
          onSubmit={handleCreateToDo}
          disabled={isNewToDoTextEmpty}
        >
          <strong>Criar</strong>
          <PlusCircle size={16} />
        </button>
      </ToDoFormContainer>
      

      <TaskGridContainer>
        <header>
          <CreatedTasks>
            <strong>Tarefas Criadas</strong>
            <div>{toDosList.length}</div>
          </CreatedTasks>

          <FinishedTasks>
            <strong>Concluídas</strong>
            <div>
              <strong>
                <span>{doneToDos.length}</span> de <span>{toDosList.length}</span>
              </strong>
            </div>
          </FinishedTasks>
        </header>

        {isToDosEmpty ? (
          <NoTaskContainer>
            <img src={clipboard} />
            
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>

              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>

          </NoTaskContainer>
        ) : (
          <TaskListContainer>
            {toDosList.map((toDo) => (
              <Task
                key={toDo.id}
                toDo={toDo}
                onDeleteToDo={deleteToDo}
                onFinishToDo={finishToDo}
              />
            ))}
          </TaskListContainer>
        )}
      </TaskGridContainer>
    </ToDoContainer>
  )
}
