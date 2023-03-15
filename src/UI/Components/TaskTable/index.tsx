import {FunctionComponent, useEffect} from 'react';

import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {
    ETaskPriority,
    ETaskStatus,
    TaskTitle,
    TaskExpirationDate,
    TaskDescription,
    TaskCreateDate,
    TaskUpdateDate,
} from 'Domain/task';
import {observer} from 'mobx-react';
import {useGetTasks} from 'Services/Adapters/getTasks';
import useStores from 'Services/Stores/index';

import './index.scss';

interface DataType {
    index: number;
    title: TaskTitle;
    description: TaskDescription;
    expirationDate: TaskExpirationDate;
    priority: ETaskPriority;
    status: ETaskStatus;
    createDate: TaskCreateDate;
    updateDate: TaskUpdateDate;
}

const columns: ColumnsType<DataType> = [
    {
        title: '№',
        dataIndex: 'index',
        key: 'index',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Название задачи',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Дедлайн',
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
        title: 'Дата создания',
        dataIndex: 'createDate',
        key: 'createDate',
    },
    {
        title: 'Дата обновления',
        dataIndex: 'updateDate',
        key: 'updateDate',
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
    const {getTasks} = useGetTasks();
    const {tasks} = useStores().taskStore;
    const data = tasks.map((task, i) => {
        return {
            index: ++i,
            title: task.title,
            description: task.description,
            expirationDate: task.expirationDate,
            priority: task.priority,
            status: task.status,
            createDate: task.createDate,
            updateDate: task.updateDate,
        };
    });

    useEffect(() => {
        void getTasks();
    }, []);

    return <Table className="table" columns={columns} dataSource={data} />;
};

export default observer(TaskTable);
