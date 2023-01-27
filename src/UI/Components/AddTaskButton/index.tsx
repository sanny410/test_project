import React, {FunctionComponent} from 'react';

import {Button} from 'antd';
import {observer} from 'mobx-react';

import 'UI/Components/AddTaskButton/index.scss';

interface IProps {
    onClick: () => void;
}

const AddTaskButton: FunctionComponent<IProps> = ({onClick}) => {
    return (
        <Button type="primary" onClick={onClick}>
            Добавить задачу
        </Button>
    );
};

export default observer(AddTaskButton);
