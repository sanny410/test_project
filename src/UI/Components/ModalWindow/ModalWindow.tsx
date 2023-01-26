import React, {FunctionComponent} from 'react';

import {Modal, Form, DatePicker, Select, Input} from 'antd';

interface IProps {
    isModalOpen: boolean;
    onOk: () => void;
    onCancel: () => void;
}

const ModalWindow: FunctionComponent<IProps> = ({isModalOpen, onOk, onCancel}) => {
    const {TextArea} = Input;

    return (
        <Modal title="Добавление задачи" open={isModalOpen} onOk={onOk} onCancel={onCancel}>
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
                            {value: 'high', label: 'Высокий'},
                            {value: 'middle', label: 'Средний'},
                            {value: 'low', label: 'Низкий'},
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Статус" name="status" rules={[{required: true, message: 'Обязательное поле'}]}>
                    <Select
                        defaultValue=""
                        options={[
                            {value: 'queue', label: 'Новая'},
                            {value: 'development', label: 'В процессе'},
                            {value: 'done', label: 'Выполнена'},
                        ]}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalWindow;
