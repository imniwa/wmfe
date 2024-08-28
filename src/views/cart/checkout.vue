<template>
    <div class="w-full h-[80vh] flex place-content-center items-center">

        <div class="bg-white flex flex-col items-center gap-4" v-if="cartStore.cart.length > 0">
            <h1 class="font-bold">Payment Successful</h1>
            <div class="bg-[#36B37E] rounded-full w-24 h-24 flex place-content-center items-center mx-auto">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.8438 23.7854L0.53125 13.4729L3.47708 10.5271L10.8469 17.8886L10.8438 17.8917L28.5208 0.2146L31.4667 3.16043L13.7896 20.8396L10.8458 23.7833L10.8438 23.7854Z"
                        fill="white" />
                </svg>
            </div>
            <p class="font-bold">{{ new Intl.NumberFormat("id-ID", {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
            }).format(cartStore.total) }}</p>
            <ButtonPrimaryInvert @click="this.$router.push({
                name: 'home'
            })">
                Back to Home
            </ButtonPrimaryInvert>
        </div>

        <div class="bg-white flex flex-col items-center gap-4" v-if="cartStore.cart.length === 0">
            <h1 class="font-bold">Your cart is empty</h1>
            <div class="bg-[#DE350B] text-white rounded-full w-24 h-24 flex place-content-center items-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-x">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </div>
            <ButtonPrimaryInvert @click="this.$router.push({
                name: 'home'
            })">
                Back to Home
            </ButtonPrimaryInvert>
        </div>
    </div>
</template>
<script>
import {
    useCartStore
} from "@/stores/cart.store";
export default {
    name: 'Checkout',
    setup() {
        const cartStore = useCartStore();
        cartStore.sync();
        cartStore.checkout();
        return {
            cartStore
        }
    }
}
</script>