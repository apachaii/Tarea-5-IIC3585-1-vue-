<template>
    <fragment>
        <div id="background"/>
        <div id="level_grid" :style="gridStyle">
            <div
                    v-for="(levelRow, row_index) in currentLevelMatrix"
                    :key="row_index"
                    :style="rowStyle"
            >
                <div
                        v-for="(tile, tile_index) in levelRow"
                        :key="tile_index"
                        :style="tileStyle"
                >
                    {{tile}}
                </div>
            </div>
        </div>
    </fragment>
</template>

<script>
  import {MAP_SCREEN_HEIGHT, TILE_SIZE} from "@/game/world_screen/world_constants";

  export default {
    name: "Map",
    data() {
      return {
        rowStyle: {height: `${TILE_SIZE}px`},
        tileStyle: {
          height: `${TILE_SIZE}px`,
          width: `${TILE_SIZE}px`,
          display: "inline-flex",
        },
      };
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
        const map_scroll = `${TILE_SIZE * getters.currentScroll}px`;
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

</style>