import {createContext, useContext} from 'react';

import projectStore from './Project';

const storesContext = createContext({
    projectStore,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStores = () => useContext(storesContext);
export default useStores;
