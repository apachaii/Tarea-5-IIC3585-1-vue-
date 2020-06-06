<template>
  <div
    id="title_screen"
    :style="screen_style"
  >
    <h1>Car vs Dogs</h1>
    <h2>React Edition</h2>
    <p>Press [space] to start</p>
  </div>
</template>

<script>
  const TITLE_HEIGHT = 500;
  const TITLE_WIDTH = 500;

  export default {
    name: "TitleScreen",
    computed:{
      screen_style(){
        return{
          height: `${TITLE_HEIGHT}px`,
          width: `${TITLE_WIDTH}px`,
        }
      }
    },
  }
</script>

<style scoped>
  #title_screen{
    margin: 0 auto;
  }
</style>