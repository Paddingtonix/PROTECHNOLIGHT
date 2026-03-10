export const LINKS_MENU = [
    {
        id: 'main',
        name: 'Главная',
        href: '/'
    },
    {
        id: 'direction',
        name: 'Направления',
        href: '/direction'
    },
    {
        id: 'customers',
        name: 'Заказчики',
        href: '/customers'
    },
    {
        id: 'contact',
        name: 'Связаться',
        href: '/contacts'
    },
]

export const BASE_PATH = process.env.NODE_ENV === "production"
  ? "/PROTECHNOLIGHT"
  : ""
