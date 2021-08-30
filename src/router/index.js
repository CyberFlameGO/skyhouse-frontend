import { createRouter, createWebHistory } from "vue-router";
import Flipper from "../views/Flipper.vue";
import Profile from "../views/Profile.vue";
import OAuth2Callback from "../views/OAuth2Callback.vue";

const base = "/skyhouse";

const routes = [
  {
    path: base + "/flipper",
    name: "Flipper",
    component: Flipper,
    includeInHeader: true,
  },
  {
    path: base + "/profile",
    name: "Profile",
    component: Profile,
    includeInHeader: false,
  },
  {
    path: base + "/oauth_callback",
    name: "Oauth2Callback",
    component: OAuth2Callback,
    includeInHeader: false,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
