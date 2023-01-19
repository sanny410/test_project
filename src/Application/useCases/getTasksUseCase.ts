import {TaskGateway} from 'Application/ports/taskGateway';
import {TaskStore} from 'Application/ports/taskStore';
import {Task} from 'Domain/task';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const getTasksUseCase = async (summary: Task[], dependencies: Dependencies): Promise<void> => {
    const tasks = await dependencies.taskGateway.getAll();
    dependencies.taskStore.setTasks(tasks);
};
