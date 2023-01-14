import {createProjectUseCase} from 'Application/useCases/createProjectUseCase';
import {ProjectCreatingSummary} from 'Domain/project';
import {useProjectGateway} from 'Services/Adapters/gateway';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCreateProject = () => {
    const projectGateway = useProjectGateway();

    return {
        async createProject(summary: ProjectCreatingSummary) {
            return await createProjectUseCase(summary, {projectGateway});
        },
    };
};
