import config from '~/config';

//pages
import Cart from '~/Page/Cart/Cart';
import Connect from '~/Page/Connect/Connect';
import Home from '~/Page/Home/Home';
import Login from '~/Page/Login/Login';
import About from '~/Page/About/About';
import Product from '~/Page/Product/Product';
import Profile from '~/Page/Profile/Profile';

//layouts
import PageHeading from '~/layouts/DefaultLayout/PageHeading';

import images from '~/assets/images';
import Test from '~/Page/Test/Test';
import Register from '~/Page/Register/Register';

interface Route {
    path: string;
    component: () => JSX.Element;
    layout?: any | null;
    pageImg?: any;
    title?: string;
    desc?: string;
}

type RoutesType = Route[];

const publicRoutes: RoutesType = [
    {
        path: config.routes.cart,
        component: Cart,
        layout: PageHeading,
    },
    {
        path: config.routes.connect,
        component: Connect,
        layout: PageHeading,
        pageImg: images.connectPageHeading,
        title: 'LIÊN HỆ',
        desc: 'Please fill the form to submit your feedback to Gong Cha',
    },
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.register,
        component: Register,
        layout: null,
    },
    {
        path: config.routes.about,
        component: About,
        layout: PageHeading,
        pageImg: images.aboutPageHeading,
        title: 'GIỚI THIỆU',
        desc: 'Good Tea - Great Taste',
    },
    {
        path: config.routes.product,
        component: Product,
        layout: PageHeading,
        pageImg: images.productPageHeading,
        title: 'MENU HIỆN TẠI',
        desc: 'Giới thiệu thức uống hấp dẫn và đa dạng từ Gong Cha',
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.test,
        component: Test,
        layout: null,
    },
];

const privateRouters: RoutesType = [];

export { publicRoutes, privateRouters };
