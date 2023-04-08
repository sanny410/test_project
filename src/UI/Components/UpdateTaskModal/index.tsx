import React, {FunctionComponent, useState} from 'react';

import {Button} from 'antd';
import {DATE_FORMAT} from 'Core/Const/DateTimeFormat';
import {DefaultTask} from 'Core/Const/DefaultTask';
import dayjs from 'dayjs';
import {TaskUpdateSummary, Task} from 'Domain/task';
import {observer} from 'mobx-react';
import moment from 'moment';
import {useUpdateTask} from 'Services/Adapters/updateTask';
import 'UI/Components/AddTaskModal/index.scss';
import ModalForm, {FormInput} from 'UI/Components/ModalForm/index';

interface IProps {
    task: Task;
}

const UpdateTaskModal: FunctionComponent<IProps> = ({task}) => {
    const [taskInput, setTaskInput] = useState<FormInput>({
        title: task.title,
        description: task.description,
        expirationDate: moment(task.expirationDate, DATE_FORMAT).format('YYYY-MM-DD'),
        status: task.status,
        priority: task.priority,
    });

    const {update} = useUpdateTask();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (): void => {
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    const onSubmit = async (taskInput: FormInput): Promise<void> => {
        const updateTask: TaskUpdateSummary = {
            title: taskInput.title,
            description: taskInput.description,
            expirationDate: taskInput.expirationDate,
            priority: taskInput.priority,
            status: taskInput.status,
        };

        updateTask.expirationDate = dayjs(updateTask.expirationDate).format(DATE_FORMAT);

        await update(updateTask, task.id);
        closeModal();
        setTaskInput(DefaultTask);
    };

    return (
        <>
            <Button type="primary" onClick={openModal}>
                Редактировать
            </Button>
            <ModalForm
                isModalOpen={isModalOpen}
                onCancel={closeModal}
                required={true}
                summary={taskInput}
                onSubmit={onSubmit}
            />
        </>
    );
};

export default observer(UpdateTaskModal);
