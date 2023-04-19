export class TaskDuplicationError extends Error {
    constructor() {
        super();

        this.name = 'TaskDuplicationError';
        this.message = 'Такая задача уже существует';
    }
}
