<template>
  <Navbar />
  <main class="container mx-auto py-4">
    <slot />
  </main>
</template>

<script>
import {
  useAuthStore
} from "@/stores/auth.store.js"

export default {
  name: 'DefaultLayout',
  data() {
    return {
      authStore: useAuthStore()
    }
  }
};
</script>