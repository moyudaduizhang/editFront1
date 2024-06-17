import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import Applayout from "@/components/layout/Applayout.vue"
import IndexView from "@/views/indexView.vue"
// createRouter 创建路由实例，===> new VueRouter()
// history 是路由模式，hash模式，history模式
// createWebHistory() 是开启history模块
// createWebHashHistory() 是开启hash模式
const routes = [
    {
        path: '/',
        name: "home",
        component: Applayout,
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

]

//创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[],
    scrollBehavior: () => ({left: 0, top: 0})
})

export function resetRouter() {
    router.replace({path: '/login'});
    location.reload();
}

export default router
