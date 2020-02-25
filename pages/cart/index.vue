<template>
    <div class="sidenav">
        <Product v-for="product in products" :key="product.id" 
            :id="product.id"
            :name="product.productName" 
            :image_url="product.image_url"
            :stock="product.stock"
            :description="product.productDescription"
            :price="product.price"
        />
    </div>
</template>

<script>
import Product from './product'

export default {
    components: { Product },
    computed: {
        products() {
            return this.$store.state['cart/cart']
        }
    }
}
</script>