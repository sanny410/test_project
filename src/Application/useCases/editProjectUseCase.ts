import {ProjectGateway} from 'Application/ports/projectGateway';
import {ProjectStore} from 'Application/ports/projectStore';
import {ProjectUpdatingSummary} from 'Domain/project';

interface Dependencies {
    projectGateway: ProjectGateway;
    projectStore: ProjectStore;
}

export const editProjectUseCase = async (
    summary: ProjectUpdatingSummary,
    dependencies: Dependencies
): Promise<void> => {
    const project = await dependencies.projectGateway.update(summary);
    dependencies.projectStore.setProject(project);
};
