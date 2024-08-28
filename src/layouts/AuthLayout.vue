<template>
  <div class="bg-auth"></div>
  <main class="container mx-auto">
    <div class="flex text-white place-content-between py-8">
      <LogoPrimary />
      <p class="font-rubik">Call Us +62 817-1902-092</p>
    </div>
    <slot />
  </main>
</template>

<style>
  .bg-auth {
    background: linear-gradient(#1963D2 50%, #ffffff 0%);
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
</style>

<script>
export default {
  name: 'AuthLayout',
};
</script>