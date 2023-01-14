import {getProjectsUseCase} from 'Application/useCases/getProjectsUseCase';
import {useProjectGateway} from 'Services/Adapters/gateway';
import {useProjectStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetProjects = () => {
    const projectGateway = useProjectGateway();
    const projectStore = useProjectStore();

    return {
        async getProjects() {
            return await getProjectsUseCase({projectGateway, projectStore});
        },
    };
};
