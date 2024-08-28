<template>
    <div class="sticky top-0 bg-white">
        <Navbar />
        <div class="container mx-auto py-8 flex gap-2 justify-end">

            <ButtonSecondary type="button" @click="this.$router.push({
                name: 'category.add'
            })">
                &plus; Add Category
            </ButtonSecondary>

            <ButtonSecondary type="button" @click="this.$router.push({
                name: 'product.add'
            })">
                &plus; Add Products
            </ButtonSecondary>

            <ButtonPrimary type="button" @click="this.$router.push({
                name: 'cart'
            })">
                Cart
            </ButtonPrimary>

        </div>
        <div id="category-tab" class="container mx-auto flex gap-4">
            <button :class="this.$router.currentRoute.value.query.category_id ?? 'active' " @click="this.$router.push({
                name: 'home'
            })">
                ALL
            </button>
            <button :class="this.$router.currentRoute.value.query.category_id === category.id ? 'active' : ''"
                v-for="category in categoryStore.categories" @click="this.$router.push({
                    name: 'home',
                    query: {
                        category_id: category.id
                    },
                })">
                {{ category.name }}
            </button>
        </div>
        <hr class="container mx-auto rounded-md border-t-3">
    </div>
    <main class="container mx-auto py-4 overflow-y-clip">
        <slot />
    </main>
    <div class="container mx-auto flex justify-end pb-8">
        <button type="button" class="bg-primary px-4 py-3 text-sm rounded-md text-white">
            Total Bill: {{ new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0
            }).format(cartStore.total) }}
        </button>
    </div>
</template>
<style>
#category-tab button {
    padding: .5rem .5rem;
    color: #7A869A;
}

#category-tab button.active {
    @apply text-primary font-semibold border-b-primary border-b-2;
}
</style>
<script>
import {
    useAuthStore
} from "@/stores/auth.store.js"
import {
    useCategoryStore
} from "@/stores/category.store.js"
import {
    useCartStore
} from "@/stores/cart.store.js"

export default {
    name: 'UserLayout',
    setup() {
        const categoryStore = useCategoryStore();
        categoryStore.sync();
        const cartStore = useCartStore();
        cartStore.sync();
        return {
            categoryStore,
            cartStore,
        }
    },
    mounted() {
    },
    data() {
        return {
            authStore: useAuthStore(),
        }
    },
    methods: {
        logout() {
            this.authStore.logout()
        },
    },
};
</script>