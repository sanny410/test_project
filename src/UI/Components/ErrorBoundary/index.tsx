import {FunctionComponent, ReactNode, useEffect, useState, useCallback} from 'react';

import {message} from 'antd';
import {observer} from 'mobx-react';

import './index.scss';

interface IProps {
    children?: ReactNode;
}

const ErrorBoundary: FunctionComponent<IProps> = ({children}) => {
    const [error, setError] = useState('');
    const [messageApi, contextHolder] = message.useMessage();

    const errorOpen = (): void => {
        void messageApi.open({
            type: 'error',
            content: `${error}`,
        });
    };

    const promiseRejectionHandler = useCallback((event: any) => {
        setError(event.reason);
    }, []);

    useEffect(() => {
        window.addEventListener('unhandledrejection', promiseRejectionHandler);

        return () => {
            window.removeEventListener('unhandledrejection', promiseRejectionHandler);
        };
    }, []);

    useEffect(() => {
        error !== '' && errorOpen();
    }, [error]);

    return (
        <div>
            {contextHolder}
            {children}
        </div>
    );
};

export default observer(ErrorBoundary);
