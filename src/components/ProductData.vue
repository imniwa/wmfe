<template>
    <div class="p-4 flex place-content-around items-center" v-if="data.product">
        <div>
            <p class="font-bold">{{ iteration }}.</p>
        </div>
        <div class="flex gap-4 items-center self-start">
            <div class="h-40 w-40 rounded-sm border overflow-clip">
                <img :src="'http://localhost:8080/product/image/' + data.product.thumbnail"
                    class="w-full h-full object-cover">
            </div>
            <div class="font-bold">
                <p class="capitalize">{{ data.product.name }}</p>
                <p>{{ new Intl.NumberFormat("id-ID", {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0
                }).format(data.product.price) }}</p>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <button type="button" class="btn btn-primary rounded-full h-8 w-8 p-1" @click="reduceQuantity">&minus;</button>
            <input type="number" name="" id="" :value="data.quantity" class="font-bold text-center w-16" @change="updateQuantity">
            <button type="button" class="btn btn-primary rounded-full h-8 w-8 p-1" @click="addQuantity">&plus;</button>
        </div>
        <div>
            <p class="font-bold">{{ new Intl.NumberFormat("id-ID", {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
            }).format(data.total_price) }}</p>
        </div>
        <div>
            <button type="button" class="btn bg-red-500 text-white rounded-sm" @click="removeItem">Remove Item</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductData',
    props: {
        iteration: {
            type: Number,
            required: true,
        },
        data: {
            type: Object,
            required: true,
        }
    },
    methods: {
        removeItem() {
            this.$emit('removeItem', this.data.product.id);
        },
        addQuantity() {
            this.$emit('addQuantity', this.data.product.id);
        },
        updateQuantity(el) {
            this.$emit('updateQuantity', this.data.product.id, el.target.value);
        }
        ,
        reduceQuantity() {
            this.$emit('reduceQuantity', this.data.product.id);
        }
    }
}
</script>