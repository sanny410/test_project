import {createContext, useContext} from 'react';

import helloWorldStore from 'Services/Stores/HelloWorld/index';
import taskStore from 'Services/Stores/Task/index';

const storesContext = createContext({
    helloWorldStore,
    taskStore,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStores = () => useContext(storesContext);
export default useStores;
