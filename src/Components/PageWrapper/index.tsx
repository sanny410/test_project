import {FunctionComponent} from 'react';

import {Layout, Menu} from 'antd';

import './index.less';

const {Header, Content, Footer} = Layout;

interface IProps {
    content: React.ReactElement;
}

const PageWrapper: FunctionComponent<IProps> = ({content}) => {
    return (
        <Layout className="layout">
            <Header className="layout-header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </Header>
            <Content className="layout-content">
                <div className="site-layout-content">{content}</div>
            </Content>
            <Footer className="layout-footer"></Footer>
        </Layout>
    );
};

export default PageWrapper;
