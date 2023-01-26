import React, {FunctionComponent} from 'react';

import {Button} from 'antd';

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

export default AddTaskButton;
