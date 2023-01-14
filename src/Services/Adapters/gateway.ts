import {ProjectGateway} from 'Application/ports/projectGateway';
import projectGateway from 'Services/Gateways/Project';

export const useProjectGateway = (): ProjectGateway => projectGateway;
