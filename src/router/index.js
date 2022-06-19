import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Login from "../views/Login-Page.vue";
import Register from "../views/Register-Page.vue";
import HomePage from "../views/Home-Page.vue";
import ForgotPage from "../views/Forgot-Page.vue";
import UploadPage from "../views/Upload-Page.vue";
import MarketPage from "../views/MarketPlace-Page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/forgot",
    name: "ForgotPage",
    component: ForgotPage,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
    meta: {
      requireJWT: true,
    },
  },
  {
    path: "/upload",
    name: "UploadPage",
    component: UploadPage,
    meta: {
      requireJWT: true,
    },
  },
  {
    path: "/market",
    name: "MarketPage",
    component: MarketPage,
    meta: {
      requireJWT: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireJWT) {
    if (store.getters.getJWT == null) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
  next();
});

export default router;
