import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import BlogView from "./views/BlogView.vue";
import PostView from "./views/PostView.vue";
import UserPostView from "./views/UserPostView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/nosotros",
    name: "about",
    component: AboutView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/post",
    redirect: { name: "blog" },
  },
  {
    path: "/blog/:post",
    name: "blog-post",
    component: PostView,
  },
  {
    path: "/user/:user/post/:post",
    name: "user-post",
    component: UserPostView,
  },

  //coincidencia en rutas dinámicas---------------------------------
  {
    path: "/compras/:orderId(\\d+)", //el orderId es un parametro dinamico que solo acepta numeros
    name: "Order",
    component: () => import("./views/OrderView.vue"),
  },
  {
    path: "/compras/:productName", //el productName es un parametro dinamico que acepta cualquier cosa
    name: "Product",
    component: () => import("./views/ProductView.vue"),
  },
  // ----------------------------------------------------------------
  //parametros opcionales--------------------------------------------
  {
    path: "/users/:user?",
    name: "users",
    component: () => import("./views/UserView.vue"),
    props: true,
    children: [
      {
        path: "",
        name: "users-index",
        component: () => import("./views/users/UserIndexView.vue"),
      },
      {
        path: "profile",
        name: "profile-user",
        component: () => import("./views/users/UserProfileView.vue"),
      },
      {
        path: "posts",
        name: "posts-user",
        component: () => import("./views/users/UserPostsView.vue"),
      },
    ],
  },
  {
    path: "/tienda", //el productName es un parametro dinamico que acepta cualquier cosa
    name: "Tienda",
    component: () => import("./components/MyTienda.vue"),
  },
  // 404
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
