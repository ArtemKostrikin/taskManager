import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, title) {
      state.tasks.push({ id: Date.now(), title });
    }
  }
});
