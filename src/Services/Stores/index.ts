import {createContext, useContext} from 'react';

import helloWorldStore from 'Services/Stores/HelloWorld';

const storesContext = createContext({
    helloWorldStore,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStores = () => useContext(storesContext);
export default useStores;
