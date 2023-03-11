import { createWebHistory, createRouter } from "vue-router";
import MainView from "@/components/MainView.vue";
import Slots from "@/components/Slots/SlotView.vue";
import ProfileView from "@/components/ProfileView.vue";
import ErrorPage from "@/components/ErrorPage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: MainView,
  },
  {
    name: "Slot",
    path: "/slot",
    component: Slots,
  },
  {
    name: "Profile",
    path: "/profile/:name",
    component: ProfileView,
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
