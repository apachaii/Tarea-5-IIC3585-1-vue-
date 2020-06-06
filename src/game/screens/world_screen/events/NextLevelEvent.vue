<template>
  <div
    class="next_event"
    :style="event_style"
  >
    <Next
      class="next_sprite"
      :style="sprite_style"
    />
  </div>
  
</template>

<script>
  import Next from "../../../../assets/next.svg?vue-template";
  import {TILE_SIZE} from "@/game/screens/world_screen/world_constants";

  export default {
    name: "NextLevelEvent",
    components: {
      Next,
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
        }
      },
    },
  }
</script>

<style scoped>
  .next_event{
    position: absolute;
  }
  .next_sprite{
    position: absolute;
  }

</style>