import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { widgetsModule } from './modules/widgets';
import { rootState } from './state.type';
Vue.use(Vuex);

const store: StoreOptions<rootState> = {
  state: {
    version: '1.1.2',
  },
  modules: {
    widgetsModule,
  },
};

export default new Vuex.Store<rootState>(store);
