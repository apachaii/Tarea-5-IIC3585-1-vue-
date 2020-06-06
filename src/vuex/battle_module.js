import {BATTLE_STATUS} from "../game/screens/battle_screen/battle_constants";


const initial_state = {
  enemy_level: 1,

  enemy_life: 100,
  enemy_total_life: 100,
  battle_text: [],

  battle_state: BATTLE_STATUS.ACTIVE,
}

const player_module = {
  state: () => (initial_state),
  getters: {
    battle_life: state => {
      const { enemy_life, enemy_total_life } = state;
      return { enemy_life, enemy_total_life };
    },
    battle_info: state => state.battle_text
  },
  mutations:{},
};

export default player_module;
