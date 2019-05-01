import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/** Route level code-splitting
 *  this generates a separate chunk (component-name.[hash].js) for this route
 *  which is lazy-loaded when the route is visited */
const load = component => () => import(`@/views/${component}.vue`);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [
        {
            path: '/',
            name: 'home',
            component: load('Home'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: load('Dashboard'),
        },
    ],
});
