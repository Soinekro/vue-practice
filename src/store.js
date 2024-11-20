import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            nombre: 'Juan',
        };
    },
    mutations: {
        // Define your mutations here
    },
    actions: {
        // Define your actions here
    },
    getters: {
        // Define your getters here
    }
});

export default store;