import ApiService from './apiService';
import { Entities } from '../enums';

export class TasksService extends ApiService {
    getTasks() {
        this.getRequest(Entities.Tasks);
    }

    setTasks(tasks) {
        this.setRequest(Entities.Tasks, tasks)
    }
}

export const tasksService = new TasksService();