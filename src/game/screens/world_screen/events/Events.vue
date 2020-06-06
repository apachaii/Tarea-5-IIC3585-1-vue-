<template>
  <div id="events_screen" :style="eventsMapStyle">
    <fragment v-for="(event,index) in currentEvents" :key="index">
      <EnemyEvent
        v-if="event.type === EVENTS_TYPES.ENEMY"
        v-bind="{
          horizontal_position: event.horizontal_position,
          vertical_position: event.vertical_position,
        }"/>
       <!--<p v-else-if="event.type === EVENTS_TYPES.NEXT_LEVEL">{{EVENTS_TYPES.NEXT_LEVEL}}</p>
      <p v-else-if="event.type === EVENTS_TYPES.UPGRADE">{{EVENTS_TYPES.UPGRADE}}</p> -->
    </fragment>
  </div>
</template>

<script>
  import {EVENTS_TYPES} from '@/game/screens/world_screen/world_constants';
  import {TILE_SIZE} from "@/game/screens/world_screen/world_constants";
  import EnemyEvent from "@/game/screens/world_screen/events/EnemyEvent";

  export default {
    name: "Events",
    components: {EnemyEvent},
    data() {
      return {EVENTS_TYPES};
    },
    computed:{
      eventsMapStyle() {
        const getters = this.$store.getters;
        const map_scroll = `${getters.currentScroll}px`;
        const map_width = `${TILE_SIZE * getters.currentLevelWidth}px`;
        return {
          left: map_scroll,
          width: map_width,
        }
      },
      currentEvents(){
        return this.$store.getters.currentEvents;
      }
    },
  }
</script>

<style scoped>
  #events_screen{
    position: absolute;
    height: 100%;
  }
</style>