import {FunctionComponent} from 'react';

import HelloWorld from 'UI/Components/HelloWorld';
import PageWrapper from 'UI/Components/PageWrapper';

const HelloWorldPage: FunctionComponent = () => {
    return (
        <PageWrapper>
            <HelloWorld />
        </PageWrapper>
    );
};

export default HelloWorldPage;
