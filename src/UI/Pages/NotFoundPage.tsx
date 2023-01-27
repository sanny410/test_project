import {FunctionComponent} from 'react';

import {observer} from 'mobx-react';
import NotFound from 'UI/Components/NotFound';
import PageWrapper from 'UI/Components/PageWrapper';

const NotFoundPage: FunctionComponent = () => {
    return (
        <PageWrapper>
            <NotFound />
        </PageWrapper>
    );
};

export default observer(NotFoundPage);
