import {editProjectUseCase} from 'Application/useCases/editProjectUseCase';
import {ProjectUpdatingSummary} from 'Domain/project';
import {useProjectGateway} from 'Services/Adapters/gateway';
import {useProjectStore} from 'Services/Adapters/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useEditProject = () => {
    const projectGateway = useProjectGateway();
    const projectStore = useProjectStore();

    return {
        async editProject(summary: ProjectUpdatingSummary) {
            return await editProjectUseCase(summary, {projectGateway, projectStore});
        },
    };
};
