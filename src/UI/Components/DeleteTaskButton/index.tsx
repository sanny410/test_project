import React, {FunctionComponent} from 'react';

import {DeleteOutlined} from '@ant-design/icons';
import {Task} from 'Domain/task';
import {observer} from 'mobx-react';
import {useDeleteTask} from 'Services/Adapters/deleteTask';

import 'UI/Components/AddTaskButton/index.scss';

interface IProps {
    task: Task;
}

const DeleteTaskButton: FunctionComponent<IProps> = ({task}) => {
    const {deleteTask} = useDeleteTask();
    return <DeleteOutlined onClick={async () => await deleteTask(task.id)} style={{color: 'red'}} />;
};

export default observer(DeleteTaskButton);
