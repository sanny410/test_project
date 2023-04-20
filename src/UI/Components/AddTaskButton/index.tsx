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
        <Button className="add-task-button" onClick={onClick} type="primary">
            Добавить <AppstoreAddOutlined />
        </Button>
    );
};

export default observer(AddTaskButton);
