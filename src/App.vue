<template>
  <TheNavBar />
  <TheCarrossel />
  <TheFooter />
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import TheCarrossel from './components/TheCarrossel.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',
  components: {
    TheNavBar,
    TheCarrossel,
    TheFooter,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #ffffff !important;
}
</style>
