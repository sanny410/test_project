export type TaskId = string;
export type TaskTitle = string;
export type TaskDescription = string;
export type TaskDateOfCreation = string;
export type TaskExpirationDate = string | null;
export type TaskCommentId = string;
export type TaskCommentText = string;

export interface Task {
    id: TaskId;
    title: TaskTitle;
    description: TaskDescription;
    dateOfCreation: TaskDateOfCreation;
    expirationDate: TaskExpirationDate;
    priority: ETaskPriority;
    currentStatus: ETaskStatus;
    comments: TaskComment[];
}

export interface TaskComment {
    id: TaskCommentId;
    text: TaskCommentText;
}

export enum ETaskPriority {
    HIGH = 'high',
    MIDDLE = 'middle',
    LOW = 'low',
}

export enum ETaskStatus {
    QUEUE = 'queue',
    DEVELOPMENT = 'development',
    DONE = 'done',
}
