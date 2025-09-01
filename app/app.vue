<template>
  
  <NuxtLayout>
  <NuxtPage/>
  </NuxtLayout>

</template>

<script>

</script>

<style>

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

