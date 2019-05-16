import { ADD_TASK, REMOVE_TASK } from './constants';

export const addTask = task => ({
    type: ADD_TASK,
    task
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    id
});