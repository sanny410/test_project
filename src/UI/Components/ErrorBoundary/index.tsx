import React, {FunctionComponent, ReactNode} from 'react';

import {observer} from 'mobx-react';

import './index.scss';

interface IProps {
    children?: ReactNode;
}

const ErrorBoundary: FunctionComponent<IProps> = ({children}) => {
    const [error, setError] = React.useState('');

    const promiseRejectionHandler = React.useCallback((event: any) => {
        setError(event.reason);
    }, []);

    React.useEffect(() => {
        window.addEventListener('unhandledrejection', promiseRejectionHandler);

        return () => {
            window.removeEventListener('unhandledrejection', promiseRejectionHandler);
        };
    }, []);

    if (error !== '') alert(error);

    return <>{children}</>;
};

export default observer(ErrorBoundary);
