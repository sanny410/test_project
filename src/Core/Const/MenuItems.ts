import ROUTES from './Routes';

/**
 * Список разделов шапки страницы
 */
const MENU_ITEMS = [
    {
        title: 'Привет',
        route: ROUTES.APP.PATH,
    },
    {
        title: 'Задачи',
        route: ROUTES.APP.TASKS,
    },
];

export default MENU_ITEMS;
