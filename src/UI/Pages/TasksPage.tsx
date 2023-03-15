import {FunctionComponent, useState} from 'react';

import {Space} from 'antd';
import {observer} from 'mobx-react';
import AddTaskButton from 'UI/Components/AddTaskButton/index';
import AddTaskModal from 'UI/Components/AddTaskModal/index';
import PageWrapper from 'UI/Components/PageWrapper';
import TaskTable from 'UI/Components/TaskTable/index';

const TasksPage: FunctionComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (): void => {
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    return (
        <PageWrapper>
            <Space.Compact block>
                <AddTaskButton onClick={openModal} />
                <AddTaskModal isModalOpen={isModalOpen} onCancel={closeModal} />
            </Space.Compact>
            <Space>
                <TaskTable />
            </Space>
        </PageWrapper>
    );
};

export default observer(TasksPage);
