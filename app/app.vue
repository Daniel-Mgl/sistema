<template>
    <main>
      <SideBar/>
    </main>
</template>

<script setup>

import SideBar from '../components/Sidebar.vue'

</script>

<style scoped>

main {
  height: 100vh;
}

</style>

<!-- <template>
  <div v-if="data">
    <h1>
      {{ data.valor }}
    </h1>
  </div>
</template>

<script lang="ts" setup>

interface Saldo {
  id: number
  valor: number
}

const { data, status, error } = await useFetch<Saldo>('https://arquivoteste.onrender.com/api/saldo')

console.log(data.value)

</script> -->

