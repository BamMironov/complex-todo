import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { tasksService } from '../services';

export const TodoContext = createContext({
    tasks: tasksService.getTasks() || []
});

export function StateProvider({ children }) {
    const initialState = useContext(TodoContext);
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
} 