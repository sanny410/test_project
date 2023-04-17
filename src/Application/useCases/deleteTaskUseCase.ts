import {TaskGateway} from 'Application/ports/taskGateway';
import {TaskStore} from 'Application/ports/taskStore';
import {TaskId, deleteTask} from 'Domain/task';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const deleteTaskUseCase = async (id: TaskId, dependencies: Dependencies): Promise<void> => {
    const task = await dependencies.taskGateway.delete(id);
    const tasks = dependencies.taskStore.tasks;
    dependencies.taskStore.setTasks(deleteTask(tasks, task));
};
