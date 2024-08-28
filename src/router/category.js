// Middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/category/add",
    name: "category.add",
    component: () => import("@/views/category/add.vue"),
    meta: {
      title: "Add Category",
      middleware: [AuthMiddleware],
    },
  },
];
