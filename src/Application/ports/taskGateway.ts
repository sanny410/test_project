import {Task, TaskCreatingSummary, TaskUpdateSummary} from 'Domain/task';

export interface TaskGateway {
    create: (summary: TaskCreatingSummary) => Promise<Task>;
    getAll: () => Promise<Task[]>;
    update: (summary: TaskUpdateSummary, task: Task) => Promise<Task[]>;
}
