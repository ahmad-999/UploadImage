import Home from './layouts/Home';
import AdminHome from './layouts/AdminHome';
import Login from './layouts/Login.vue';
export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,   
    },

    {
        path: '/admin',
        name: 'admin-home',
        component: AdminHome,

    },
    {
        path: '/admin/login',
        name: 'login',
        component: Login
    },



];