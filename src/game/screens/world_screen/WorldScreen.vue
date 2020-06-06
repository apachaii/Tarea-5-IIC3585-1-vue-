<template>
  <fragment>
    <DataBar/>
    <div id="play_screen" :style="screenStyle">
      <Map/>
      <Player/>
      <Events/>
    </div>
  </fragment>
</template>

<script>
  import DataBar from "./data_bar";
  import Map from "./map";
  import Player from "./Player";
  import Events from "./events";

  import {MAP_SCREEN_HEIGHT, MAP_SCREEN_WIDTH} from "./world_constants";

  export default {
    name: "WorldScreen",
    components: {Events, DataBar, Player, Map,},
    data() {
      return {
        screenStyle: {
          height: `${MAP_SCREEN_HEIGHT}px`,
          width: `${MAP_SCREEN_WIDTH}px`,
        },
      };
    },
  }
</script>

<style scoped>
  #play_screen {
    position: relative;
    margin: 0 auto;

    overflow: hidden;
  }
</style>