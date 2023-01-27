import React, {FunctionComponent} from 'react';

import 'UI/Components/ModalWindow/index.scss';
import {Modal, Form, DatePicker, Select, Input, Button} from 'antd';
import {ETaskPriority, ETaskStatus} from 'Domain/task';
import {observer} from 'mobx-react';

interface IProps {
    isModalOpen: boolean;
    onOk: () => void;
    onCancel: () => void;
}

const ModalWindow: FunctionComponent<IProps> = ({isModalOpen, onOk, onCancel}) => {
    const {TextArea} = Input;

    return (
        <Modal title="Добавление задачи" open={isModalOpen} onOk={onOk} onCancel={onCancel} footer={null}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 800}}
                initialValues={{remember: true}}
            >
                <Form.Item label="Название" name="title" rules={[{required: true, message: 'Обязательное поле'}]}>
                    <Input type="text" />
                </Form.Item>
                <Form.Item label="Описание" name="description" rules={[{required: true, message: 'Обязательное поле'}]}>
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    label="Срок исполнения"
                    name="expirationDate"
                    rules={[{required: true, message: 'Обязательное поле'}]}
                >
                    <DatePicker showTime />
                </Form.Item>
                <Form.Item label="Приоритет" name="priority" rules={[{required: true, message: 'Обязательное поле'}]}>
                    <Select
                        defaultValue=""
                        options={[
                            {value: ETaskPriority.HIGH, label: 'Высокий'},
                            {value: ETaskPriority.MIDDLE, label: 'Средний'},
                            {value: ETaskPriority.LOW, label: 'Низкий'},
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Статус" name="status" rules={[{required: true, message: 'Обязательное поле'}]}>
                    <Select
                        defaultValue=""
                        options={[
                            {value: ETaskStatus.QUEUE, label: 'Новая'},
                            {value: ETaskStatus.DEVELOPMENT, label: 'В процессе'},
                            {value: ETaskStatus.DONE, label: 'Выполнена'},
                        ]}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Добавить задачу
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default observer(ModalWindow);
