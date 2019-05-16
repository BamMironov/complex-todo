import { ADD_TASK, REMOVE_TASK } from './constants';

export function reducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.task]
            }

        case REMOVE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
    
        default:
            return state;
    }
}
