<template>
  <TheNavBar />
  <!-- <TheCarrossel /> -->
  <router-view />  <!-- Onde cada página aparece -->

  <TheFooter />
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';
// import TheCarrossel from './components/TheCarrossel.vue';

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter,
    // TheCarrossel
  }
}
</script>

<style>
body {
  background-color: #ffffff !important;
}
</style>
