import {ETaskStatus, ETaskPriority} from 'Domain/task';

export const DefaultTask = {
    title: '',
    description: '',
    expirationDate: '',
    status: ETaskStatus.QUEUE,
    priority: ETaskPriority.LOW,
};
