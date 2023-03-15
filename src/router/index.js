import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/starting",
    name: "Starting",
    component: () => import("../views/Starting"),
  },
  {
    path: "/ended",
    name: "Ended",
    component: () => import("../views/Ended"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp"),
  },
  {
    path: "/signup_account",
    name: "SignUpAccountInfo",
    component: () => import("../views/SignUpAccountInfo"),
  },
  {
    path: "/signup_personal",
    name: "SignUpPersonalInfo",
    component: () => import("../views/SignUpPersonalInfo"),
  },
  {
    path: "/signup_check",
    name: "SignUpCheck",
    component: () => import("../views/SignUpCheckInfo"),
  },
  {
    path: "/signup_finished",
    name: "SignUpFinished",
    component: () => import("../views/SignUpFinished"),
  },
  {
    path: "/signup_policy",
    name: "Policy",
    component: () => import("../views/Policy"),
  },
  {
    path: "/forgetpassword",
    name: "ForgetPassword",
    component: () => import("../views/ForgetPassword"),
  },
  {
    path: "/resetpassword",
    name: "ResetPassword",
    component: () => import("../views/ResetPassword"),
  },
  {
    path: "/user/",
    name: "User",
    component: () => import("../views/User"),
    children: [
      {
        path: "/user/landing",
        component: () => import("../views/UserLanding"),
      },
      {
        path: "/user/exhibition_list",
        component: () => import("../views/ExhibitionList"),
      },
      {
        path: "/user/exhibition",
        component: () => import("../views/Exhibition"),
      },
      {
        path: "/user/search",
        component: () => import("../views/Search"),
      },
      {
        path: "/user/q&a",
        component: () => import("../views/QA"),
      },
    ],
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
