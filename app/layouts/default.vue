<template>
    <main>
        <SideBar/>
        <slot></slot>
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

</style>