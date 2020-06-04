import get_level from "@/game/world_screen/levels";

const initial_state = {
  level: 1,

  character_horizontal_position: 0,
  character_vertical_position: 0,
  player_face_direction: 'right',

  map_scroll: 0,

  events_active_state:[],

  current_battle_index: null,
}

const world_module = {
  state: () => (initial_state),
  mutations: {},
  actions: {},
  getters: {
    currentLevelMatrix: state => {
      const { level } = state;
      const levelInfo = get_level(level);
      return levelInfo.tiles;
    },
    currentTilesInfo: state => {
      const { level } = state;
      const { used_tiles } = get_level(level);
      return used_tiles;
    },
    currentLevelWidth: state => {
      const { level } = state;
      const { width } = get_level(level);
      return width;
    },
    currentScroll: state => {
      const { map_scroll } = state;
      return map_scroll;
    }
  }
}

export default world_module