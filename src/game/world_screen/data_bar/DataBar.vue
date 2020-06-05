<template>
    <div class="data_bar" :style={width:MAP_SCREEN_WIDTH}>
        <p></p>
    </div>
</template>

<script>
  /* TODO Show life:  {{`Life: ${current_life}/${max_life}`}} */
  import {MAP_SCREEN_WIDTH} from "../world_constants";

  export default {
    name: "DataBar",
    data() {
      return {
        MAP_SCREEN_WIDTH,
      };
    },
  }
</script>

<style scoped>
    #data_bar{
        margin: 0 auto;
    }

    p{
        margin: 0;
    }
</style>