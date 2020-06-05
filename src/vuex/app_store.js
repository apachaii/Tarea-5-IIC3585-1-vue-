import Vue from 'vue';
import Vuex from 'vuex';

import world_module from "@/vuex/world_module";
import screen_module from "@/vuex/screen_module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    world: world_module,
    screen: screen_module,
  }
});

export default store;