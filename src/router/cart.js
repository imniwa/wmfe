// Middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/cart/index.vue"),
    meta: {
      title: "Cart",
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/cart/checkout",
    name: "cart.checkout",
    component: () => import("@/views/cart/checkout.vue"),
    meta: {
      title: "Checkout",
      middleware: [AuthMiddleware],
    },
  },
];
