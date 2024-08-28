// Middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/product/add",
    name: "product.add",
    component: () => import("@/views/product/add.vue"),
    meta: {
      title: "Add Product",
      middleware: [AuthMiddleware],
    },
  },
];
