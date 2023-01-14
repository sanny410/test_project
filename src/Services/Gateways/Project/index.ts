import {ProjectNameDuplicationError, ProjectNotExistsError} from 'Application/exceptions/project';
import {DATE_FORMAT} from 'Core/Const/DateTimeFormats';
import {
    Project,
    ProjectCreatingSummary,
    ProjectId,
    ProjectInfo,
    ProjectName,
    ProjectUpdatingSummary,
} from 'Domain/project';
import moment from 'moment';
import {v4 as uuidv4} from 'uuid';

const projectGateway = {
    async get(projectId: ProjectId): Promise<Project> {
        const projects: Project[] = JSON.parse(localStorage.getItem('projects') ?? '[]');
        const project = projects.find((project) => project.id === projectId);

        if (project != null) return project;
        else throw new ProjectNotExistsError();
    },
    async getAll(): Promise<ProjectInfo[]> {
        const projects: Project[] = JSON.parse(localStorage.getItem('projects') ?? '[]');
        return projects.map((project) => ({
            id: project.id,
            name: project.name,
            createdAt: project.createdAt,
            updatedAt: project.updatedAt,
        }));
    },
    async create(summary: ProjectCreatingSummary): Promise<Project> {
        const project: Project = {
            id: uuidv4(),
            name: summary.name,
            createdAt: moment().format(DATE_FORMAT),
            updatedAt: moment().format(DATE_FORMAT),
        };

        const projects: Project[] = JSON.parse(localStorage.getItem('projects') ?? '[]');
        const isProjectNameDuplicated = projects.some((_project) => _project.name === project.name);

        if (isProjectNameDuplicated) throw new ProjectNameDuplicationError();

        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));

        return project;
    },
    async update(summary: ProjectUpdatingSummary): Promise<Project> {
        const projects: Project[] = JSON.parse(localStorage.getItem('projects') ?? '[]');
        const project = projects.find((project) => project.id === summary.id);

        if (project == null) throw new ProjectNotExistsError();

        if ('name' in summary) {
            const isProjectNameDuplicated = projects.some((_project) => _project.name === summary.name);

            if (isProjectNameDuplicated) throw new ProjectNameDuplicationError();

            project.name = summary.name as ProjectName;
        }

        localStorage.setItem('projects', JSON.stringify(projects));
        return project;
    },
};
export default projectGateway;
