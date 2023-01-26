import {FunctionComponent, useState} from 'react';

import {Space} from 'antd';
import AddTaskButton from 'UI/Components/AddTaskButton/AddTaskButton';
import ModalWindow from 'UI/Components/ModalWindow/ModalWindow';
import PageWrapper from 'UI/Components/PageWrapper';

const Tasks: FunctionComponent = () => {
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

export default Tasks;
