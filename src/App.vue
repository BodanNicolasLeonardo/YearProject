<script setup>
import LoginPage from './components/LoginPage.vue'
import { onMounted, onUpdated } from 'vue'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import BindLink from './components/BindLink.vue'
import BootstrapIcons from './components/BootstrapIcons.vue'

onMounted(() => {
  console.log('App Mounted')
})

onUpdated(() => {
  console.log('App updated')
})
</script>

<template>
  <header>

  </header>
  <i class="bi bi-brightness-high"></i>
  <router-view />
</template>

<style scoped>

</style>
