import { Trash } from 'phosphor-react';
import styles from './Task.module.css'
import { TodoProps } from './Todo';

interface TaskProps {
  toDo: TodoProps;
  onDeleteToDo: (toDoKey: string) => void;
  onFinishToDo: (toDoKey: string, content: string) => void;
}

export function Task({ toDo, onDeleteToDo, onFinishToDo }: TaskProps) {

  function handleDeleteToDo() {
    onDeleteToDo(toDo.id);
  }

  function handleFinishToDo() {
    onFinishToDo(toDo.id, toDo.content);
  }

  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <input id={toDo.id} type='checkbox' name='taskCheck'/>
        
        <label onClick={handleFinishToDo} htmlFor={toDo.id} className={styles.taskContent}>
          {toDo.content}
        </label>
      </div>

      <button onClick={handleDeleteToDo} title='Delete task'>
        <Trash size={16} />
      </button>
    </div>
  )
}