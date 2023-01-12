import { ChangeEvent, FormEvent, useState } from 'react';

import clipboard from '../assets/clipboard.svg';

import { PlusCircle } from 'phosphor-react';
import styles from './Todo.module.css';
import { Task } from './Task';

export function Todo() {
  const [toDos, setToDos] = useState<string[]>([])

  const isToDosEmpty = toDos.length === 0;

  const [newToDoText, setNewToDoText] = useState('')

  const isNewToDoTextEmpty = newToDoText.length === 0;

  const [doneToDos, setdoneToDos] = useState<string[]>([]) //conferir como foi feito com o onDeleteComment no Post

  function handleCreateToDo(event: FormEvent) {
    event.preventDefault()

    setToDos([...toDos, newToDoText]);

    setNewToDoText('');
  }

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewToDoText(event.target.value);
  }

  function deleteToDo(toDoToDelete: string) {
    const toDosWithoutDeletedOne = toDos.filter(toDo => {
      return toDo !== toDoToDelete;
    })

    setToDos(toDosWithoutDeletedOne);
  }

  return(
    <div className={styles.toDo}>
      <div>
        <form onSubmit={handleCreateToDo} className={styles.toDoForm}>
          <input
            type='text'
            name='toDo'
            placeholder='Adicione uma nova tarefa'
            value={newToDoText}
            onChange={handleNewToDoChange}
            required
          />

          <button type='submit' onSubmit={handleCreateToDo} disabled={isNewToDoTextEmpty}>
            <strong>Criar</strong>
            <PlusCircle size={16} />
          </button>
        </form>
      </div>

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
                key={toDo}
                content={toDo}
                onDeleteToDo={deleteToDo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}