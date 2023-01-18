import {Task, TaskCreatingSummary} from '../../Domain/task';

export interface TaskGateway {
    create: (summary: TaskCreatingSummary) => Promise<Task>;
    getAll: () => Promise<Task[]>;
}
