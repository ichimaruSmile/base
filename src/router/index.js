import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './../views/home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('./../views/detail.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
