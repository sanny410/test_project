import {getTasksUseCase} from 'Application/useCases/getTasksUseCase';
import {useTaskGateway} from 'Services/Adapters/gateway';
import {useTaskStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetAllTasks = () => {
    const taskGateway = useTaskGateway();
    const taskStore = useTaskStore();

    return {
        async getProjects() {
            return await getTasksUseCase({taskGateway, taskStore});
        },
    };
};
