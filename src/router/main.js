import HomeLayout from "@/layouts/HomeLayout.vue";
// middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "Home",
      layout: HomeLayout,
      middleware: [AuthMiddleware],
    },
  },
];
