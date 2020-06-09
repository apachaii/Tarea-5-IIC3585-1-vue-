<template>
  <div> <!--It doesn't work if fragment is used -->
    <WorldScreen v-if="currentScreen===WORLD_SCREEN"/>
    <BattleScreen v-else-if="currentScreen===BATTLE_SCREEN"/>
    <TitleScreen v-else-if="currentScreen===TITLE_SCREEN"/>
  </div>
</template>

<script>
  import WorldScreen from "./screens/world_screen";
  import BattleScreen from "./screens/battle_screen";
  import TitleScreen from "./screens/title_screen";
  import {TITLE_SCREEN, WORLD_SCREEN, BATTLE_SCREEN} from "@/game/screen_constants";

  export default {
    name: "Game",
    components: {
      BattleScreen,
      WorldScreen,
      TitleScreen,
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