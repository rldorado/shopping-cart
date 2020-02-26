<template>
    <div>
        <nav class="flex flex-row items-center">
        <nuxt-link :to="'/' + destination">
            <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.701 14.276l9.586-9.585a2.267 2.267 0 013.195 0l.801.8a2.266 2.266 0 010 3.194L13.968 16l7.315 7.315a2.266 2.266 0 010 3.194l-.801.8a2.265 2.265 0 01-3.195 0l-9.586-9.587A2.24 2.24 0 017.054 16a2.248 2.248 0 01.647-1.724z" fill="#515151"/>
            </svg>
        </nuxt-link>
        <h1 class="text-xl" v-show="$route.name == 'products'">List of products</h1>
        <h1 class="text-xl" v-show="$route.name == 'cart'">Cart</h1>
        </nav>
        <nuxt />
    </div>
</template>

<script>
export default {
    computed: ({
        destination() {
            return (this.$route.name == 'products') ? 'cart' : 'products'
        }
    })    
}
</script>

<style>

</style>