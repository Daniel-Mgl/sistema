<template>
    <main>
        <SideBar/>
        <section>
            <slot></slot>
        </section>
    </main>
</template>

<script setup>

import SideBar from '../components/Sidebar.vue'

</script>

<style scoped>

main {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: black;
}

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