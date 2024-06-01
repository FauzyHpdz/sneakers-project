import { createRouter, createWebHistory } from "vue-router";
import ChildComponent from "@/components/ChildComponent.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/child",
      name: "child",
      component: ParentComponent,
    },
  ],
});

export default router;
