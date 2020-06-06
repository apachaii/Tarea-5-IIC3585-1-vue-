const initial_state = {
  max_life: 100,
  current_life: 100,

  equipped_chasis: 0,
  equipped_wheels: 0,
}

const player_module = {
  state: () => (initial_state),
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
  mutations:{},
};

export default player_module;
