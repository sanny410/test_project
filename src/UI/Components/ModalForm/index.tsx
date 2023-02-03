import React, {FunctionComponent} from 'react';

import 'UI/Components/ModalForm/index.scss';
import {Modal, Form, DatePicker, Select, Input, Button, Space} from 'antd';
import {DATE_FORMAT} from 'Core/Const/DateTimeFormat';
import dayjs from 'dayjs';
import {ETaskPriority, ETaskStatus, TaskCreatingSummary} from 'Domain/task';
import {observer} from 'mobx-react';

interface IProps {
    isModalOpen: boolean;
    onCancel: () => void;
    required: boolean;
    useCase: (task: TaskCreatingSummary) => Promise<void>;
    summary: TaskCreatingSummary | null;
}

const ModalForm: FunctionComponent<IProps> = ({isModalOpen, onCancel, required, summary, useCase}) => {
    const {TextArea} = Input;
    const [form] = Form.useForm();

    const onReset = (): void => {
        form.resetFields();
    };

    const onSubmit = async (task: TaskCreatingSummary): Promise<void> => {
        await useCase(task);
        onReset();
        onCancel();
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
                initialValues={{remember: true}}
            >
                <Form.Item
                    label="Название"
                    name="title"
                    rules={[{required, message: 'Обязательное поле'}]}
                    initialValue={summary !== null ? summary.title : ''}
                >
                    <Input type="text" />
                </Form.Item>
                <Form.Item
                    label="Описание"
                    name="description"
                    rules={[{required, message: 'Обязательное поле'}]}
                    initialValue={summary !== null ? summary.description : ''}
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    label="Срок исполнения"
                    name="expirationDate"
                    rules={[{required, message: 'Обязательное поле'}]}
                    initialValue={summary !== null ? dayjs(summary.expirationDate, DATE_FORMAT) : dayjs(new Date())}
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
                        value={summary != null ? summary.priority : ''}
                    />
                </Form.Item>
                <Form.Item label="Статус" name="status" rules={[{required, message: 'Обязательное поле'}]}>
                    <Select
                        options={[
                            {value: ETaskStatus.QUEUE, label: 'Новая'},
                            {value: ETaskStatus.DEVELOPMENT, label: 'В процессе'},
                            {value: ETaskStatus.DONE, label: 'Выполнена'},
                        ]}
                        value={summary != null ? summary.status : ''}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Space wrap>
                        <Button type="primary" htmlType="submit">
                            Отправить
                        </Button>
                        <Button onClick={onReset}>Сбросить</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default observer(ModalForm);
