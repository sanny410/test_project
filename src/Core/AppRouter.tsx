import {FunctionComponent} from 'react';

import ROUTES from 'Core/Const/Routes';
import HelloWorldPage from 'Pages/HelloWorldPage';
import NotFoundPage from 'Pages/NotFoundPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

/**
 * Роутер приложения
 */
const AppRouter: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.APP.PATH} element={<HelloWorldPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
