import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from './constants';

export function reducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.task]
            }

        case EDIT_TASK:
            const target = action.task;

            return {
                tasks: state.tasks.map(task => task.id === target.id ? target : task)
            }

        case REMOVE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
    
        default:
            return state;
    }
}
