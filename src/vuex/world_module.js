import get_level from "@/game/screens/world_screen/levels";
import {CHANGE_POSITION} from "@/vuex/mutations_types";

const initial_state = {
  level: 1,

  character_horizontal_position: 0,
  character_vertical_position: 0,
  player_face_direction: 'right',

  map_scroll: 0,

  events_active_state: [true,true,true,true,true,true,true,true,],

  current_battle_index: null,
}

const world_module = {
  state: () => (initial_state),
  mutations: {
    [CHANGE_POSITION](state, payload) {
      Object.assign(state, payload);
    }
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