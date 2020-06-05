<template>
  <div
    :style="carStyle"
  >
    <Chasis
      class="sprite_component"
      :style="chasisStyle"
    />
    <Wheels
      class="sprite_component"
      :style="wheelStyle"
    />
  </div>
</template>

<script>
  import Chasis from "../../assets/chasis.svg?vue-template";
  import Wheels from "../../assets/wheels.svg?vue-template";

  const faces_direction = {
    "right": "scaleX(-1)",
    "left": "scaleX(1)",
  }

  export default {
    name: "CarSprite",
    components: {
      Chasis, Wheels,
    },
    props: {
      height: {
        type: String,
        required: true
      },
      width: {
        type: String,
        required: true
      },
      face_direction: {
        type: String,
        required: true
      },
      chasis_color: {
        type: String,
        required: true
      },
      wheels_color: {
        type: String,
        required: true
      },
    },
    computed: {
      carStyle: function(){
        return {
          height: this.height,
          width: this.width,
          transform: faces_direction[this.face_direction],
        }
      },
      chasisStyle: function(){
        return {
          height: this.height,
          width: this.width,
          fill: this.chasis_color,
        }
      },
      wheelStyle: function(){
        return {
          height: this.height,
          width: this.width,
          fill: this.wheels_color,
        }
      },
    }
  }
</script>

<style scoped>
  .sprite_component {
    position: absolute;
  }
</style>