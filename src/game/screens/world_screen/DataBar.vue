<template>
  <div id="data_bar" :style="data_bar_style">
    <p>{{`Life: ${currentPlayerLife.current_life}/${currentPlayerLife.max_life}`}}</p>
  </div>
</template>

<script>
  import {MAP_SCREEN_WIDTH} from "./world_constants";

  export default {
    name: "DataBar",
    data() {
      return {
        MAP_SCREEN_WIDTH,
      };
    },
    computed: {
      data_bar_style(){
        return{
          width:`${MAP_SCREEN_WIDTH}px`,
        }
      },
      currentPlayerLife() {
        const {
          max_life,
          current_life,
        } = this.$store.getters.currentLife;
        return {
          current_life,
          max_life,
        };
      },
    }
  }
</script>

<style scoped>
  #data_bar {
    margin: 0 auto;
  }
  p {
    margin: 0;
  }
</style>