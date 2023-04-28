import {createContext, useContext} from 'react';

import taskStore from 'Services/Stores/Task/index';

const storesContext = createContext({
    taskStore,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStores = () => useContext(storesContext);
export default useStores;
