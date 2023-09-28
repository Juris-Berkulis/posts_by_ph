<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
<TheHeader />
<main class="main">
  <RouterView />
</main>
</template>

<style scoped>
.main {
  padding: 0 calc((100% - 1920px) / 2);
  background-color: #131313;

  @media (max-width: 1919px) {
    & {
      padding: 0 calc((100% - 765px) / 2);
    }
  }

  @media (max-width: 764px) {
    & {
      padding: 0 calc((100% - 360px) / 2);
    }
  }
}
</style>
