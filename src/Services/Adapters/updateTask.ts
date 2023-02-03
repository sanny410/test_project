import {updateTaskUseCase} from 'Application/useCases/updateTaskUseCase';
import {TaskUpdateSummary, Task} from 'Domain/task';
import {useTaskGateway} from 'Services/Adapters/gateway';
import {useTaskStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUpdateTask = () => {
    const taskGateway = useTaskGateway();
    const taskStore = useTaskStore();

    return {
        async updateTask(summary: TaskUpdateSummary, task: Task) {
            return await updateTaskUseCase(summary, task, {taskGateway, taskStore});
        },
    };
};
