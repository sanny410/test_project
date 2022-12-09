import {FunctionComponent} from 'react';

import {Typography} from 'antd';

import './index.scss';

const {Title} = Typography;

const NotFound: FunctionComponent = () => {
    return <Title type="danger">404</Title>;
};

export default NotFound;
