<template>
    <fragment>
        <div id="play_screen" :style="screenStyle">
            <Map/>
        </div>
    </fragment>
</template>

<script>
  import Map from "./Map";
  import {MAP_SCREEN_HEIGHT, MAP_SCREEN_WIDTH} from "./world_constants";

  export default {
    name: "WorldScreen",
    components: {Map},
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
    #play_screen{
        position: relative;
        margin: 0 auto;

        overflow: hidden;
    }
</style>