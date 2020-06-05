<template>
  <div :style="{...tileSize,...event_position,...{position: 'absolute'}}">
    <!--<Dog/>-->
    <div style="background-color: red; height: 40px; width: 40px;"/>
  </div>
</template>

<script>
  import {TILE_SIZE} from "../world_constants";
  // import Dog from "../../../assets/pet-bottle.svg?vue-template"

  export default {
    name: "EnemyEvent",
    components: {
      // Dog,
    },
    props:{
      horizontal_position: {
        type: Number,
        required: true
      },
      vertical_position: {
        type: Number,
        required: true
      },
    },
    computed: {
      tileSize(){
        return {
          width:`${TILE_SIZE}px`,
          height:`${TILE_SIZE}px`,
        };
      },
      event_position(){
        return{
          marginLeft: `${this.horizontal_position*TILE_SIZE}px`,
          marginTop: `${this.vertical_position*TILE_SIZE}px`,
        }
      },
    },
  }
</script>

<style scoped>
</style>