<template>
  <fragment>
    <div id="background"/>
    <div id="level_grid" :style="gridStyle">
      <div
        v-for="(levelRow, row_index) in currentLevelMatrix"
        :key="row_index"
        :style="rowStyle"
      >
        <div class="tile"
             v-for="(tile, tile_index) in levelRow"
             :key="tile_index"
             :style="{...tileStyle,...get_tile_style(currentTilesInfo[tile]) }"
        >
          <fragment v-if="currentTilesInfo[tile] && currentTilesInfo[tile].sprite">
            <Tree
              v-if="currentTilesInfo[tile].sprite.form === 'tree'"
              :style="{fill: currentTilesInfo[tile].sprite.fill}"
            />
          </fragment>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
  import {MAP_SCREEN_HEIGHT, TILE_SIZE} from "@/game/world_screen/world_constants";
  import get_tile_style from "./get_tile_style";
  import Tree from "./tile_sprites/Tree.svg?vue-template";

  export default {
    name: "Map",
    components: {
      Tree,
    },
    data() {
      return {
        rowStyle: {height: `${TILE_SIZE}px`},
        tileStyle: {
          height: `${TILE_SIZE}px`,
          width: `${TILE_SIZE}px`,
        },
      };
    },
    methods: {
      get_tile_style,
    },
    computed: {
      currentLevelMatrix() {
        return this.$store.getters.currentLevelMatrix;
      },
      currentTilesInfo() {
        return this.$store.getters.currentTilesInfo;
      },
      gridStyle() {
        const getters = this.$store.getters;
        const map_scroll = `${getters.currentScroll}px`;
        const map_width = `${TILE_SIZE * getters.currentLevelWidth}px`;
        return {
          left: map_scroll,
          height: `${MAP_SCREEN_HEIGHT}px`,
          width: map_width,
        }
      },
    },
  }
</script>

<style scoped>
  #background {
    position: absolute;
    height: 100%;
    width: 100%;

  }

  #level_grid {
    position: absolute;
    height: 100%;

    left: 0; /* todo remove */
    background-color: skyblue; /* todo remove */
  }

  .tile {
    display: inline-flex;
  }

</style>