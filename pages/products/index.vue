<template>
    <div>
        <div v-show="!products.length" class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-2" role="alert">
            <p class="font-bold">Please wait!</p>
            <p class="text-sm">Loading data...</p>
            </div>
        <section class="flex content-start flex-wrap">
            <Product v-for="product in products" :key="product._id" 
                :id="product.id"
                :name="product.productName" 
                :image_url="product.image_url"
                :stock="product.stock"
                :description="product.productDescription"
                :price="product.price"
                :favorite="product.favorite"
            />
        </section>
    </div>
</template>

<script>
import Product from './product'

export default {
    components: { Product },
    computed: {
        products() { 
            return this.$store.getters['products/products']
        }
    },
    mounted() {
        this.$store.dispatch('products/getProducts')
    }
}
</script>