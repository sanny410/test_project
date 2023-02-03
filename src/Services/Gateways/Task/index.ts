import {DATE_FORMAT} from 'Core/Const/DateTimeFormat';
import {Task, TaskCreatingSummary, TaskUpdateSummary} from 'Domain/task';
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
            expirationDate: summary.expirationDate,
            priority: summary.priority,
            status: summary.status,
            comments: [],
            createDate: moment().format(DATE_FORMAT),
            updateDate: moment().format(DATE_FORMAT),
        };

        const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        return task;
    },
    async update(summary: TaskUpdateSummary, task: Task): Promise<Task[]> {
        const updateTask: Task = {
            id: task.id,
            title: summary.title ?? task.title,
            description: summary.description ?? task.description,
            expirationDate: summary.description ?? task.expirationDate,
            priority: summary.priority ?? task.priority,
            status: summary.status ?? task.status,
            comments: task.comments,
            createDate: task.createDate,
            updateDate: moment().format(DATE_FORMAT),
        };

        const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');

        const updateTaskList = tasks.map((task) => {
            if (task.id === updateTask.id) {
                task = updateTask;
            }
            return task;
        });

        localStorage.setItem('tasks', JSON.stringify(updateTaskList));

        return updateTaskList;
    },
};
export default taskGateway;
