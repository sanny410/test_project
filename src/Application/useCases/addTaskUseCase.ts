import {TaskGateway} from 'Application/ports/taskGateway';
import {TaskStore} from 'Application/ports/taskStore';
import {TaskCreatingSummary} from 'Domain/task';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const addTaskUseCase = async (summary: TaskCreatingSummary, dependencies: Dependencies): Promise<void> => {
    const task = await dependencies.taskGateway.create(summary);
    dependencies.taskStore.setTasks([...dependencies.taskStore.tasks, task]);
};
