import {FunctionComponent} from 'react';

import NotFound from 'Components/NotFound';
import PageWrapper from 'Components/PageWrapper';

const NotFoundPage: FunctionComponent = () => {
    return (
        <PageWrapper>
            <NotFound />
        </PageWrapper>
    );
};

export default NotFoundPage;
