<template>
  <section>
      <Header/>
      <Saldo/>
      <Cripto/>
  </section>
</template>

<script setup>
import Header from '../components/header.vue'
import Saldo from '../components/index/saldo.vue'
import Cripto from '../components/index/cripto.vue'
</script>

<style scoped>

section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px 30px 20px;
}

@media (max-width: 800px) {

  section {
    position: fixed;
    padding-left: 75px;
    z-index: 1;
  }

}

</style>