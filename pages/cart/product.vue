<template>
    <div class="sm:w-1/2 md:w-1/3 xl:w-1/6 mb-4 rounded shadow-lg mb-2 mx-2">
        <figure class="container">
            <img class="w-full" :src="image_url" alt="Img" />
        </figure>
    </div>
</template>

<script>
export default {
    props: ['id', 'name', 'image_url', 'stock', 'description', 'price']
}
</script>