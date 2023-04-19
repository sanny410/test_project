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
    Task,
    TaskUpdateDate,
} from 'Domain/task';
import {observer} from 'mobx-react';
import {useGetTasks} from 'Services/Adapters/getTasks';
import useStores from 'Services/Stores/index';
import DeleteTaskButton from 'UI/Components/DeleteTaskButton/index';
import UpdateTaskModal from 'UI/Components/UpdateTaskModal/index';

import './index.scss';

interface DataType {
    task: Task;
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
        title: 'Название',
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
                        ? 'green'
                        : priority === ETaskPriority.MIDDLE
                        ? 'geekblue'
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
        render: (status) => (
            <Tag
                color={
                    status === ETaskStatus.DONE ? 'green' : status === ETaskStatus.DEVELOPMENT ? 'geekblue' : 'volcano'
                }
                key={status}
            >
                {status.toUpperCase()}
            </Tag>
        ),
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
        dataIndex: 'task',
        key: 'task',
        render: (task: Task) => (
            <Space size="middle">
                <UpdateTaskModal task={task} />
                <DeleteTaskButton task={task} />
            </Space>
        ),
    },
];

const TaskTable: FunctionComponent = () => {
    const {getTasks} = useGetTasks();
    const {tasks} = useStores().taskStore;

    const data = tasks.map((task, i) => {
        return {
            task,
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

    return <Table className="table" columns={columns} dataSource={data} rowKey={'index'} />;
};

export default observer(TaskTable);
