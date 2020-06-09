<template>
  <div
    class="upgrade_event"
    :style="event_style"
  >
    <Chasis
      v-if="upgrade_type===UPGRADE_TYPES.CHASIS"
      class="upgrade_sprite"
      :style="sprite_style"
    />
    <Wheels
      v-if="upgrade_type===UPGRADE_TYPES.WHEELS"
      class="upgrade_sprite"
      :style="sprite_style"
    />
  </div>
</template>

<script>
  import {TILE_SIZE, UPGRADE_TYPES} from "../world_constants";
  import {LEVEL_COLORS} from "@/game/general_constants";
  import Chasis from "../../../../assets/chasis.svg?vue-template";
  import Wheels from "../../../../assets/wheels.svg?vue-template";


  export default {
    name: "UpgradeEvent",
    components: {
      Chasis, Wheels,
    },
    props:{
      level: {
        type: Number,
        required: true
      },
      upgrade_type: {
        type: String,
        required: true
      },
      horizontal_position: {
        type: Number,
        required: true
      },
      vertical_position: {
        type: Number,
        required: true
      },
    },
    data(){
      return{
        UPGRADE_TYPES,
      }
    },
    computed:{
      event_style(){
        return{
          width:`${TILE_SIZE}px`,
          height:`${TILE_SIZE}px`,
          marginLeft: `${this.horizontal_position*TILE_SIZE}px`,
          marginTop: `${this.vertical_position*TILE_SIZE}px`,
        }
      },
      sprite_style(){
        return{
          width:`${TILE_SIZE}px`,
          height:`${TILE_SIZE}px`,
          fill: LEVEL_COLORS[this.level],
        }
      },
    },
  }
</script>

<style scoped>
  .upgrade_event{
    position: absolute;
  }
  .upgrade_sprite{
    position: absolute;
  }
</style>