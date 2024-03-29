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
    tasks: Task[] = [];

    @action
    setTasks = (tasks: Task[]): void => {
        this.tasks = tasks;
    };
}
