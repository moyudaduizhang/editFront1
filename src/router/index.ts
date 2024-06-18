import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

import IndexView from "@/views/indexView.vue"
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
                    component:IndexView,
                },
                {
                    path:'/database',
                    name:'database',
                    component:()=>import('@/views/list/Knowedge.vue')
                },
                {
                    path:'/document',
                    name:'document',
                    component:()=>import('@/views/list/Document.vue')
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

router.beforeEach((to,from,next)=>{
        if(to.matched.some(r=>r.meta?.requiresAuth)){
            const store=useTokenStore()
            if(store.token){
                next()
            }else{
                next({path:'/login',query:{redirect:to.fullPath}})
            }
        }
})
export default router
