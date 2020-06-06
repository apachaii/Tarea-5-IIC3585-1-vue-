<template>
  <div id="events_screen" :style="eventsMapStyle">
    <div v-for="(event,index) in currentEvents" :key="index">
      <EnemyEvent
        v-if="event.type === EVENTS_TYPES.ENEMY"
        v-bind="{...eventSize(event)}"/>
      <UpgradeEvent
        v-else-if="event.type === EVENTS_TYPES.UPGRADE"
        v-bind="{
          level: event.level,
          upgrade_type: event.upgrade_type,
          ...eventSize(event),
        }"/>
      <NextLevelEvent
        v-else-if="event.type === EVENTS_TYPES.NEXT_LEVEL"
        v-bind="{...eventSize(event)}"
      />
    </div>
  </div>
</template>

<script>
  import {EVENTS_TYPES} from '@/game/screens/world_screen/world_constants';
  import {TILE_SIZE} from "@/game/screens/world_screen/world_constants";
  import EnemyEvent from "@/game/screens/world_screen/events/EnemyEvent";
  import UpgradeEvent from "@/game/screens/world_screen/events/UpgradeEvent";
  import NextLevelEvent from "@/game/screens/world_screen/events/NextLevelEvent";

  export default {
    name: "Events",
    components: {NextLevelEvent, UpgradeEvent, EnemyEvent},
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
        };
      },
      currentEvents(){
        return this.$store.getters.currentEvents;
      }
    },
    methods:{
      eventSize(event){
        return{
          horizontal_position: event.horizontal_position,
          vertical_position: event.vertical_position,
        };
      },
    },
  }
</script>

<style scoped>
  #events_screen{
    position: absolute;
    height: 100%;
  }
</style>