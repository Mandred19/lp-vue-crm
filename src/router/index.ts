import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import firebase from 'firebase/app';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Authorization',
    meta: { layout: 'empty' },
    component: () => import('@/views/Authorization/index.vue'),
  },
  {
    path: '/register',
    name: 'Registration',
    meta: { layout: 'empty' },
    component: () => import('@/views/Registration/index.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Categories/index.vue'),
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/History/index.vue'),
  },
  {
    path: '/planing',
    name: 'Planing',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Planing/index.vue'),
  },
  {
    path: '/create-record',
    name: 'Record',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Record/index.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Profile/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Home/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();

  const requireAuth = to.matched.some((item) => item.meta.auth);

  if (requireAuth && !currentUser) {
    next('/login?message=login');
  } else {
    next();
  }
});

export default router;
