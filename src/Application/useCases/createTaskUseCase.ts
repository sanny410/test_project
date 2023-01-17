import {TaskGateway} from 'Application/ports/taskGateway';
import {TaskCreatingSummary} from 'Domain/task';

import {TaskStore} from '../ports/taskStore';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const addTaskUseCase = async (summary: TaskCreatingSummary, dependencies: Dependencies): Promise<void> => {
    const task = await dependencies.taskGateway.add(summary);
    dependencies.taskStore.setTasks([...dependencies.taskStore.tasks, task]);
};
