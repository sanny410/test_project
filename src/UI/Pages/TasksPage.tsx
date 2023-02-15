import {FunctionComponent, useState} from 'react';

import {Space} from 'antd';
import {DefaultTask} from 'Core/Const/DefaultTask';
import {observer} from 'mobx-react';
import AddTaskButton from 'UI/Components/AddTaskButton/index';
import AddTaskModal from 'UI/Components/AddTaskModal/index';
import {FormInput} from 'UI/Components/ModalForm/index';
import PageWrapper from 'UI/Components/PageWrapper';

const TasksPage: FunctionComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [task, setTask] = useState<FormInput>(DefaultTask);

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
                <AddTaskModal isModalOpen={isModalOpen} onCancel={closeModal} task={task} setTask={setTask} />
            </Space.Compact>
        </PageWrapper>
    );
};

export default observer(TasksPage);
