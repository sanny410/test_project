import {addTaskUseCase} from 'Application/useCases/addTaskUseCase';
import {TaskCreatingSummary} from 'Domain/task';
import {useTaskGateway} from 'Services/Adapters/gateway';
import {useTaskStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAddTask = () => {
    const taskGateway = useTaskGateway();
    const taskStore = useTaskStore();

    return {
        async addTask(summary: TaskCreatingSummary) {
            return await addTaskUseCase(summary, {taskGateway, taskStore});
        },
    };
};
