import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default createStore({
  state: {
    cards: []
  },
  mutations: {
    appendCard(state, card) {
      state.cards.push(card);
    }
  },
  actions: {
    createCard({ commit }, card) {
      commit("appendCard", card);
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
