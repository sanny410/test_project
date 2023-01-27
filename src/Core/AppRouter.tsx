import {FunctionComponent} from 'react';

import ROUTES from 'Core/Const/Routes';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HelloWorldPage from 'UI/Pages/HelloWorldPage';
import NotFoundPage from 'UI/Pages/NotFoundPage';
import Tasks from 'UI/Pages/TasksPage';

/**
 * Роутер приложения
 */
const AppRouter: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.APP.PATH} element={<HelloWorldPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
