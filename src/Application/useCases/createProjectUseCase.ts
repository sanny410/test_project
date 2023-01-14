import {ProjectGateway} from 'Application/ports/projectGateway';
import {ProjectCreatingSummary} from 'Domain/project';

interface Dependencies {
    projectGateway: ProjectGateway;
}

export const createProjectUseCase = async (
    summary: ProjectCreatingSummary,
    dependencies: Dependencies
): Promise<void> => {
    await dependencies.projectGateway.create(summary);
};
