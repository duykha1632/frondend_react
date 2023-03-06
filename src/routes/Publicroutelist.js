import Home from '../components/frondend/Home';
import About from '../components/frondend/About';
import Contact from '../components/frondend/Contact';
import Page403 from '../components/errors/Page403';
import Page404 from '../components/errors/Page404';
import Register from '../components/frondend/auth/Register';
import Login from '../components/frondend/auth/Login';
import ViewCategory from '../components/frondend/collections/ViewCategory';
import ViewProduct from '../components/frondend/collections/ViewProduct';
import ProductDetail from '../components/frondend/collections/ProducDetail';

const publicRoutesList = [
    { path: '/', exact: true, name: 'Home', component: Home},
    { path: '/about', exact: true, name: 'About', component: About},
    { path: '/contact', exact: true, name: 'Contact', component: Contact},
    { path: '/403', exact: true, name: 'Page403', component: Page403},
    { path: '/404', exact: true, name: 'Page404', component: Page404},
    { path: '/login', exact: true, name: 'Login', component: Login},
    { path: '/register', exact: true, name: 'Register', component: Register},
    { path: '/collections', exact: true, name: 'ViewCategory', component: ViewCategory},
    { path: '/collections/:slug', exact: true, name: 'ViewProduct', component: ViewProduct},
    { path: '/collections/:category/:product', exact: true, name: 'ProductDetail', component: ProductDetail},
];
export default publicRoutesList;