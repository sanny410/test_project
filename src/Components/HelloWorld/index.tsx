import {FunctionComponent} from 'react';

import {Typography} from 'antd';
import useStores from 'Stores';

import './index.scss';

const {Title} = Typography;

const HelloWorld: FunctionComponent = () => {
    const {helloWorld} = useStores().helloWorldStore;

    return <Title>{helloWorld}</Title>;
};

export default HelloWorld;
