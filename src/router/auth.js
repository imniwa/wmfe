import AuthLayout from '@/layouts/AuthLayout.vue';
// middleware
import GuestMiddleware from '@/middleware/guest.middleware.js';

export default [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/login/index.vue'),
    meta: {
      title: 'Login',
      layout: AuthLayout,
      middleware: [GuestMiddleware],
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/register/index.vue'),
    meta: {
      title: 'Register',
      layout: AuthLayout,
      middleware: [GuestMiddleware],
    },
  }
]
