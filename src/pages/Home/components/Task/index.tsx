import { Trash } from 'phosphor-react';
import { ToDoProps } from '../ToDo';
import { TaskContainer } from './styles';

interface TaskProps {
  toDo: ToDoProps;
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
    <TaskContainer>
      <div>
        <input id={toDo.id} type='checkbox' name='taskCheck'/>
        
        <label onClick={handleFinishToDo} htmlFor={toDo.id}>
          {toDo.content}
        </label>
      </div>

      <button onClick={handleDeleteToDo} title='Delete task'>
        <Trash size={16} />
      </button>
    </TaskContainer>
  )
}