import axios from 'axios'

export const total = (payloadArr) => {
    const totalAmount = payloadArr.map(cartArr => cartArr.price * cartArr.quantity).reduce((a,b) => a + b, 0)
    const totalQuantity = payloadArr.map(cartArr => cartArr.quantity).reduce((a,b) => a + b, 0)
    return {
        amount: totalAmount.toFixed(2),
        quantity: totalQuantity
    }
}

const state = () => ({
    cart: [],
    amount: 0,
    quantity: 0,
    toggleSidebar: false
})

const mutations = {
    'GET_CART' (state, payload) {
        state.cart = payload
        state.amount = total(payload).amount
        state.quantity = total(payload).quantity
    },
    'TOGGLE_SIDEBAR' (state) {
        state.toggleSidebar = !state.toggleSidebar
    }
}

const actions = {
    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    }
}

const getters = {
    toggleSidebar: state => state.toggleSidebar
}

export default { state, mutations, actions, getters }