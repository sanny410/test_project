import {DATE_FORMAT} from 'Core/Const/DateTimeFormat';
import {Task, TaskCreatingSummary} from 'Domain/task';
import moment from 'moment';
import {v4 as uuidv4} from 'uuid';

const taskGateway = {
    async getAll(): Promise<Task[]> {
        const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');
        return tasks;
    },
    async create(summary: TaskCreatingSummary): Promise<Task> {
        const task: Task = {
            id: uuidv4(),
            title: summary.title,
            description: summary.description,
            expirationDate: summary.description,
            priority: summary.priority,
            status: summary.status,
            comments: [],
            createDate: moment().format(DATE_FORMAT),
            updateDate: moment().format(DATE_FORMAT),
        };

        const tasks: Task[] = JSON.parse(localStorage.getItem('task') ?? '[]');

        tasks.push(task);
        localStorage.setItem('task', JSON.stringify(task));

        return task;
    },
};
export default taskGateway;
