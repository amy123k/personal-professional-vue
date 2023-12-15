<script setup>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Home, About, Portfolio, Contact
  }
}
</script>

<style scoped>
</style>
