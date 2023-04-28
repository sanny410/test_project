import {TaskDuplicationError} from 'Application/exceptions/tasks';
import {DATE_FORMAT} from 'Core/Const/DateTimeFormat';
import {Task, TaskCreatingSummary, TaskUpdateSummary, TaskId, updateTaskList, TaskTitle} from 'Domain/task';
import moment from 'moment';
import {v4 as uuidv4} from 'uuid';

const taskGateway = {
    async getAll(): Promise<Task[]> {
        return JSON.parse(localStorage.getItem('tasks') ?? '[]');
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

        if (this.isTaskTitleDuplicated(tasks, task.title)) throw new TaskDuplicationError();

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        return task;
    },
    async update(summary: TaskUpdateSummary, id: TaskId): Promise<Task> {
        const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');

        let updateTask: Task = tasks.find((item) => item.id === id) as Task;

        if (
            summary.title !== undefined &&
            updateTask.title !== summary.title &&
            this.isTaskTitleDuplicated(tasks, summary.title)
        )
            throw new TaskDuplicationError();

        updateTask = {
            id: updateTask.id,
            title: summary.title ?? updateTask.title,
            description: summary.description ?? updateTask.description,
            expirationDate: summary.expirationDate ?? updateTask.expirationDate,
            priority: summary.priority ?? updateTask.priority,
            status: summary.status ?? updateTask.status,
            comments: updateTask.comments,
            createDate: updateTask.createDate,
            updateDate: moment().format(DATE_FORMAT),
        };

        const taskList = updateTaskList(updateTask, tasks);

        localStorage.setItem('tasks', JSON.stringify(taskList));

        return updateTask;
    },
    async delete(id: TaskId): Promise<Task> {
        const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');
        const deleteTask: Task = tasks.find((item) => item.id === id) as Task;

        const taskList = [...tasks.filter((task: Task) => task.id !== id)];

        localStorage.setItem('tasks', JSON.stringify(taskList));

        return deleteTask;
    },
    isTaskTitleDuplicated(tasks: Task[], title: TaskTitle): boolean {
        return tasks.some((_task) => _task.title === title);
    },
};
export default taskGateway;
