import {FunctionComponent} from 'react';

import {Typography} from 'antd';
import {observer} from 'mobx-react';
import useStores from 'Services/Stores/index';
import 'UI/Components/HelloWorld/index.scss';

const {Title} = Typography;

const HelloWorld: FunctionComponent = () => {
    const {helloWorld} = useStores().helloWorldStore;

    return <Title>{helloWorld}</Title>;
};

export default observer(HelloWorld);
