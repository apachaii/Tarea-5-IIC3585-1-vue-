<template>
  <div> <!--It doesn't work if fragment is used -->
    <WorldScreen v-if="currentScreen===WORLD_SCREEN"/>
    <BattleScreen v-else-if="currentScreen===BATTLE_SCREEN"/>
  </div>
</template>

<script>
  import WorldScreen from "./screens/world_screen";
  import BattleScreen from "./screens/battle_screen";
  import {TITLE_SCREEN, WORLD_SCREEN, BATTLE_SCREEN} from "@/game/screen_constants";

  export default {
    name: "Game",
    components: {
      BattleScreen,
      WorldScreen,
    },
    data(){
      return{
        TITLE_SCREEN,
        WORLD_SCREEN,
        BATTLE_SCREEN
      }
    },
    computed: {
      currentScreen(){
        return this.$store.getters.currentScreen;
      },
    }
  }
</script>

<style scoped>

</style>