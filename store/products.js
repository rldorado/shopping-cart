import axios from 'axios'

const apiURL = 'http://localhost:3001'

const state = () => ({
    products: [] 
})

const mutations = {
    'GET_PRODUCTS' (state, payload) {
        state.products = payload
    },
    'UPDATE_FAVORITE_PRODUCT' (state, payload) {
        const newFavorite = (payload.favorite == 0) ? "1" : 0
        state.products = state.products.map(product => (product.id == payload.id) ? { ...product, favorite: newFavorite } : product )
    }
}

const actions = {
    getProducts({ commit }) {
        axios.get(apiURL + '/grocery').then(res => {
            commit('GET_PRODUCTS', res.data)
        })
    },
    updateFavoriteProduct({ commit }, id) {
        axios.get(apiURL + `/grocery/${id}`).then(res => {
            commit('UPDATE_FAVORITE_PRODUCT', res.data)
        })
    } 
}

const getters = {
    products: (state) => state.products
}

export default { state, mutations, actions, getters }