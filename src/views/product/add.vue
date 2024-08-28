<script>
import {
    useProductStore
} from "@/stores/product.store.js"
import {
    useCategoryStore
} from "@/stores/category.store.js"
export default {
    name: 'AddProduct',
    setup() {
        const categoryStore = useCategoryStore();
        categoryStore.sync().then(() => {
            console.log("category fetched");
        });
        const productStore = useProductStore();
        return {
            productStore,
            categoryStore,
        }
    },
    data() {
        return {
            formData: {
                name: "",
                price: null,
                category_id: null,
                thumbnail: null,
            },
            placeholderImageUrl: null
        }
    },
    methods: {
        selectFile() {
            this.$refs.productImage.click();
        },
        handleFileChange(event) {
            this.formData.thumbnail = event.target.files[0];
            let reader = new FileReader();
            let el = this.$refs.placeholderImage
            reader.onloadend = function () {
                this.placeholderImageUrl = reader.result;
                el.src = reader.result;
                el.classList.remove('hidden');
                el.nextElementSibling.classList.add('hidden');
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        add() {
            this.productStore.add(this.formData);
        }
    }
}
</script>
<template>
    <div class="h-[80vh] flex flex-col items-center place-content-center">
        <div class="w-[768px] border rounded-sm">
            <div class="header py-4 px-16 border-b">
                <h1 class="text-md font-semibold">Add Product</h1>
            </div>
            <div class="content py-8 px-16">
                <form action="" @submit.prevent="add">

                    <div class="flex place-content-around">
                        <div class="">
                            <button type="button" @click="selectFile"
                                class="bg-primary/20 w-40 h-40 rounded-md flex items-center place-content-center relative">
                                <img ref="placeholderImage" alt="product image"
                                    class="w-full h-full object-cover rounded-md hidden" />
                                <span class="flex flex-col items-center text-primary gap-2">
                                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
                                        <path
                                            d="M23.75 19.9999H7.50002C3.59298 20.0022 0.338633 17.0047 0.0204705 13.1107C-0.297692 9.21659 2.42692 5.73057 6.28252 5.09865C8.05716 1.95226 11.3877 0.00428754 15 -0.000173392C17.2525 -0.0086877 19.4406 0.751524 21.2025 2.1549C22.9326 3.52722 24.1626 5.43112 24.7025 7.5724C27.9324 8.06868 30.2348 10.9693 29.985 14.2275C29.7353 17.4858 27.0178 20.0016 23.75 19.9999ZM15 2.49989C12.2897 2.50309 9.79086 3.96502 8.46002 6.32615L7.87502 7.3749L6.68877 7.56865C4.12662 7.9979 2.32003 10.3178 2.53153 12.907C2.74304 15.4962 4.90217 17.4921 7.50002 17.4999H23.75C25.7107 17.5019 27.342 15.9931 27.4928 14.0382C27.6435 12.0833 26.2629 10.3423 24.325 10.0436L22.68 9.79365L22.2775 8.17865C21.4466 4.83716 18.4433 2.49359 15 2.49989ZM16.8125 14.9999H13.1875V11.2499H10L15 6.2499L20 11.2499H16.8125V14.9999Z"
                                            fill="#1963D2" />
                                    </svg>
                                    Upload Image
                                </span>
                            </button>
                            <input type="file" class="hidden" @change="handleFileChange" ref="productImage">
                        </div>
                        <div class="w-[348px] flex flex-col gap-4">

                            <div class="form-wrapper">
                                <label for="product_name" class="label">Product Name</label>
                                <div class="form-control">
                                    <input type="text" v-model="formData.name" id="product_name" class="" placeholder="Enter product name"
                                        required>
                                </div>
                            </div>

                            <div class="form-wrapper">
                                <label for="price" class="label">Price</label>
                                <div class="form-control">
                                    <input type="number" v-model="formData.price" id="price" class="" placeholder="Input price" required>
                                </div>
                            </div>
                            <div class="form-wrapper">
                                <label for="category" class="label">Select Category</label>
                                <select name="category" id="category" v-model="formData.category_id"
                                    class="bg-[#FAFBFC] border border-[#DFE1E6] rounded-sm p-2">
                                    <option v-for="data in categoryStore.categories" :value="data.id">{{ data.name }}
                                    </option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div class="flex gap-2 justify-end mt-16">
                        <button type="button" class="btn btn-secondary rounded-sm" @click="this.$router.push({
                            name: 'home'
                        })">
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-primary rounded-sm">
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
form {
    @apply flex flex-col gap-4;
}

form label {
    @apply text-xs text-[#303030] text-left;
}

form .form-wrapper {
    @apply flex flex-col gap-1;
}

form .form-control {
    @apply bg-[#FAFBFC] border border-[#DFE1E6] rounded-sm items-center;
}

form .form-control input {
    @apply w-full bg-transparent focus-visible:outline-primary p-2 focus-visible:bg-white;
}
</style>