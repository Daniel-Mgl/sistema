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
    height: 100dvh;
    display: flex;
    background-color: black;
}

section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

@media (max-width: 800px) {

  section {
    position: fixed;
    padding: 10px 10px 10px 65px;
    z-index: 1;
  }

}

</style>