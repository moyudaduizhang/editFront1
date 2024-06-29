import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useTokenStore } from "@/store/userstoken";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/dashboard",
      name: "home",
      component: () => import("@/views/Homepage/Applayout.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "/doc",
          name: "doctemp",
          component: () => import("@/views/temp/Doc.vue"),
        },
        {
          path: "/ppt",
          name: "pptttemp",
          component: () => import("@/views/temp/ppt.vue"),
        },
        {
          path: "",
          component: () => import("@/views/Homepage/DocsView.vue"),
        },
        {
          path: "/wangEditor",
          name: "wangEditor",
          component: () => import("@/views/Editor/Editor.vue"),
        },
        {
          path: "/mindmap",
          name: "mindmaptemp",
          component: () => import("@/views/temp/mindmap.vue"),
        },
        {
          path: "/pptEditor",
          name: "pptEditor",
          component: () => import("@/views/Editor/ppt.vue"),
        },
        {
          path: "/person",
          name: "person",
          component: () => import("@/views/Person.vue"),
        },
        {
          path: "/EditPerson",
          name: "EditPerson",
          component: () => import("@/views/EditPerson.vue"),
        },
        {
          path: "/Editppt",
          name: "Editppt",
          component: () => import("@/views/Editor/ppt.vue"),
        },
        {
          path: "/Editmindmap",
          name: "Editmindmap",
          component: () => import("@/views/Editor/mindmap/mindmap.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "Index",
      component: () => import("@/views/Homepage/pages/Index/Index.vue"),
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("@/views/Setting.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/signup/SignUpView.vue"),
    },
    {
      path: "/:xxx(.*)*",
      name: "ErrorPage",
      component: () => import("@/views/ErrorPage.vue"),
    },
  ],
});

//创建路由实例

export function resetRouter() {
  router.replace({ path: "/login" });
  location.reload();
}
//每次路由位置发生变化时要做的事：验证token

// router.beforeEach((to, from, next) => {
//       const store = useTokenStore();
//
//       if (to.matched.some(record => record.meta.requiresAuth)) {
//         console.log(store.token.access_token )
//         if (!store.token.access_token ) {
//
//             next({ name: 'login', query: { redirect: to.fullPath } });
//         }
//         else {next();
//
//         }
//       }
//
//         next();
//
//     });
export default router;
