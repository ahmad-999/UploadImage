require('./bootstrap');
import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './views/App';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import 'bootstrap/dist/css/bootstrap.css';

window.Vue = require('vue').default;
Vue.use(VueRouter)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(Toast, {
    timeout: 2000,
    position: POSITION.BOTTOM_LEFT
});

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    components: { App },
    router
});
