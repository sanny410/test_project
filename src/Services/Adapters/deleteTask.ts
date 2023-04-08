import {deleteTaskUseCase} from 'Application/useCases/deleteTaskUseCase';
import {TaskId} from 'Domain/task';
import {useTaskGateway} from 'Services/Adapters/gateway';
import {useTaskStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDeleteTask = () => {
    const taskGateway = useTaskGateway();
    const taskStore = useTaskStore();

    return {
        async deleteTask(id: TaskId) {
            return await deleteTaskUseCase(id, {taskGateway, taskStore});
        },
    };
};
