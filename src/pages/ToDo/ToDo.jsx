import React, { useEffect, useRef, useState } from 'react'
import { AddToDoContainer, TaskListContainer, ToDoContainer, ToDoForm, ToDoTitle } from './ToDoStyles'
import Logo from '../../../public/img/logo.png'
import InputContainer from '../../components/UI/Input/InputContainer'
import Button from '../../components/UI/Button/Button'
import TrashIcon from '../../../public/img/trash.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addTasks, deleteAllTasks, deleteTask } from '../../redux/slices/pendingTasks'
const ToDo = () => {

  const inputRef = useRef();

  const [error, setError] = useState('');

  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
// console.log(tasks);

  const addTask = (e) => {
    e.preventDefault();
    let task = {
      name: inputRef.current.value.trim()
    }
    if(tasks.some(taskItem => taskItem.name === task.name)){
      setError('La tarea ya esta en la lista.');
      inputRef.current.value = '';

      return;
    }
    setError('');
    // console.log(task);
    inputRef.current.value = '';
    dispatch(addTasks(task))
  }
  

  return (
    <ToDoContainer>
        <ToDoTitle>
            ToDo List<img src={Logo} alt="logo" />
        </ToDoTitle>
        <ToDoForm onSubmit={addTask}>
            <AddToDoContainer>
              <InputContainer>
              <input type="text" ref={inputRef}/>
              <small>{error && error}</small>
              </InputContainer>
              <Button>
                <button>Agregar</button>
              </Button>
            </AddToDoContainer>
            <TaskListContainer>
              {tasks.length > 0 ? tasks.map(task => (<li key={task.name}>{task.name} <img src={TrashIcon} alt="Trash-icon" onClick={() => dispatch(deleteTask(task.name))}/></li>)) : 'La lista esta vacía'}
            </TaskListContainer>
        </ToDoForm>
            <Button>
              {tasks.length > 0 ? <button onClick={() => dispatch(deleteAllTasks())}>Borrar Lista</button> : ''}
            </Button>
    </ToDoContainer>
  )
}

export default ToDo