import {FunctionComponent} from 'react';

import {ROUTE} from 'Core/Const/Route';
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
                <Route path={ROUTE.HELLO_WORLD.PATH} element={<HelloWorldPage />} />
                <Route path={ROUTE.APP.PATH} element={<HelloWorldPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
