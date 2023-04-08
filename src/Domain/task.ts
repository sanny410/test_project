export type TaskId = string;
export type TaskTitle = string;
export type TaskDescription = string;
export type TaskExpirationDate = string;
export type TaskCreateDate = string;
export type TaskUpdateDate = string;

export type TaskCommentId = string;
export type TaskCommentText = string;

export interface Task {
    id: TaskId;
    title: TaskTitle;
    description: TaskDescription;
    expirationDate: TaskExpirationDate;
    priority: ETaskPriority;
    status: ETaskStatus;
    comments: TaskComment[];
    createDate: TaskCreateDate;
    updateDate: TaskUpdateDate;
}

export interface TaskComment {
    id: TaskCommentId;
    text: TaskCommentText;
}

export interface TaskCreatingSummary {
    title: TaskTitle;
    description: TaskDescription;
    expirationDate: TaskExpirationDate;
    priority: ETaskPriority;
    status: ETaskStatus;
}

export interface TaskUpdateSummary {
    title?: TaskTitle;
    description?: TaskDescription;
    expirationDate?: TaskExpirationDate;
    priority?: ETaskPriority;
    status?: ETaskStatus;
}

export interface TaskCommentUpdateSummary {
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

export const addComment = (task: Task, comment: TaskComment): Task => {
    return {...task, comments: [...task.comments, comment]};
};

export const removeComment = (task: Task, comment: TaskComment): Task => {
    const comments = task.comments.filter((item) => item.id !== comment.id);
    return {...task, comments};
};

export const updateComment = (summary: TaskCommentUpdateSummary, comment: TaskComment): TaskComment => {
    return {id: comment.id, text: summary.text};
};

export const updateTaskList = (updateTask: Task, tasks: Task[]): Task[] => {
    return tasks.map((task) => {
        if (task.id === updateTask.id) task = updateTask;
        return task;
    });
};
