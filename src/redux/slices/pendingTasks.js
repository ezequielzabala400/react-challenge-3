import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
}

const pendingTasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTasks: (state, action) => {
            return {...state, tasks: [...state.tasks, action.payload]}
        },
        deleteAllTasks: (state) => {
            return {...state, tasks: []}
        },
        deleteTask: (state, action) => {
            return {...state, tasks: [...state.tasks].filter(task => task.name !== action.payload)}
        }
    }
})

export const { addTasks, deleteAllTasks, deleteTask} = pendingTasksSlice.actions;

export const pendingTasksReducer = pendingTasksSlice.reducer;