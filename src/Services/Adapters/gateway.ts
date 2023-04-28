import {TaskGateway} from 'Application/ports/taskGateway';
import taskGateway from 'Services/Gateways/Task/index';

export const useTaskGateway = (): TaskGateway => taskGateway;
