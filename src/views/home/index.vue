<template>
  <div class="w-full grid grid-cols-5 gap-10" v-if="productStore.products.length > 0">
    <ProductCard v-for="product in productStore.products" :key="product.id" :product="product" @delete="deleteProduct" @add2cart="addProduct2Cart"/>
  </div>
  <div class="text-center" v-if="productStore.products.length === 0">
    <p>No Product.</p>
  </div>
</template>
<script>
import {
  useProductStore
} from "@/stores/product.store";
import {
  useCartStore
} from "@/stores/cart.store";

export default {
  name: 'ProductList',
  setup() {
    const productStore = useProductStore();
    productStore.sync();
    const cartStore = useCartStore();
    return {
      productStore,
      cartStore
    }
  },
  methods: {
    deleteProduct(product_id) {
      this.productStore.delete(product_id);
    },
    addProduct2Cart(product_id) {
      this.cartStore.add2cart(product_id);
    }
  },
  watch: {
    '$route'() {
      let category_id = this.$router.currentRoute.value.query.category_id;
      if (category_id) {
        this.productStore.sync(category_id);
      } else {
        this.productStore.sync();
      }
    }
  }
}

</script>
