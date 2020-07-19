import Vue from 'vue';
import Vuex from 'vuex';

import robotModule from './modules/robots';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotModule,
  },
});
