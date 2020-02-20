import axios from 'axios'

const state = () => ({
    list: [
        {
            id: 0,
            productName: "Unbranded Metal Chair",
            productDescription: "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
            image_url: "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
            price: 43,
            favorite: 1
        },
        {
            id: 1,
            productName: "Handcrafted Metal Towels",
            productDescription: "Rerum minima laudantium blanditiis dolorem dolores ut sint ut quidem. Est doloremque repellat excepturi dolor consequatur rerum qui. Facere ut vel et enim accusamus ipsum dolores aut. Eaque quo ut omnis unde quam error voluptas non iure.",
            image_url: "https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels",
            price: 98,
            favorite: 0
        }
    ] 
})

const mutations = {
    'GET_PRODUCTS' (state, payload) {
        state.products = payload
    }
}

const actions = {
    getProducts({ commit }) {
        axios.get('/grocery').then(res => {
            commit('GET_PRODUCTS', res.data)
        })
    }
}

const getters = {
    products(state) { return state.products }
}

export default { state, mutations, actions, getters }