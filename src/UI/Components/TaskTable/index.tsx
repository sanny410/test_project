import {FunctionComponent} from 'react';

import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {ETaskPriority, ETaskStatus, TaskExpirationDate, TaskTitle} from 'Domain/task';
import {observer} from 'mobx-react';
import useStores from 'Services/Stores/index';

import './index.scss';

interface DataType {
    id: string;
    title: TaskTitle;
    expirationDate: TaskExpirationDate;
    priority: ETaskPriority;
    status: ETaskStatus;
}

const columns: ColumnsType<DataType> = [
    {
        title: '№',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Название задачи',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Дата создания',
        dataIndex: 'expirationDate',
        key: 'expirationDate',
    },
    {
        title: 'Приоритет',
        key: 'priority',
        dataIndex: 'priority',
        render: (priority) => (
            <Tag
                color={
                    priority === ETaskPriority.LOW
                        ? 'geekblue'
                        : priority === ETaskPriority.MIDDLE
                        ? 'green'
                        : 'volcano'
                }
                key={priority}
            >
                {priority.toUpperCase()}
            </Tag>
        ),
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Действия',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Редактировать</a>
                <a>Удалить</a>
            </Space>
        ),
    },
];

const TaskTable: FunctionComponent = () => {
    const {tasks} = useStores().taskStore;
    const data = tasks.map((task, i) => {
        return {
            id: String(++i),
            title: task.title,
            expirationDate: task.expirationDate,
            priority: task.priority,
            status: task.status,
        };
    });

    return <Table className="table" columns={columns} dataSource={data} />;
};

export default observer(TaskTable);
