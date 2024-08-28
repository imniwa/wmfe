<template>
    <button :class="`${className} bg-white  font-semibold text-primary border border-primary px-6 py-2 text-sm rounded-sm hover:bg-primary/10`" :type="type">
        <slot />
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