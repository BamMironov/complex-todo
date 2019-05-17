import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from './constants';

export const addTask = task => ({
    type: ADD_TASK,
    task
});

export const editTask = task => ({
    type: EDIT_TASK,
    task
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    id
});