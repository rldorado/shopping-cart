<template>
  <section class="container text-center">
    <h1 class="title">
        Shopping cart
    </h1>
    <h2 class="subtitle">
        Made with <a href="https://vuejs.org/">vue.js</a> and <a href="https://nuxtjs.org/">nuxt.js</a>
    </h2>
    <nuxt-link to="/products"><button class="btn-grad text-white font-bold py-2 px-4 rounded">Start</button></nuxt-link>
  </section>
</template>

<style lang="css">
.btn-grad { background-image: linear-gradient(to right, #c21500 0%, #ffc500 51%, #c21500 100%) }
.btn-grad:hover { background-position: right center; }
</style>