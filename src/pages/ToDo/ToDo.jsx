import React, { useContext, useEffect, useRef} from 'react'
import { AddToDoContainer, TaskListContainer, ToDoContainer, ToDoForm, ToDoTitle } from './ToDoStyles'
import Logo from '../../../public/img/logo.png'
import InputContainer from '../../components/UI/Input/InputContainer'
import Button from '../../components/UI/Button/Button'
import TrashIcon from '../../../public/img/trash.svg'
import { PendingTasks } from '../../context/pendingTasks'
const ToDo = () => {

  let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const inputRef = useRef();
  const listRef = useRef();
  const errorRef = useRef();
  const deleteBtns = useRef();
  
  const {setTasksPending} = useContext(PendingTasks)
  useEffect(() => {
    renderTask();
  },[])

  const saveToLocalStorage = taskList => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  const addTask = (e) => {
    e.preventDefault();

    let task = {name: inputRef.current.value.trim()};
    if(task.name.length === 0){
      errorRef.current.textContent = '*El input esta vacío'
      return;
    }else errorRef.current.textContent = '';
    inputRef.current.value = '';
    if(taskList.some(taskItem => taskItem.name === task.name)){
      errorRef.current.textContent = '*La tarea ya esta en la lista';
      return;
    }else errorRef.current.textContent = ''; 
    taskList.push(task);
    renderTask();
    saveToLocalStorage(taskList);
    setTasksPending(taskList)
  }

  const deleteTask = () => {
    taskList = taskList.filter(task => task !== deleteBtns.dataset.id);
    renderTask();
  }

  const renderTask = () => {
    return(
      listRef.current.innerHTML = taskList.map(task => `<li>${task.name} <img ref="deleteBtns" src="${TrashIcon}" alt="trash-icon" data-id="${task.name}"/></li>`).join('')
    )
  }



  const deleteAllTasks = () => {
    errorRef.current.textContent = ''; 
    taskList = [];
    renderTask();
    saveToLocalStorage(taskList);
    setTasksPending(taskList)
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
              <small ref={errorRef}></small>
              </InputContainer>
              <Button>
                <button>Agregar</button>
              </Button>
            </AddToDoContainer>
            <TaskListContainer ref={listRef}>
            </TaskListContainer>
        </ToDoForm>
            <Button>
              <button onClick={deleteAllTasks}>Borrar Lista</button>
            </Button>
    </ToDoContainer>
  )
}

export default ToDo