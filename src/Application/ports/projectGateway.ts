import {Project, ProjectCreatingSummary, ProjectId, ProjectInfo, ProjectUpdatingSummary} from 'Domain/project';

export interface ProjectGateway {
    get: (projectId: ProjectId) => Promise<Project>;
    getAll: () => Promise<ProjectInfo[]>;
    create: (summary: ProjectCreatingSummary) => Promise<Project>;
    update: (summary: ProjectUpdatingSummary) => Promise<Project>;
}
