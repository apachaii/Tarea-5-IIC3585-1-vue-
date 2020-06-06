import get_level from "@/game/screens/world_screen/levels";
import {CHANGE_POSITION, GET_UPGRADE, NEXT_LEVEL, START_BATTLE, START_GAME, WIN_BATTLE} from "@/vuex/mutations_types";

const initial_state = {
  level: 1,

  character_horizontal_position: 0,
  character_vertical_position: 0,
  player_face_direction: 'right',

  map_scroll: 0,

  events_active_state: [],

  current_battle_index: null,
}

const world_module = {
  state: () => ({...initial_state}),
  mutations: {
    [CHANGE_POSITION](state, payload) {
      Object.assign(state, payload);
    },
    [START_GAME](state){
      const level_one = get_level(1);
      const events_active_state = new Array(level_one.events.length).fill(true);
      Object.assign(state, {
        ...initial_state,
        level: 1,
        ...level_one.start_position,
        events_active_state,
      });
    },
    [NEXT_LEVEL](){},
    [START_BATTLE](state, payload){
      Object.assign(state,{
        current_battle_index: payload.current_battle_index,
        character_horizontal_position: payload.character_horizontal_position + state.map_scroll,
        character_vertical_position: payload.character_vertical_position,
      })
    },
    [WIN_BATTLE](state){
      const { events_active_state, current_battle_index } = state;
      const new_events_active_state = [...events_active_state];
      new_events_active_state[current_battle_index] = false;
      state.events_active_state = new_events_active_state;
    },
    [GET_UPGRADE](state, payload){
      const { index } = payload;
      const { events_active_state } = state;
      const new_events_active_state = [...events_active_state];
      new_events_active_state[index] = false
      state.events_active_state = new_events_active_state;
    },
  },
  getters: {
    currentLevelMatrix: state => {
      const {level} = state;
      const levelInfo = get_level(level);
      return levelInfo.tiles;
    },
    currentTilesInfo: state => {
      const {level} = state;
      const {used_tiles} = get_level(level);
      return used_tiles;
    },
    currentLevelWidth: state => {
      const {level} = state;
      const {width} = get_level(level);
      return width;
    },
    currentScroll: state => {
      const {map_scroll} = state;
      return map_scroll;
    },
    currentPlayerPosition: state => {
      const {
        character_horizontal_position,
        character_vertical_position,
        player_face_direction
      } = state;
      return {
        character_horizontal_position,
        character_vertical_position,
        player_face_direction
      };
    },
    currentBackground: state =>{
      const {level} = state;
      const levelInfo = get_level(level);
      return levelInfo.background;
    },
    currentEvents: state =>{
      const {level, events_active_state} = state;
      const levelInfo = get_level(level);
      const {events} = levelInfo;
      return events.map(
        (event, index) => events_active_state[index]
          ? event
          : {}
      );
    },
  }
}

export default world_module