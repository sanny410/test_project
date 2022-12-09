import {FunctionComponent} from 'react';

import HelloWorld from 'Components/HelloWorld';
import PageWrapper from 'Components/PageWrapper';

const HelloWorldPage: FunctionComponent = () => {
    return <PageWrapper content={<HelloWorld />}></PageWrapper>;
};

export default HelloWorldPage;
