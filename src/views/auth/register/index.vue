<template>

  <div class="mx-auto h-[80vh] flex items-center">
    <div class="card">
      <h1 class="text-lg">Register</h1>
      <form action="" @submit.prevent="register">

        <div class="form-wrapper">
          <label for="name" class="label">Name</label>
          <div class="form-control">
            <input v-model="formData.name" type="name" id="name" placeholder="John Doe" required>
          </div>
        </div>

        <div class="form-wrapper">
          <label for="email" class="label">Email address</label>
          <div class="form-control">
            <input v-model="formData.email" type="email" id="email" placeholder="john.doe@company.com" required>
          </div>
        </div>

        <div class="form-wrapper">
          <label for="password" class="label">Password</label>
          <div class="form-control">
            <input v-model="formData.password" type="password" id="password" placeholder="•••••••••" required>
          </div>
        </div>

        <div>
          <ButtonPrimary :type="'submit'">
            Register
          </ButtonPrimary>

          <ButtonPrimaryInvert @click="$router.push('/login')" class="ml-3">
            Login
          </ButtonPrimaryInvert>
        </div>
      </form>
    </div>
  </div>

</template>
<style>
body {
  background: #1963D2;
}

@media (min-width: 640px) {
  body {
    background: linear-gradient(#1963D2 50%, #ffffff 0%);
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
}

.card {
  @apply bg-white p-8 w-[384px] mx-auto rounded-md drop-shadow-md flex flex-col gap-2 text-center;

  h1 {
    color: #303030;
  }

  form {
    @apply flex flex-col gap-4;

    label {
      @apply text-xs text-[#303030] text-left;
    }

    .form-wrapper {
      @apply flex flex-col gap-1;
    }

    .form-control {
      @apply bg-[#FAFBFC] border border-[#DFE1E6] rounded-sm items-center relative;

      input {
        @apply w-full bg-transparent focus-visible:outline-primary p-2 focus-visible:bg-white;
      }

      .eye {
        @apply absolute right-0 top-0 px-3 py-4;
      }
    }
  }
}
</style>

<script>
import {
  useAuthStore
} from "@/stores/auth.store.js"

export default {
  data() {
    return {
      authStore: useAuthStore(),
      formData: {
        name: null,
        email: null,
        password: null,
      }
    }
  },
  methods: {
    async register() {
      await this.authStore.register(this.formData)
    }
  }
}

</script>
