import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import auth from "./modules/auth";

import { RootState } from "./types";

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    auth
  }
};

const store = new Vuex.Store<RootState>(storeOptions);
Vue.prototype.$store = store;
export default store;
