<template>
  <div id="enemy_box" :style="enemy_box_style">
    <Dog
      v-if="!successful_fetch"
      viewBox="0 0 512 512"
      class="dog"
    />
    <img
      v-if="successful_fetch"
      :src="image"
      alt="A dog"
      class="dog"
    />
    <LifeBox
      v-bind="enemy_life"
    />
  </div>
</template>

<script>
  import LifeBox from "./LifeBox";
  import {
    BATTLE_BOX_HEIGHT,
    BATTLE_BOX_VERTICAL_POSITION,
    BATTLE_BOX_WIDTH,
    ENEMY_VERTICAL_POSITION
  } from "./battle_constants";
  import Dog from "../../../assets/pet-bottle.svg"

  export default {
    name: "EnemyBox",
    components:{
      LifeBox,
      Dog,
    },
    data() {
      return {
        successful_fetch: false,
        image: "No",
      };
    },
    created () {
      this.fetchDaImage();
    },
    computed:{
      enemy_box_style(){
        return{
          width: BATTLE_BOX_WIDTH,
          height: BATTLE_BOX_HEIGHT,
          marginTop: BATTLE_BOX_VERTICAL_POSITION,
          marginLeft: ENEMY_VERTICAL_POSITION,
        }
      },
      enemy_life(){
        const {
          enemy_life,
          enemy_total_life,
        }= this.$store.getters.battle_life;
        return {
          current_life: enemy_life,
          total_life: enemy_total_life,
        }
      },
    },
    methods: {
      fetchDaImage: function() {
        fetch('https://dog.ceo/api/breeds/image/random', {
          method: 'GET',
        })
          .then((response) => {
            return response.text();
          })
          .then((data) => {
            const pic = JSON.parse(data);
            this.image = pic.message;
            this.successful_fetch = pic.status === "success";
          });
      }
    }
  }
</script>

<style scoped>
  #enemy_box{
    position: absolute;
  }
  .dog{
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>