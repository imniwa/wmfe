<template>
    <div class="container mx-auto">
        <div class="flex place-content-evenly font-bold py-8 border-b mb-4">
            <p>Product</p>
            <p>Qty</p>
            <p>Sub Total</p>
        </div>
        <div class="flex flex-col gap-4">
            <div class="text-center" v-if="cartStore.cart.length === 0">
                No Data.
            </div>
            <ProductData v-for="(data, i) in cartStore.cart" :key="data.id" :iteration="i + 1" :data="data"
                @removeItem="removeItem" 
                @addQuantity="addQuantity"
                @updateQuantity="updateQuantity"
                @reduceQuantity="reduceQuantity" />
        </div>
        <div class="flex justify-end py-8">
            <h1 class="font-bold flex gap-16">
                <span>Total</span>
                <span>{{ new Intl.NumberFormat("id-ID", {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0
                }).format(cartStore.total) }}</span>
            </h1>
        </div>
        <div class="flex justify-end gap-4">
            <ButtonPrimaryInvert @click="this.$router.push({
                name: 'home'
            })">
                Back to Home
            </ButtonPrimaryInvert>
            <ButtonPrimary @click="this.$router.push({
                name: 'cart.checkout'
            })">
                Pay Bill
            </ButtonPrimary>
        </div>
    </div>
</template>
<script>
import {
    useCartStore
} from "@/stores/cart.store";
export default {
    name: 'Cart',
    setup() {
        const cartStore = useCartStore();
        cartStore.sync();
        return {
            cartStore
        }
    },
    methods: {
        removeItem(id) {
            this.cartStore.removeItem(id);
        },
        addQuantity(id) {
            this.cartStore.addQuantity(id);
        },
        updateQuantity(id, val) {
            this.cartStore.updateQuantity(id, val);
        },
        reduceQuantity(id) {
            this.cartStore.reduceQuantity(id);
        }
    }
}
</script>