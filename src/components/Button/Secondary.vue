<template>
    <button class="bg-primary/20  font-semibold text-primary px-6 py-2 text-sm rounded-sm hover:bg-primary/40">
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
    }
}
</script>