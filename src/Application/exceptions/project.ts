export class ProjectNotExistsError extends Error {
    constructor() {
        super();

        this.name = 'ProjectNotExistsError';
        this.message = 'Такого проекта не существует';
    }
}

export class ProjectNameDuplicationError extends Error {
    constructor() {
        super();

        this.name = 'ProjectNameDuplicationError';
        this.message = 'Проект с таким именем уже существует';
    }
}
