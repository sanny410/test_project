import {Task} from 'Domain/task';

export interface TaskStore {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}
