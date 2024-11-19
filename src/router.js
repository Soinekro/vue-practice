import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import BlogView from "./views/BlogView.vue";
import PostView from "./views/PostView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/blog/:post",
    name: "blog-post",
    component: PostView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
