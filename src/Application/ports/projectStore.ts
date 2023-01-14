import {Project, ProjectInfo} from 'Domain/project';

export interface ProjectStore {
    project: Project;
    projects: ProjectInfo[];
    setProject: (project: Project) => void;
    setProjects: (projects: ProjectInfo[]) => void;
}
