import {Project, ProjectInfo} from 'Domain/project';
import {action, makeObservable, observable} from 'mobx';
import {INITIAL_PROJECT} from 'Services/Stores/Project/const';

export default class ProjectStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    project: Project = INITIAL_PROJECT;

    @observable
    projects: ProjectInfo[] = [];

    @action
    setProject = (project: Project): void => {
        this.project = project;
    };

    @action
    setProjects = (projects: ProjectInfo[]): void => {
        this.projects = projects;
    };
}
