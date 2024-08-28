<script>
import {
    useCategoryStore
} from "@/stores/category.store.js"
export default {
    name: 'AddCategory',
    data(){
        return {
            categoryStore: useCategoryStore(),
            formData: {
                name: ""
            }
        }
    },
    methods: {
        add() {
            this.categoryStore.add(this.formData)
        }
    }
}
</script>

<template>
    <div class="h-[80vh] flex flex-col items-center place-content-center">
        <div class="w-[384px] border rounded-sm">
            <div class="header py-4 text-center border-b">
                <h1 class="text-md font-semibold">Add Category</h1>
            </div>
            <div class="content py-8 px-16">
                <form action="" @submit.prevent="add">

                    <div class="form-wrapper">
                        <label for="category_name" class="label">Category Name</label>
                        <div class="form-control">
                            <input type="text" v-model="formData.name" id="category_name" class="" placeholder="Enter category name" required>
                        </div>
                    </div>

                    <div class="flex gap-2 place-content-center mt-4">
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
div {
    /* @apply border border-red-500; */
}

form {
    @apply flex flex-col gap-4;

    label {
        @apply text-xs text-[#303030] text-left;
    }

    .form-wrapper {
        @apply flex flex-col gap-1;
    }

    .form-control {
        @apply bg-[#FAFBFC] border border-[#DFE1E6] rounded-sm items-center relative;

        input {
            @apply w-full bg-transparent focus-visible:outline-primary p-2 focus-visible:bg-white;
        }
    }
}
</style>