import React, {FunctionComponent} from 'react';

import 'UI/Components/AddTaskModal/index.scss';
import {observer} from 'mobx-react';
import {useAddTask} from 'Services/Adapters/addTask';
import ModalForm from 'UI/Components/ModalForm/index';

interface IProps {
    isModalOpen: boolean;
    onCancel: () => void;
}

const AddTaskModal: FunctionComponent<IProps> = ({isModalOpen, onCancel}) => {
    const {addTask} = useAddTask();

    return <ModalForm isModalOpen={isModalOpen} onCancel={onCancel} required={true} summary={null} useCase={addTask} />;
};

export default observer(AddTaskModal);
