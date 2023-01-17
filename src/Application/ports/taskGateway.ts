import {Task, TaskCreatingSummary} from '../../Domain/task';

export interface TaskGateway {
    add: (summary: TaskCreatingSummary) => Promise<Task>;
    getAllTask: () => Promise<Task[]>;
}
