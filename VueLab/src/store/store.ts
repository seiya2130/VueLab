import { createStore } from "vuex/types/index.js";

export interface State {
  counter: number;
}

export const store = createStore<State>({
  state: {
    counter: 0,
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  mutations: {
    increment(state, payload: { amount: number }) {
      state.counter += payload.amount;
    },
  },
  actions: {
    incrementAsync({ commit }, payload: { amount: number }) {
      setTimeout(() => {
        commit('increment', payload);
      }, 1000);
    },
  },
});