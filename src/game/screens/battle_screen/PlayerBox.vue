<template>
  <div
    :style="box_style"
    id="player_box"
  >
    <CarSprite
      height="100%"
      width="100%"
      :face_direction="battleFaceDirection"
      v-bind="currentEquipmentColor"
    />
    <LifeBox
      v-bind="currentPlayerLife"
    />
  </div>
</template>

<script>
  import {LEVEL_COLORS} from "@/game/general_constants";
  import {
    BATTLE_BOX_WIDTH,
    BATTLE_BOX_HEIGHT,
    BATTLE_BOX_VERTICAL_POSITION,
    PLAYER_VERTICAL_POSITION,
  } from "@/game/screens/battle_screen/battle_constants";
  import CarSprite from "@/game/general_components/CarSprite";
  import LifeBox from "@/game/screens/battle_screen/LifeBox";

  export default {
    name: "PlayerBox",
    components: {LifeBox, CarSprite},
    data(){
      return{
        battleFaceDirection: "right",
        box_style:{
          width: BATTLE_BOX_WIDTH,
          height: BATTLE_BOX_HEIGHT,
          marginTop: BATTLE_BOX_VERTICAL_POSITION,
          marginLeft: PLAYER_VERTICAL_POSITION,
        }
      }
    },
    computed:{
      currentEquipmentColor() {
        const {
          equipped_chasis,
          equipped_wheels,
        }= this.$store.getters.currentEquipment;
        return {
          chasis_color: LEVEL_COLORS[equipped_chasis],
          wheels_color: LEVEL_COLORS[equipped_wheels],
        }
      },
      currentPlayerLife() {
        const {
          max_life,
          current_life,
        }= this.$store.getters.currentLife;
        return {
          current_life,
          total_life: max_life,
        };
      },
    },
  }
</script>

<style scoped>
  #player_box{
    position: absolute;
  }
</style>