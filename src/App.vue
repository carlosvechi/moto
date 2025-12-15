<template>
  <div class="d-flex flex-column min-vh-100">
    <TheNavBar />

    <main class="flex-fill">
      <router-view />
    </main>

    <TheFooter />
  </div>
</template>


<script>
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter,
  }
}
</script>

<style>
body {
  background-color: #ffffff !important;
}
</style>
