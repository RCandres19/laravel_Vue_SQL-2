import { createRouter, createWebHistory } from "vue-router";
import Formulariodematusalen from "@/components/Formulariodematusalen.vue";
import UsuarioConfirmado from "@/components/UsuarioConfirmado.vue";

const routes = [
  { path: "/", component: Formulariodematusalen },
  { path: "/usuario/:id", component: UsuarioConfirmado, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
