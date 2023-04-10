<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product image" class="my-7 mx-auto"/>
            </div>
            <div class="p-7">
                <h2 class="my-7 text-4xl">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - ${{  product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn flex">
                    <i class="material-icons">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps({
    product: {
        type: Object,
        required: true,
        default: () => ({})
    }
})
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>