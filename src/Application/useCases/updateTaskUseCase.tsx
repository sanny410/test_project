import {TaskGateway} from 'Application/ports/taskGateway';
import {TaskStore} from 'Application/ports/taskStore';
import {TaskUpdateSummary, Task} from 'Domain/task';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const updateTaskUseCase = async (
    summary: TaskUpdateSummary,
    task: Task,
    dependencies: Dependencies
): Promise<void> => {
    const tasks = await dependencies.taskGateway.update(summary, task);
    dependencies.taskStore.setTasks(tasks);
};
