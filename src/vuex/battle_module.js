import {ATTACK_IN_BATTLE, DEFEND_IN_BATTLE, LOST_BATTLE, START_BATTLE, WIN_BATTLE} from "./mutations_types";
import {BATTLE_STATUS, ENEMY_STATS} from "@/game/screens/battle_screen/battle_constants";


const initial_state = {
  enemy_level: 1,

  enemy_life: 100,
  enemy_total_life: 100,
  battle_text: [],

  battle_state: BATTLE_STATUS.ACTIVE,
}

const player_module = {
  state: () => ({...initial_state}),
  getters: {
    battle_life: state => {
      const { enemy_life, enemy_total_life } = state;
      return { enemy_life, enemy_total_life };
    },
    battle_info: state => state.battle_text,
    battle_state: state => state.battle_state,
    battle_attack: state => ({
      enemy_level: state.enemy_level,
      enemy_life: state.enemy_life,
    }),
  },
  mutations:{
    [START_BATTLE](state, payload){
      const {enemy_level, starting_text} = payload;
      const {starting_life} = ENEMY_STATS[enemy_level];
      Object.assign(state, {
          enemy_level,
          enemy_life: starting_life,
          enemy_total_life: starting_life,
          battle_text: [starting_text],
          battle_state: BATTLE_STATUS.ACTIVE,
        },
      );
    },
    [ATTACK_IN_BATTLE](state, payload){
      const {enemy_life, battle_text} = state;
      const {damage_done} = payload;

      const added_battle_text = [
        ...battle_text,
        `You did ${damage_done} of damage, the enemy have ${enemy_life - damage_done} left.`,
      ]

      Object.assign(state,{
        enemy_life: enemy_life - damage_done,
        battle_text: added_battle_text,
      });
    },
    [DEFEND_IN_BATTLE](state, payload){
      const {battle_text} = state;
      const {damage_received, current_life} = payload;


      const added_battle_text = [
        ...battle_text,
        `You received ${damage_received} damage, you have ${current_life-damage_received} left.`,
      ];

      Object.assign(state,{
        battle_text: added_battle_text,
      })
    },
    [WIN_BATTLE](state){
      const {battle_text} = state;
      const added_battle_text = [
        ...battle_text,
        `You defeated your enemy, press [z] or [x] to return to the map`,
      ];
      Object.assign(state,{
        battle_state: BATTLE_STATUS.WON,
        enemy_life: 0,
        battle_text: added_battle_text,
      });
    },
    [LOST_BATTLE](state){
      const {battle_text} = state;

      const added_battle_text = [
        ...battle_text,
        `You lost the battle, press [z] or [x] to return to the title screen`,
      ];
      Object.assign(state,{
        battle_state: BATTLE_STATUS.LOST,
        battle_text: added_battle_text,
      });
    },
  },
};

export default player_module;
