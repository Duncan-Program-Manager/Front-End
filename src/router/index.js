import Vue from "vue";
import VueRouter from "vue-router";
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
  },
  {
    path: "/upload",
    name: "UploadPage",
    component: UploadPage,
  },
  {
    path: "/market",
    name: "MarketPage",
    component: MarketPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
