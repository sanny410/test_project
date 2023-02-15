import {DATE_FORMAT} from 'Core/Const/DateTimeFormat';
import {Task, TaskCreatingSummary, TaskUpdateSummary, TaskId} from 'Domain/task';
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
    async update(summary: TaskUpdateSummary, id: TaskId): Promise<Task> {
        const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');
        let updateTask: Task = tasks.find((item) => item.id === id) as Task;

        updateTask = {
            id: updateTask.id,
            title: summary.title ?? updateTask.title,
            description: summary.description ?? updateTask.description,
            expirationDate: summary.description ?? updateTask.expirationDate,
            priority: summary.priority ?? updateTask.priority,
            status: summary.status ?? updateTask.status,
            comments: updateTask.comments,
            createDate: updateTask.createDate,
            updateDate: moment().format(DATE_FORMAT),
        };

        const updateTaskList = tasks.map((task) => {
            if (task.id === updateTask.id) {
                task = updateTask;
            }
            return task;
        });

        localStorage.setItem('tasks', JSON.stringify(updateTaskList));

        return updateTask;
    },
};
export default taskGateway;
