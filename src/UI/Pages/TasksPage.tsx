import {FunctionComponent, useState} from 'react';

import {Space} from 'antd';
import {observer} from 'mobx-react';
import AddTaskButton from 'UI/Components/AddTaskButton/index';
import ModalWindow from 'UI/Components/ModalWindow/index';
import PageWrapper from 'UI/Components/PageWrapper';

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
                <ModalWindow isModalOpen={isModalOpen} onOk={closeModal} onCancel={closeModal} />
            </Space.Compact>
        </PageWrapper>
    );
};

export default observer(TasksPage);
