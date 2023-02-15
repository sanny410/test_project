import React, {FunctionComponent} from 'react';

import 'UI/Components/ModalForm/index.scss';
import {Modal, Form, DatePicker, Select, Input, Button, Space} from 'antd';
import {ETaskPriority, ETaskStatus, TaskTitle, TaskDescription, TaskExpirationDate} from 'Domain/task';
import {observer} from 'mobx-react';

interface IProps {
    isModalOpen: boolean;
    onCancel: () => void;
    required: boolean;
    summary: FormInput;
    onSubmit: (task: FormInput) => void;
}

export interface FormInput {
    title: TaskTitle;
    description: TaskDescription;
    expirationDate: TaskExpirationDate;
    status: ETaskStatus;
    priority: ETaskPriority;
}

const ModalForm: FunctionComponent<IProps> = ({isModalOpen, onCancel, required, summary, onSubmit}) => {
    const [form] = Form.useForm();

    const handleReset = (): void => {
        form.resetFields();
    };

    return (
        <Modal title="Добавление задачи" open={isModalOpen} onCancel={onCancel} footer={null}>
            <Form
                name="basic"
                form={form}
                onFinish={onSubmit}
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 800}}
                initialValues={{remember: false}}
            >
                <Form.Item
                    label="Название"
                    name="title"
                    rules={[{required, message: 'Обязательное поле'}]}
                    initialValue={summary.title}
                >
                    <Input type="text" />
                </Form.Item>
                <Form.Item
                    label="Описание"
                    name="description"
                    rules={[{required, message: 'Обязательное поле'}]}
                    initialValue={summary.description}
                >
                    <Input type="text" />
                </Form.Item>
                <Form.Item
                    label="Срок исполнения"
                    name="expirationDate"
                    rules={[{required, message: 'Обязательное поле'}]}
                    initialValue={summary.expirationDate}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Приоритет" name="priority" rules={[{required, message: 'Обязательное поле'}]}>
                    <Select
                        options={[
                            {value: ETaskPriority.HIGH, label: 'Высокий'},
                            {value: ETaskPriority.MIDDLE, label: 'Средний'},
                            {value: ETaskPriority.LOW, label: 'Низкий'},
                        ]}
                        defaultValue={summary.priority}
                    />
                </Form.Item>
                <Form.Item label="Статус" name="status" rules={[{required, message: 'Обязательное поле'}]}>
                    <Select
                        options={[
                            {value: ETaskStatus.QUEUE, label: 'Новая'},
                            {value: ETaskStatus.DEVELOPMENT, label: 'В процессе'},
                            {value: ETaskStatus.DONE, label: 'Выполнена'},
                        ]}
                        defaultValue={summary.status}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Space wrap>
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                        <Button onClick={handleReset}>Сбросить</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default observer(ModalForm);
