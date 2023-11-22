import { Trash } from 'phosphor-react';
import { ToDo } from '../ToDoApp';
import { TaskContainer } from './styles';

interface TaskProps {
  toDo: ToDo;
  onDeleteToDo: (toDoKey: string) => void;
  onFinishToDo: (toDoKey: string) => void;
}

export function Task({ toDo, onDeleteToDo, onFinishToDo }: TaskProps) {

  function handleDeleteToDo() {
    onDeleteToDo(toDo.id);
  }

  function handleFinishToDo() {
    onFinishToDo(toDo.id);
  }

  return (
    <TaskContainer>
      <div>
        <input id={toDo.id} type='checkbox' name={toDo.id} checked={toDo.done}/>
        
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
