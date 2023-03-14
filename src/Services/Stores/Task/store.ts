import {Task} from 'Domain/task';
import {action, makeObservable, observable} from 'mobx';

/**
 * Шаблон оценки
 */
export default class TaskStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');

    @action
    setTasks = (tasks: Task[]): void => {
        this.tasks = tasks;
    };
}
