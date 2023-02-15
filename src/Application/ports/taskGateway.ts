import {Task, TaskCreatingSummary, TaskUpdateSummary, TaskId} from 'Domain/task';

export interface TaskGateway {
    create: (summary: TaskCreatingSummary) => Promise<Task>;
    getAll: () => Promise<Task[]>;
    update: (summary: TaskUpdateSummary, id: TaskId) => Promise<Task>;
}
