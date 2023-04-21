import { createContext, useState } from "react";
import { json } from "react-router-dom";



export const PendingTasks = createContext();

const isPendingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const PendingTasksProvider = ({children}) => {

    const [tasksPending,setTasksPending] = useState(isPendingTasks) 

    return <PendingTasks.Provider value={{tasksPending,setTasksPending}}>
        {children}
    </PendingTasks.Provider>
}