<template>

  <div class="mx-auto h-[80vh] flex items-center">
    <div class="card">
      <h1 class="text-lg">Login</h1>
      <form action="" @submit.prevent="login">

        <div class="form-wrapper">
          <label for="username" class="label">Username</label>
          <div class="form-control">
            <input v-model="formData.email" type="text" id="username" class="" placeholder="Enter username"
              autocomplete="username" required>
          </div>
        </div>

        <div class="form-wrapper">
          <label for="password" class="label">Password</label>
          <div class="form-control">
            <input v-model="formData.password" type="password" id="password" class="" placeholder="Enter password"
              autocomplete="current-password" required>
            <button class="eye" type="button" @click="toggleEye">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.00001 9.66667C5.90659 9.68028 4.82448 9.4443 3.83601 8.97667C3.06981 8.60282 2.38178 8.08651 1.80868 7.45533C1.20163 6.80275 0.723655 6.04111 0.40001 5.21067L0.333344 5L0.403344 4.78933C0.72722 3.95962 1.20417 3.19818 1.80934 2.54467C2.38224 1.91354 3.07004 1.39724 3.83601 1.02333C4.82449 0.555727 5.9066 0.319742 7.00001 0.333335C8.09342 0.319765 9.17553 0.555749 10.164 1.02333C10.9302 1.39716 11.6183 1.91346 12.1913 2.54467C12.7995 3.19637 13.2777 3.95824 13.6 4.78933L13.6667 5L13.5967 5.21067C12.5508 7.93319 9.91614 9.7129 7.00001 9.66667ZM7.00001 1.66667C4.73059 1.59555 2.64762 2.91673 1.74468 5C2.64748 7.0834 4.73054 8.40464 7.00001 8.33333C9.26938 8.40426 11.3523 7.08315 12.2553 5C11.3536 2.91572 9.26984 1.59405 7.00001 1.66667ZM7.00001 7C6.03823 7.00637 5.20625 6.33157 5.01399 5.38918C4.82172 4.44679 5.32286 3.50002 6.21027 3.12911C7.09768 2.7582 8.1235 3.06676 8.65904 3.86567C9.19458 4.66459 9.09026 5.73072 8.41001 6.41067C8.03756 6.78751 7.52985 6.99971 7.00001 7Z"
                  fill="#7A869A" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <ButtonPrimary :type="'submit'">
            Login
          </ButtonPrimary>
        </div>
      </form>
    </div>
  </div>

</template>

<style>
.card {
  @apply bg-white p-8 w-[384px] mx-auto rounded-md drop-shadow-md flex flex-col gap-2 text-center;
}

.card h1 {
  color: #303030;
}

form {
  @apply flex flex-col gap-4;
}

form label {
  @apply text-xs text-[#303030] text-left;
}

form .form-wrapper {
  @apply flex flex-col gap-1;
}

form .form-control {
  @apply bg-[#FAFBFC] border border-[#DFE1E6] rounded-sm items-center relative;
}

form .form-control input {
  @apply w-full bg-transparent focus-visible:outline-primary p-2 focus-visible:bg-white;
}

form .form-control .eye {
  @apply absolute right-0 top-0 px-3 py-4;
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
        email: "",
        password: "",
      }
    }
  },
  methods: {
    login() {
      this.authStore.login(this.formData)
    },
    toggleEye() {
      const password = document.getElementById("password");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    }
  }
}

</script>
