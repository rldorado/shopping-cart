import axios from 'axios'

const apiURL = 'http://localhost:3001'

export const totals = (payloadArr) => {
    const totalAmount = payloadArr.map(cartArr => cartArr.price * cartArr.quantity).reduce((a,b) => a + b, 0)
    const totalQuantity = payloadArr.map(cartArr => cartArr.quantity).reduce((a,b) => a + b, 0)
    return {
        amount: totalAmount.toFixed(2),
        quantity: totalQuantity
    }
}

const state = () => ({
    cart: [],
    totalAmount: 0,
    totalQuantity: 0
})

const mutations = {
    'ADD_TO_CART' (state, payload) {
        const isInCart = state.cart.find(product => product.id == payload.id)
        if (isInCart) {
            state.cart.map(product => {
                if (product.id == payload.id) {
                    product.quantity++
                }
            })
        } else {
            state.cart = [...state.cart, {
                id: payload.id,
                productName: payload.productName,
                image_url: payload.image_url,
                price: payload.price,
                stock: payload.stock,
                quantity: 1
            }]
        }
        state.totalAmount = totals(state.cart).amount
        state.totalQuantity = totals(state.cart).quantity
    },
    'REMOVE_FROM_CART' (state, payload) {
        if (payload.quantity > 1) {
            state.cart.map(product => {
                if (product.id == payload.id) {
                    product.quantity--
                }
            })
        } else {
            const id = state.cart.findIndex(product => product.id == payload.id)
            state.cart.splice(id, 1)
        }
        state.totalAmount = totals(state.cart).amount
        state.totalQuantity = totals(state.cart).quantity
    }
}

const actions = {
    addToCart({ commit }, payload) {
        commit('ADD_TO_CART', payload)
    },
    removeFromCart({ commit }, payload) {
        commit('REMOVE_FROM_CART', payload)
    }
}

const getters = {
    cart: (state) => state.cart,
    totalAmount: (state) => state.totalAmount,
    totalQuantity: (state) => state.totalQuantity
}

export default { state, mutations, actions, getters }