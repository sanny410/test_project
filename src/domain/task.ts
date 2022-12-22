export interface Task {
    title: TaskId;
    description: TaskDescription;
    dateOfCreation: TaskDateOfCreation;
    expirationDate: TaskExpirationDate;
    priority: ETaskPriority;
    currentStatus: ETaskStatus;
    comments: TaskComment[];
}

export type TaskId = string;
export type TaskDescription = string;
export type TaskDateOfCreation = string;
export type TaskExpirationDate = string | null;

export enum ETaskPriority {
    HIGH = 'high',
    MIDDLE = 'middle',
    LOW = 'low',
}

export default ETaskPriority;

export enum ETaskStatus {
    QUEUE = 'queue',
    DEVELOPMENT = 'development',
    DONE = 'done',
}

export type TaskCommentText = string;

export interface TaskComment {
    id: number;
    text: TaskCommentText;
}
