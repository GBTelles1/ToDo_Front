import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import clipboard from './assets/clipboard.svg';

import { PlusCircle } from 'phosphor-react';
import { Task } from '../Task';
import { v4 as uuidv4 } from 'uuid';
import { 
  CreatedTasks,
  FinishedTasks,
  NoTaskContainer,
  TaskGridContainer,
  TaskListContainer,
  ToDoContainer,
  ToDoFormContainer
 } from './styles';

export interface ToDoProps {
  id: string;
  content: string;
}

export function ToDo() {
  const [toDos, setToDos] = useState<ToDoProps[]>([])

  const isToDosEmpty = toDos.length === 0;

  const [newToDoText, setNewToDoText] = useState('')

  const isNewToDoTextEmpty = newToDoText.length === 0;

  const [doneToDos, setDoneToDos] = useState<ToDoProps[]>([])

  function handleCreateToDo(event: FormEvent) {
    event.preventDefault()

    setToDos((state) => [...state, {id: uuidv4(), content: newToDoText}]);

    setNewToDoText('');
  }

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewToDoText(event.target.value);
  }

  function handleNewToDoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('You must write something to to do');
  }

  function finishToDo(idToDoToFinish: string, toDoToFinishContent: string) {
    if (isToDoInToDoList(doneToDos, idToDoToFinish)) {
      const toDosWithoutFinishedOne = doneToDos.filter(toDo => {
        return (toDo.id !== idToDoToFinish);
      })
  
      setDoneToDos(toDosWithoutFinishedOne);
    } else {
      setDoneToDos((state) => (
        [...state, {id: idToDoToFinish, content: toDoToFinishContent}]
      ))
    }
  }

  function isToDoInToDoList(toDoList:ToDoProps[], toDoId:string) {
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
    const toDosWithoutDeletedOne = toDos.filter(toDo => {
      return toDo.id !== idDoneToDoToDelete;
    })

    setToDos(toDosWithoutDeletedOne);

    if (isToDoInToDoList(doneToDos, idDoneToDoToDelete)) {
      const doneToDosWithoutDeletedOne = doneToDos.filter(toDo => {
        return toDo.id !== idDoneToDoToDelete;
      })
  
      setDoneToDos(doneToDosWithoutDeletedOne);
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
            <div>{toDos.length}</div>
          </CreatedTasks>

          <FinishedTasks>
            <strong>Concluídas</strong>
            <div>
              <strong>
                <span>{doneToDos.length}</span> de <span>{toDos.length}</span>
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
            {toDos.map( toDo => (
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