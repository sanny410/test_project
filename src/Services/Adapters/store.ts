import {TaskStore} from 'Application/ports/taskStore';
import useStores from 'Services/Stores/index';

export const useTaskStore = (): TaskStore => useStores().taskStore;
