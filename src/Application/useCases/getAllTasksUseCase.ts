import {TaskGateway} from 'Application/ports/taskGateway';

import {Task} from '../../Domain/task';
import {TaskStore} from '../ports/taskStore';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const getAllTaskUseCase = async (summary: Task[], dependencies: Dependencies): Promise<void> => {
    const tasks = await dependencies.taskGateway.getAllTask();
    dependencies.taskStore.setTasks(tasks);
};
