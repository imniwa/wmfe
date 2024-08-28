<template>
  <button :class="`${className} bg-primary px-6 py-2 text-sm rounded-sm text-white`" :type="type">
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
    className: {
      type: String,
    },
  }
}
</script>
