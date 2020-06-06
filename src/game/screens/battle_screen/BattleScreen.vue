<template>
  <fragment>
    <ControlsBar/>
    <div
      id="battle_boxes_container"
      :style="box_dimensions"
    >
      <PlayerBox/>
    </div>
  </fragment>
</template>

<script>
  import ControlsBar from "./ControlsBar";
  import {
    BATTLE_SCREEN_HEIGHT, BATTLE_SCREEN_WIDTH
  } from "./battle_constants";
  import PlayerBox from "@/game/screens/battle_screen/PlayerBox";

  export default {
    name: "BattleScreen",
    components: {ControlsBar, PlayerBox, },
    data(){
      return{
        box_dimensions: {
          height: `${BATTLE_SCREEN_HEIGHT}px`,
          width: `${BATTLE_SCREEN_WIDTH}px`,
        },
      };
    },
  }
</script>

<style scoped>
  #battle_boxes_container{
    margin: 0 auto;
    position: relative;

    background-color: aqua;
  }
</style>