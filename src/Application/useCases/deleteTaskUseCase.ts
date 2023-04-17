import {TaskGateway} from 'Application/ports/taskGateway';
import {TaskStore} from 'Application/ports/taskStore';
import {TaskId, changeTaskListAfterDeleteTask} from 'Domain/task';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const deleteTaskUseCase = async (id: TaskId, dependencies: Dependencies): Promise<void> => {
    const deleteTask = await dependencies.taskGateway.delete(id);
    const tasks = dependencies.taskStore.tasks;
    dependencies.taskStore.setTasks(changeTaskListAfterDeleteTask(tasks, deleteTask));
};
