import React, { useRef} from 'react'
import { AddToDoContainer, TaskListContainer, ToDoContainer, ToDoForm, ToDoTitle } from './ToDoStyles'
import Logo from '../../../public/img/logo.png'
import InputContainer from '../UI/Input/InputContainer'
import Button from '../UI/Button/Button'

const ToDo = () => {

  let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const inputRef = useRef();
  const listRef = useRef();

  const saveToLocalStorage = taskList => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  const addTask = (e) => {
    e.preventDefault();

    let task = {name: inputRef.current.value.trim()};
    if(task.name.length === 0) return
    inputRef.current.value = '';
    taskList.push(task);
    renderTask();
    saveToLocalStorage(taskList);
  }

  const renderTask = () => {
    return(
      listRef.current.innerHTML = taskList.map(task => `<li>${task.name}</li>`).join('')
    )
  }

  const deleteAllTasks = () => {
    taskList = [];
    renderTask();
    saveToLocalStorage(taskList);
  };

  return (
    <ToDoContainer>
        <ToDoTitle>
            ToDo List<img src={Logo} alt="logo" />
        </ToDoTitle>
        <ToDoForm onSubmit={addTask}>
            <AddToDoContainer>
              <InputContainer>
              <input type="text" ref={inputRef}/>
              </InputContainer>
              <Button>
                <button>Agregar</button>
              </Button>
            </AddToDoContainer>
            <TaskListContainer ref={listRef}>
             {taskList.map(task => (<li key={task.name}>{task.name}</li>))}
            </TaskListContainer>
        </ToDoForm>
            <Button>
              <button onClick={deleteAllTasks}>Borrar Lista</button>
            </Button>
    </ToDoContainer>
  )
}

export default ToDo