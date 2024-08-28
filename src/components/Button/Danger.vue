<template>
  <button class="bg-red-400 px-6 py-2 text-sm rounded-sm text-white hover:bg-red-500" :type="type">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
  }
}
</script>
