export interface ITask {
    id: number;
    title: string;
    description: string;
    dateOfCreation: number;
    timeAtWork: number;
    expirationDate?: string;
    priority: boolean;
    currentStatus: EStatus;
    comments: Comment[];
    subtasks: ITask[];
}

export interface Comment {
    id: number;
    text: string;
}

export enum EStatus {
    Queue,
    Development,
    Done,
}
