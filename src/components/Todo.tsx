import { ChangeEvent, FormEvent, useState } from 'react';

import clipboard from '../assets/clipboard.svg';

import { PlusCircle } from 'phosphor-react';
import styles from './Todo.module.css';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';

export interface TodoProps {
  id: string;
  content: string;
}

  export function Todo() {
  const [toDos, setToDos] = useState<TodoProps[]>([])

  const isToDosEmpty = toDos.length === 0;

  const [newToDoText, setNewToDoText] = useState('')

  const isNewToDoTextEmpty = newToDoText.length === 0;

  const [doneToDos, setDoneToDos] = useState<TodoProps[]>([])

  function handleCreateToDo(event: FormEvent) {
    event.preventDefault()

    setToDos([...toDos, {id: uuidv4(), content: newToDoText}]);

    setNewToDoText('');
  }

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewToDoText(event.target.value);
  }

  function finishToDo(idToDoToFinish: string, toDoToFinishContent: string) {
    if (isToDoInToDoList(doneToDos, idToDoToFinish)) {
      const toDosWithoutFinishedOne = doneToDos.filter(toDo => {
        return (toDo.id !== idToDoToFinish);
      })
  
      setDoneToDos(toDosWithoutFinishedOne);
    } else {
      setDoneToDos([...doneToDos, {id: idToDoToFinish, content: toDoToFinishContent}])
    }
  }

  function isToDoInToDoList(toDoList:TodoProps[], toDoId:string) {
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
    <div className={styles.toDo}>
      
      <form onSubmit={handleCreateToDo} className={styles.toDoForm}>
        <input
          type='text'
          name='toDo'
          placeholder='Adicione uma nova tarefa'
          value={newToDoText}
          onChange={handleNewToDoChange}
          required
        />

        <button type='submit' onSubmit={handleCreateToDo}>
          <strong>Criar</strong>
          <PlusCircle size={16} />
        </button>
      </form>
      

      <div className={styles.taskGrid}>
        <div className={styles.wrapper}>
          <div className={styles.createdTasks}>
            <strong>Tarefas Criadas</strong>
            <span>{toDos.length}</span>
          </div>

          <div className={styles.finishedTasks}>
            <strong>Concluídas</strong>
            <div>
              <strong>
                <span>{doneToDos.length}</span> de <span>{toDos.length}</span>
              </strong>
            </div>
          </div>
        </div>

        {isToDosEmpty ? (
          <div className={styles.noTask}>
            <img src={clipboard} />
            
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>

              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>

          </div>
        ) : (
          <div className={styles.taskList}>
            {toDos.map( toDo => (
              <Task
                key={toDo.id}
                toDo={toDo}
                onDeleteToDo={deleteToDo}
                onFinishToDo={finishToDo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}