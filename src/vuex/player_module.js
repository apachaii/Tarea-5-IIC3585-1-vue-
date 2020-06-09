import {DEFEND_IN_BATTLE, GET_UPGRADE, LOST_BATTLE, START_GAME} from "./mutations_types";
import {UPGRADE_TYPES} from "@/game/screens/world_screen/world_constants";

const initial_state = {
  max_life: 100,
  current_life: 100,

  equipped_chasis: 0,
  equipped_wheels: 0,
}

const player_module = {
  state: () => ({...initial_state}),
  getters: {
    currentEquipment: state => {
      const { equipped_chasis, equipped_wheels } = state;
      return { equipped_chasis, equipped_wheels };
    },
    currentLife: state => {
      const { max_life, current_life } = state;
      return { max_life, current_life };
    },
  },
  mutations:{
    [DEFEND_IN_BATTLE](state, payload){
      const {current_life} = state;
      const {damage_received} = payload;

      state.current_life = current_life-damage_received;
    },
    [LOST_BATTLE](state){
      state.current_life = 0;
    },
    [GET_UPGRADE](state, payload){
      const {level, upgrade_type} = payload;
      const upgrade = {}
      if (upgrade_type === UPGRADE_TYPES.CHASIS && state.equipped_chasis < level){
        upgrade.equipped_chasis = level;
      } else if (upgrade_type === UPGRADE_TYPES.WHEELS && state.equipped_wheels < level){
        upgrade.equipped_wheels = level;
      }
      Object.assign(state,{
        ...upgrade,
        max_life: state.max_life + 10, // All upgrade increase health and restore damage
        current_life: state.max_life + 10,
      });
    },
    [START_GAME](state){
      Object.assign(state,{
        max_life: 100,
        current_life: 100,
        equipped_chasis: 0,
        equipped_wheels: 0,
      });
    },
  },
};

export default player_module;
