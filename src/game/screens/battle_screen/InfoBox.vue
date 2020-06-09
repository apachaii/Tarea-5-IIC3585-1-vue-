<template>
  <div id="info_box" :style="info_box_style" >
    <p v-for="(info,index) in battle_info" :key="index">
      {{info}}
    </p>
  </div>
</template>

<script>
  import {
    INFO_BOX_HEIGHT,
    INFO_BOX_HORIZONTAL_POSITION,
    INFO_BOX_VERTICAL_POSITION,
    INFO_BOX_WIDTH
  } from "./battle_constants";

  export default {
    name: "InfoBox",
    computed:{
      info_box_style(){
        return{
          width: INFO_BOX_WIDTH,
          height: INFO_BOX_HEIGHT,
          marginLeft: INFO_BOX_HORIZONTAL_POSITION,
          marginTop: INFO_BOX_VERTICAL_POSITION,
        }
      },
      battle_info(){
        return this.$store.getters.battle_info;
      },
    },
  }
</script>

<style scoped>
 #info_box{
   position: absolute;
   border: solid black 1px ;
   overflow-y: scroll;
 }
</style>