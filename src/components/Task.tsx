import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

interface TaskProps {
  content: string;
  onDeleteToDo: (toDo: string) => void;
}

export function Task({ content, onDeleteToDo }: TaskProps) {

  function handleDeleteTask() {
    onDeleteToDo(content);
  }

  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <input id={content} type='checkbox' name='taskCheck'/>
        
        <label htmlFor={content} className={styles.taskContent}>
          {content}
        </label>
      </div>

      <button onClick={handleDeleteTask} title='Delete task'>
        <Trash size={16} />
      </button>
    </div>
  )
}