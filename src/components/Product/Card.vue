<template>
    <div class="product-card">
        <div class="img-wrapper overflow-clip">
            <img :src="'http://localhost:8080/product/image/'+product.thumbnail" class="w-full h-full object-cover">
        </div>
        <div class="desc text-center">
            <div class="flex place-content-between">
                <div class="text-left pb-8">
                    <p class="capitalize">{{ product.name }}</p>
                    <p class="font-bold text-lg">{{ new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0
                    }).format(product.price) }}</p>
                </div>
                <div>
                    <button type="button" class="danger" @click="deleteProduct">
                        delete
                    </button>
                </div>
            </div>
            <button type="button" class="primary" @click="addProduct2Cart">
                &plus; Add to Cart
            </button>
        </div>
    </div>
</template>
<style scoped>
.product-card {
    @apply flex flex-col rounded-md shadow-md overflow-clip;
}

.product-card .img-wrapper {
    @apply h-40 bg-gray-300;
}

.desc {
    @apply p-4 flex-col;
}

.desc button {
    @apply text-xs rounded-sm text-white;
}

.desc button.primary {
    @apply bg-primary px-4 py-2;
}

.desc button.danger {
    @apply bg-red-500 rounded-md p-2;
}
</style>
<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteProduct(){
            this.$emit('delete', this.product.id);
        },
        addProduct2Cart(){
            this.$emit('add2cart', this.product.id);
        }
    }
}
</script>