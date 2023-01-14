import {FunctionComponent} from 'react';

import ROUTES from 'Core/Const/Routes';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from 'UI/Pages/NotFoundPage';
import ProjectSelectionPage from 'UI/Pages/ProjectSelectionPage';

/**
 * Роутер приложения
 */
const AppRouter: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.APP.PATH} element={<ProjectSelectionPage />} />
                <Route path={ROUTES.PROJECTS.PATH} element={<ProjectSelectionPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
