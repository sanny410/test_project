import {TaskGateway} from 'Application/ports/taskGateway';
import {TaskStore} from 'Application/ports/taskStore';
import {TaskId, Task} from 'Domain/task';

interface Dependencies {
    taskGateway: TaskGateway;
    taskStore: TaskStore;
}

export const deleteTaskUseCase = async (id: TaskId, dependencies: Dependencies): Promise<void> => {
    const deleteTask = await dependencies.taskGateway.delete(id);
    const tasks = dependencies.taskStore.tasks;
    dependencies.taskStore.setTasks([...tasks.filter((task: Task) => task.id !== deleteTask.id)]);
};
