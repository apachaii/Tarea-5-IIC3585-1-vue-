<template>
  <div
    class="controls_bar"
    :style="{width: BATTLE_SCREEN_WIDTH}"
  >
    <p>[z] for attack; [x] for scape;</p>
  </div>
</template>

<script>
  import {BATTLE_SCREEN_WIDTH} from "./battle_constants";

  export default {
    name: "ControlsBar",
    data(){
      return {
        BATTLE_SCREEN_WIDTH
      };
    },
  }
</script>

<style scoped>
  #controls_bar {
    margin: 0 auto;
  }
  p{
    margin: 0 ;
  }
</style>