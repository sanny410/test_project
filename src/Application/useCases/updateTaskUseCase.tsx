import {TaskGateway} from 'Application/ports/taskGateway';
import {TaskStore} from 'Application/ports/taskStore';
import {TaskUpdateSummary, TaskId, updateTaskList} from 'Domain/task';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const updateTaskUseCase = async (
    summary: TaskUpdateSummary,
    id: TaskId,
    dependencies: Dependencies
): Promise<void> => {
    const updateTask = await dependencies.taskGateway.update(summary, id);
    const tasks = dependencies.taskStore.tasks;
    const taskList = updateTaskList(updateTask, tasks);
    dependencies.taskStore.setTasks(taskList);
};
