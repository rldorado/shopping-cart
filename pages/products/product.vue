<template>
    <section class="relative sm:w-1/2 md:w-1/3 xl:w-1/6 mb-4 rounded shadow-lg">
        <img class="w-full" :src="image_url" alt="Img" />
        <div class="absolute top-0 right-0 p-2" @click="$store.dispatch('products/updateFavoriteProduct', id)">
            <svg :class="{ 'fill-current text-red-500': (favorite != 0) }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ name }}</div>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>
        </div>
        <div class="px-6 py-4 flex items-center">
            <div class="text-sm">
                <p class="text-gray-900 leading-none">{{ price }}€</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: ['id', 'name', 'image_url', 'description', 'price', 'favorite']
})
</script>