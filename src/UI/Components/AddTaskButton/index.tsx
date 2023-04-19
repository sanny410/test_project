import React, {FunctionComponent} from 'react';

import {AppstoreAddOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {observer} from 'mobx-react';

import 'UI/Components/AddTaskButton/index.scss';

interface IProps {
    onClick: () => void;
}

const AddTaskButton: FunctionComponent<IProps> = ({onClick}) => {
    return (
        <Button onClick={onClick} type="primary" style={{borderRadius: '5px'}}>
            Добавить <AppstoreAddOutlined />
        </Button>
    );
};

export default observer(AddTaskButton);
