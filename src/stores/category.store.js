import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

import router from "@/router/index.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: [],
        category: null,
        categoryError: null
    }),
    actions: {
        async sync() {
            let categories = await axiosWrapper.get(`${baseUrl}/category`);
            if (categories.status == 200) {
                this.categories = categories.data;
            } else {
                console.error('failed to sync categories');
            }
        },
        async add(category) {
            let response = await axiosWrapper.post(`${baseUrl}/category`, category, true);
        }
    }
});