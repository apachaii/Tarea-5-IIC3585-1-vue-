import store from "@/vuex/app_store";
import {BATTLE_SCREEN} from "../../screen_constants";
import {BATTLE_STATUS, ENEMY_STATS} from "./battle_constants";
import {
  ATTACK_IN_BATTLE,
  DEFEND_IN_BATTLE,
  GO_TO_MAP,
  GO_TO_TITLE,
  LOST_BATTLE,
  WIN_BATTLE,
} from "@/vuex/mutations_types";

export default function handle_battle(battle) {

  const battle_keys = [
    "z",
    "x",
  ];

  window.addEventListener('keydown', (keydown_event) => {
    if (battle_keys.includes(keydown_event.key)) {
      keydown_event.preventDefault();

      const screen = store.getters.currentScreen;
      if (screen !== BATTLE_SCREEN) {
        return;
      }

      switch (store.getters.battle_state) {
        case (BATTLE_STATUS.WON):
          store.commit({type:GO_TO_MAP});
          return;

        case (BATTLE_STATUS.LOST):
          store.commit({type:GO_TO_TITLE});
          return;

        default:
          if (keydown_event.key === "z") {
            battle_turn();
          } else if (keydown_event.key === "x") {
            store.commit({type:GO_TO_MAP});
          }
      }
    }
  })

  function battle_turn() {

    // Attack
    const {
      enemy_level,
      enemy_life,
    } = store.getters.battle_attack;

    const {defense} = ENEMY_STATS[enemy_level];

    const {
      equipped_wheels,
    } = store.getters.currentEquipment;

    const damage_done = 50 + equipped_wheels ?? 0 - defense;

    const battle_won = damage_done >= enemy_life;

    if (battle_won) {

      store.commit({type:WIN_BATTLE});
      return;
    }

    store.commit({
      type: ATTACK_IN_BATTLE,
      damage_done,
    })

    // Defend
    const {attack} = ENEMY_STATS[enemy_level];

    const {
      equipped_chasis,
    } = store.getters.currentEquipment;
    const {
      current_life,
    } = store.getters.currentLife;


    const damage_received = attack - equipped_chasis ?? 0;

    const battle_lost = current_life <= damage_received;

    if (battle_lost){
      store.commit({type:LOST_BATTLE});
      return;
    }

    store.commit({
      type:DEFEND_IN_BATTLE,
      damage_received,
      current_life,
    })
  }

  return battle;
}