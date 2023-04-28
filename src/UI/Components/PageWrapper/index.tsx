import {FunctionComponent, ReactNode} from 'react';

import {Layout, Menu} from 'antd';
import MENU_ITEMS from 'Core/Const/MenuItems';
import {observer} from 'mobx-react';
import {MenuInfo} from 'rc-menu/lib/interface';
import {useNavigate, useLocation} from 'react-router-dom';
import ErrorBoundary from 'UI/Components/ErrorBoundary';

import 'UI/Components/PageWrapper/index.scss';

const {Header, Content, Footer} = Layout;

interface IProps {
    children?: ReactNode;
}

const PageWrapper: FunctionComponent<IProps> = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedMenuItem = location.pathname;
    const menuItems = MENU_ITEMS.map((item) => ({key: item.route, label: item.title}));

    const handleClick = (selectedItem: MenuInfo): void => {
        navigate(selectedItem.key);
    };

    return (
        <ErrorBoundary>
            <Layout className="layout">
                <Header className="layout__header">
                    <Menu
                        theme="light"
                        mode="horizontal"
                        selectedKeys={[selectedMenuItem]}
                        items={menuItems}
                        onClick={handleClick}
                    />
                </Header>
                <Content className="layout__content">
                    <div className="layout__content__container">{children}</div>
                </Content>
                <Footer className="layout__footer"></Footer>
            </Layout>
        </ErrorBoundary>
    );
};

export default observer(PageWrapper);
