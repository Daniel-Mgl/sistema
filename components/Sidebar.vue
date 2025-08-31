<template>
    <aside :class="{ ativo: isActive }">
        <div class="logo">
            Logo
        </div>

        <div class="div-btn-seta-aside" :class="{ ativo: isActive }">
            <button class="btn-seta-aside" @click="toggleAside" :class="{ ativo: isActive }">
                >
            </button>
        </div>

        <ul class="lista-aside" :class="{ ativo: isActive }">
            <li>
               <NuxtLink class="link-aside" to="#" :class="{ ativo: isActive }">
                <img src="../assets/img/menu.png" alt="">
                <span>Dashboard</span>
                </NuxtLink>
            </li>
            <li>
               <NuxtLink class="link-aside" to="#" :class="{ ativo: isActive }">
                <img src="../assets/img/activity.png" alt="">
                <span>Dashboard</span>
                </NuxtLink>
            </li>
            <li>
               <NuxtLink class="link-aside" to="#" :class="{ ativo: isActive }">
                <img src="../assets/img/trade.png" alt="">
                <span>Dashboard</span>
                </NuxtLink>
            </li>
            <li>
               <NuxtLink class="link-aside" to="#" :class="{ ativo: isActive }">
                <img src="../assets/img/wallet-2.png" alt="">
                <span>Dashboard</span>
                </NuxtLink>
            </li>
        </ul>

        <button class="btn-sair-aside" :class="{ ativo: isActive }">
            <img src="../assets/img/logout.png" alt="">
            <span :class="{ ativo: isActive }">Logout</span>
        </button>
    </aside>
</template>

<script lang="ts" setup>

import { ref } from "vue"

const isActive = ref(false)

const toggleAside = () => {
  isActive.value = !isActive.value
}

</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

aside {
    width: 250px;
    height: 100%;
    display: grid;
    grid-template-rows: 20% auto 20%;
    background-color: #101111;
    border-radius: 0 20px 20px 0;
    transition: width ease 1s;
}

.logo {
    height: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.div-btn-seta-aside {
    display: none;
}

.lista-aside {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 0 0 20px;
    transition: all 1s;
}

.link-aside {
   max-width: 150px;
   height: 38px;
   display: flex;
   align-items: center;
   gap: 10px;
   border-radius: 30px;
   padding: 0 0 0 3px;
   color: white;
   transition: all 1s;
}

.link-aside:hover {
    background-color: white;
    color: black;
}

.link-aside > img {
    border-radius: 50%;
    padding: 5px;
    background-color: #101111;
}

aside > .btn-sair-aside {
    width: 80px;
    height: 30px;
    border: 1px solid transparent;
    cursor: pointer;
    background-color: transparent;
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 3px 0 3px;
    margin: 0 0 0 30px;
    border-radius: 30px;
    transition: all 1s;
}

aside > .btn-sair-aside:hover {
    border: 1px solid white;
    border-radius: 30px;
}

.div-btn-seta-aside {
    transition: all 1s;
}

.btn-sair-aside {
    transition: all 1s;
}

@media (max-width: 800px) {

    aside.ativo {
        width: 50px;
    }

    .logo {
        display: none;
    }

    .div-btn-seta-aside {
        width: 250px;
        height: fit-content;
        display: flex;
        justify-content: end;
        padding: 5px 5px 0 0;
        transition: all 1s;
    }

    .div-btn-seta-aside.ativo {
        width: 50px;
    }

    .btn-seta-aside {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        font-size: 20px;
        border-radius: 50%;
        border: none;
        transition: all 1s;
    }

    .btn-seta-aside.ativo {
        transform: rotate(180deg);
    }

    .lista-aside.ativo {
        padding: 0 5px 0 5px;
        overflow: hidden;
    }

    .lista-aside > li > .link-aside.ativo {
        min-width: 40px;
        padding: 0 0 0 4px;
    }

    aside > .btn-sair-aside.ativo {
        width: 30px;
        height: 30px;
        margin: 0 0 0 10px;
        overflow: hidden;
    }

}

</style>