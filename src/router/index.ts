import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import { useTokenStore } from '@/store/userstoken';

const router=createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: ()=>import('@/views/Homepage/Applayout.vue'),
            meta:{requiresAuth:true},
            children:[
                {
                    path:'',
                    component:()=>import('@/views/DocsView.vue'),
                },
                {
                    path:'/document',
                    name:'document',
                    component:()=>import('@/views/list/Document.vue')
                },
                {
                    path:'/wangEditor',
                    name:'wangEditor',
                    component:()=>import('@/views/Editor/Editor.vue')
                },
                {
                    path:'/person',
                    name:'person',
                    component:()=>import('@/views/Person.vue')
                },
                {
                    path:'/EditPerson',
                    name:'EditPerson',
                    component:()=>import('@/views/EditPerson.vue')
                },
            ]
        },
        {
            path:'/setting',
            name:'setting',
            component:()=>import('@/views/Setting.vue')
        },
        {
            path:'/login',
            name:'login',
            component:()=>import('@/views/login/LoginView.vue')
        },

        {
            path:'/register',
            name:'register',
            component:()=>import('@/views/signup/SignUpView.vue')
        },
        {
            path:"/:xxx(.*)*",
            name:"ErrorPage",
            component:()=>import('@/views/ErrorPage.vue')
        },
    ]
})


//创建路由实例


export function resetRouter() {
    router.replace({path: '/login'});
    location.reload();
}
//每次路由位置发生变化时要做的事：验证token


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
export default router
