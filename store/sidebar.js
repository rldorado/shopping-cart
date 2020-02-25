
const state = () => ({
    toggleSidebar: false
})

const mutations = {
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