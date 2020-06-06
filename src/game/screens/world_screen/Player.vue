<template>
  <div
    id="player"
    :style="currentPlayerPosition"
  >
    <CarSprite v-bind="sprite_style"/>
  </div>
</template>

<script>
  import CarSprite from "@/game/general_components/CarSprite";
  import {PLAYER_HEIGHT, PLAYER_HEIGHT_WIDTH_RATIO} from "@/game/screens/world_screen/world_constants";
  import {LEVEL_COLORS} from "@/game/general_constants";

  export default {
    name: "Player",
    components: {CarSprite},
    computed: {
      currentPlayerPosition() {
        const  position = this.$store.getters.currentPlayerPosition;
        return {
          left: `${position.character_horizontal_position}px`,
          top: `${position.character_vertical_position}px`,
        };
      },
      sprite_style(){
        const position = this.$store.getters.currentPlayerPosition;
        const { equipped_chasis, equipped_wheels } = this.$store.getters.currentEquipment;

        // TODO do the colors
        const chasis_color = LEVEL_COLORS[equipped_chasis];
        const wheels_color = LEVEL_COLORS[equipped_wheels];

        return{
          height: `${PLAYER_HEIGHT}px`,
          width: `${PLAYER_HEIGHT * PLAYER_HEIGHT_WIDTH_RATIO}px`,
          face_direction: position.player_face_direction,
          chasis_color,
          wheels_color,
        };

      }
    },
  }
</script>

<style scoped>
  #player {
    position: absolute;
    text-align: left;
  }
</style>