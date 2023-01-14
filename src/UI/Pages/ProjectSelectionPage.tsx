import {FunctionComponent, useEffect} from 'react';

import {Button, Select, Space} from 'antd';
import {observer} from 'mobx-react';
import {useCreateProject} from 'Services/Adapters/createProject';
import {useGetProjects} from 'Services/Adapters/getProjects';
import {useProjectStore} from 'Services/Adapters/store';
import PageWrapper from 'UI/Components/PageWrapper';

const ProjectSelectionPage: FunctionComponent = () => {
    const {projects} = useProjectStore();
    const {getProjects} = useGetProjects();
    const {createProject} = useCreateProject();

    const options = projects.map((project) => ({value: project.id, label: project.name}));

    useEffect(() => {
        void getProjects();
    }, []);

    const handleClick = async (): Promise<void> => {
        await createProject({name: '1'});
        await getProjects();
    };

    return (
        <PageWrapper>
            <Space.Compact block>
                <Select options={options} style={{width: '100%'}} />
                <Button onClick={handleClick}>+</Button>
            </Space.Compact>
        </PageWrapper>
    );
};

export default observer(ProjectSelectionPage);
