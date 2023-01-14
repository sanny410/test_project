import {ProjectGateway} from 'Application/ports/projectGateway';
import {ProjectStore} from 'Application/ports/projectStore';

interface Dependencies {
    projectGateway: ProjectGateway;
    projectStore: ProjectStore;
}

export const getProjectsUseCase = async (dependencies: Dependencies): Promise<void> => {
    const projects = await dependencies.projectGateway.getAll();
    dependencies.projectStore.setProjects(projects);
};
