import React, {FunctionComponent, useState} from 'react';

import {DATE_FORMAT} from 'Core/Const/DateTimeFormat';
import {DefaultTask} from 'Core/Const/DefaultTask';
import dayjs from 'dayjs';
import {TaskCreatingSummary} from 'Domain/task';
import {observer} from 'mobx-react';
import {useAddTask} from 'Services/Adapters/addTask';
import 'UI/Components/AddTaskModal/index.scss';
import ModalForm, {FormInput} from 'UI/Components/ModalForm/index';

interface IProps {
    isModalOpen: boolean;
    onCancel: () => void;
}

const AddTaskModal: FunctionComponent<IProps> = ({isModalOpen, onCancel}) => {
    const [task, setTask] = useState<FormInput>(DefaultTask);
    const {addTask} = useAddTask();

    const onSubmit = async (task: FormInput): Promise<void> => {
        const newTask: TaskCreatingSummary = task;
        newTask.expirationDate = dayjs(newTask.expirationDate).format(DATE_FORMAT);
        await addTask(newTask);
        onCancel();
        setTask(DefaultTask);
    };

    return (
        <ModalForm isModalOpen={isModalOpen} onCancel={onCancel} required={true} summary={task} onSubmit={onSubmit} />
    );
};

export default observer(AddTaskModal);
