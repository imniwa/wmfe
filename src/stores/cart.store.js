import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

import router from "@/router/index.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
    total: 0,
  }),
  actions: {
    async sync() {
      let response = await axiosWrapper.get(`${baseUrl}/cart`);
      if (response.status === 200) {
        this.cart = response.data;
        this.total = this.cart.reduce(
          (acc, item) =>
            item.product ? acc + item.product.price * item.quantity : acc,
          0
        );
      }
    },
    async checkout(){
      let response = await axiosWrapper.post(`${baseUrl}/transaction`, null, true);
      if (response.status === 200) {
        this.sync();
      }
    },
    async add2cart(product_id) {
      let response = await axiosWrapper.post(
        `${baseUrl}/cart/add`,
        {
          product_id: product_id,
          quantity: 1,
        },
        true
      );
      if (response.status === 200) {
        this.sync();
      }
    },
    async updateQuantity(product_id, quantity) {
      let response = await axiosWrapper.put(`${baseUrl}/cart/update`, {
        product_id: product_id,
        quantity,
      })
      console.log(response);
      if (response.status === 200) {
        this.sync();
      }
    },
    async addQuantity(product_id) {
      let response = await axiosWrapper.post(`${baseUrl}/cart/add`, {
        product_id: product_id,
        quantity: 1,
      });
      if (response.status === 200) {
        this.sync();
      }
    },
    async reduceQuantity(product_id) {
      let response = await axiosWrapper.delete(`${baseUrl}/cart/reduce`, {
        product_id: product_id,
        quantity: 1,
      });
      if (response.status === 200) {
        this.sync();
      }
    },
    async removeItem(product_id) {
      let response = await axiosWrapper.delete(`${baseUrl}/cart/remove`, {
        product_id: product_id,
      });
      if (response.status === 200) {
        this.sync();
      }
    },
  },
});
