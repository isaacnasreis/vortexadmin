import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import UsersView from "../views/UsersView.vue";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import { useAuthStore } from "../stores/authStore";
import LoginView from "../views/LoginView.vue";
import SettingsView from "../views/SettingsView.vue";

const routes = [
  { path: "/", component: LoginView },
  { path: "/home", component: HomeView, meta: { requiresAuth: true } },
  {
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  { path: "/users", component: UsersView, meta: { requiresAuth: true } },
  { path: "/products", component: ProductsView, meta: { requiresAuth: true } },
  { path: "/settings", component: SettingsView, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Proteger rotas privadas
router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.user) {
    next("/");
  } else {
    next();
  }
});

export default router;
