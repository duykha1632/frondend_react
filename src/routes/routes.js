import Dashboard from '../components/admin/Dashboard'
import Profile from '../components/admin/Profile';

import AddCategory from '../components/admin/Category/AddCategory';
import ViewCategory from '../components/admin/Category/ViewCategory';
import EditCategory from '../components/admin/Category/EditCategory';
import GarbageCategory from '../components/admin/Category/GarbageCategory';

import ViewProduct from '../components/admin/Product/ViewProduct';
import AddProduct from '../components/admin/Product/AddProduct';
import EditProduct from '../components/admin/Product/EditProduct';

import Order from '../components/admin/order/Order';

const routes = [
    { path: '/admin', exact: true, name: 'Admin'},
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile},
    // category
    { path: '/admin/Add_categories', exact: true, name: 'AddCategory', component: AddCategory},
    { path: '/admin/categories', exact: true, name: 'ViewCategory', component: ViewCategory},
    { path: '/admin/edit_category/:id', exact: true, name: 'EditCategory', component: EditCategory},
    { path: '/admin/garbage_categories', exact: true, name: 'GarbageCategory', component: GarbageCategory},

    // product
    { path: '/admin/product', exact: true, name: 'ViewProdcut', component: ViewProduct},
    { path: '/admin/Add_product', exact: true, name: 'AddProduct', component: AddProduct},
    { path: '/admin/edit_product/:id', exact: true, name: 'EditProduct', component: EditProduct},


    { path: '/admin/orders', exact: true, name: 'Order', component: Order},



];
export default routes;