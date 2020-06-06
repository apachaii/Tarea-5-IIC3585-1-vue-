import {GO_TO_TITLE, GO_TO_MAP, START_BATTLE, START_GAME,} from "./mutations_types";
import {TITLE_SCREEN, WORLD_SCREEN, BATTLE_SCREEN,} from "@/game/screen_constants";

const initial_state = {
  screen : TITLE_SCREEN,
};

const screen_module = {
  state: () => ({...initial_state}),
  getters: {
    currentScreen: state => {
      const { screen } = state;
      return screen;
    },
  },
  mutations: {
    [GO_TO_TITLE](state){
      state.screen = TITLE_SCREEN;
    },
    [START_GAME](state){
      state.screen = WORLD_SCREEN;
    },
    [START_BATTLE](state){
      state.screen = BATTLE_SCREEN;
    },
    [GO_TO_MAP](state){
      state.screen = WORLD_SCREEN;
    },
  },
};

export default screen_module;