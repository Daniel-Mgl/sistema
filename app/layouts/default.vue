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
    height: 100vh;
    display: flex;
}

@media (max-width: 800px) {

main > section {
    padding-left: 60px;
    position: fixed;
    z-index: 1;
}

}

</style>