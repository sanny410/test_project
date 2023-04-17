import React, {FunctionComponent} from 'react';

import {Button} from 'antd';
import {Task} from 'Domain/task';
import {observer} from 'mobx-react';
import {useDeleteTask} from 'Services/Adapters/deleteTask';

import 'UI/Components/AddTaskButton/index.scss';

interface IProps {
    task: Task;
}

const DeleteTaskButton: FunctionComponent<IProps> = ({task}) => {
    const {deleteTask} = useDeleteTask();
    return (
        <Button type="primary" onClick={async () => await deleteTask(task.id)}>
            Удалить
        </Button>
    );
};

export default observer(DeleteTaskButton);
