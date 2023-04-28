import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { pendingTasksReducer } from "../slices/pendingTasks";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/es/storage";

const reducers = combineReducers(
    {
        tasks: pendingTasksReducer
    }
)

const persistConfig = {
    key: 'root',
    storage
}

export const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);