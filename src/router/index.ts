import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/views/indexView.vue';
import { useTokenStore } from '@/store/userstoken';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Homepage/Applayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: IndexView,
      },
      {
        path: 'database',
        name: 'database',
        component: () => import('@/views/list/Knowedge.vue'),
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('@/views/list/Document.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/signup/SignUpView.vue'),
  },
  {
    path: 'x(.*)*',
    name: 'ErrorPage',
    component: () => import('@/views/ErrorPage.vue'),
  },
  {
    path: '/Editor',
    name: 'Editor',
    component: () => import('@/components/MyEditor.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function resetRouter() {
  router.replace({ path: '/login' });
  location.reload();
}

router.beforeEach((to, from, next) => {
  const store = useTokenStore();
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.token.access_token )
    if (!store.token.access_token ) {
     
        next({ name: 'login', query: { redirect: to.fullPath } });
    } 
    else {next();
         
    }
  } 
   
    next();
  
});

export default router;
