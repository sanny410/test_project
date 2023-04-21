import {FunctionComponent} from 'react';

import ROUTES from 'Core/Const/Routes';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from 'UI/Pages/NotFoundPage';
import TasksPage from 'UI/Pages/TasksPage';

/**
 * Роутер приложения
 */
const AppRouter: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.APP.TASKS} element={<TasksPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
