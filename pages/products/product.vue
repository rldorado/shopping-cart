<template>
    <section class="relative sm:w-1/2 md:w-1/3 xl:w-1/6 mb-4 rounded shadow-lg flex flex-wrap mb-2 mx-2 content-between">
        <div class="flex flex-wrap">
            <figure>
                <img class="w-full" :src="image_url" alt="Img" />
                <div class="absolute top-0 right-0 p-2" @click="$store.dispatch('products/updateFavoriteProduct', id)">
                    <svg :class="{ 'fill-current text-red-500': (favorite != 0) }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                </div>
            </figure>
            <div class="container px-6 py-4 flex flex-wrap">
                <div class="font-bold text-xl mb-2">{{ name }}</div>
                <p class="text-gray-700 text-base">{{ description }}</p>
            </div>
        </div>
        <div class="container flex justify-between items-stretch">
            <div class="px-6 py-4">
                <p class="text-gray-900 leading-none">{{ price }}€</p>
                <p class="text-sm">{{ stock }} left</p>
            </div>
            <button class="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center">
                <svg class="fill-current text-white mr-2" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M22.5 14H14v8.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V14H.5a.5.5 0 01-.5-.5v-4A.5.5 0 01.5 9H9V.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V9h8.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5z" fill-rule="evenodd"/>
                </svg>
                <span>Add</span>
            </button>
        </div>
    </section>
</template>

<script>

export default {
    props: ['id', 'name', 'image_url', 'stock', 'description', 'price', 'favorite']
}
</script>