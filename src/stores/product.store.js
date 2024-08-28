import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

import router from "@/router/index.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
    product: {
      name: "",
      price: 0,
      category_id: null,
      img: null,
    },
    productError: null,
  }),
  actions: {
    async sync(category_id) {
      if (category_id) {
        let response = await axiosWrapper.get(
          `${baseUrl}/product/category/${category_id}`
        );
        this.products = response.data;
      } else {
        let response = await axiosWrapper.get(`${baseUrl}/product`);
        this.products = response.data;
      }
    },

    async add(product) {
      let response = await axiosWrapper.post(
        `${baseUrl}/product`,
        product,
        true,
        "multipart/form-data"
      );
    },

    async delete(product_id) {
      let response = await axiosWrapper.delete(
        `${baseUrl}/product/${product_id}`,
        null,
        true
      );
      this.sync();
    },
  },
});
