import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

interface TaskProps {
  content: string;
  onDeleteToDo: (toDo: string) => void;
  onFinishToDo: (toDo: string) => void;
}

export function Task({ content, onDeleteToDo, onFinishToDo }: TaskProps) {

  function handleDeleteToDo() {
    onDeleteToDo(content);
  }

  function handleFinishToDo() {
    onFinishToDo(content);
  }

  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <input id={content} type='checkbox' name='taskCheck'/>
        
        <label onClick={handleFinishToDo} htmlFor={content} className={styles.taskContent}>
          {content}
        </label>
      </div>

      <button onClick={handleDeleteToDo} title='Delete task'>
        <Trash size={16} />
      </button>
    </div>
  )
}