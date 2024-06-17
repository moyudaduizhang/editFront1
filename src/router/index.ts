import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

import IndexView from "@/views/indexView.vue"
const router=createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: ()=>import('@/views/Homepage/Applayout.vue'),
            children:[
                {
                    path:'',
                    component:IndexView,
                }
            ]
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
        {
            path:'/Editor',
            name:'Editor',
            component:()=>import('@/components/MyEditor.vue')
        }
    
    ]
})


//创建路由实例


export function resetRouter() {
    router.replace({path: '/login'});
    location.reload();
}

export default router
