<template>
  <div id="app">
    <Game></Game>
  </div>
</template>

<script>
import Game from "./game/Game";

export default {
  name: 'App',
  components: {
    Game,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
