export class TaskDuplicationError extends Error {
    constructor() {
        super();

        this.message = 'Такая задача уже существует';
    }
}
