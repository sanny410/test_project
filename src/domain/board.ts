import {ITask, EStatus} from './task';

export interface Board {
    status: EStatus;
    tasks: ITask[];
}
