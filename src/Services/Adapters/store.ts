import {ProjectStore} from 'Application/ports/projectStore';
import useStores from 'Services/Stores';

export const useProjectStore = (): ProjectStore => useStores().projectStore;
