import Vue from 'vue';
import Vuex from 'vuex';

import world_module from "@/vuex/world_module";
import screen_module from "@/vuex/screen_module";
import player_module from "@/vuex/player_reducer";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    world: world_module,
    screen: screen_module,
    player: player_module
  }
});

export default store;