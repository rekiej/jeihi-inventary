import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login/Login.vue";
import Inventary from "@/components/Tables/Inventary.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/inventary", component: Inventary },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;