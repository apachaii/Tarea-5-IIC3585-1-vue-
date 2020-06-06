<template>
  <div>
    <p>
      {{`${current_life}/${total_life}`}}
    </p>
  </div>
</template>

<script>
  export default {
    name: "LifeBox",
    props:{
      current_life: {
        type: Number,
        required: true
      },
      total_life: {
        type: Number,
        required: true
      },
    }
  }
</script>

<style scoped>
 div{
   bottom: 0;
   background-color: white;
   position: absolute;
 }
 p{
   margin: 0;
 }
</style>