<template>
        <div class="div01">
            <p>
                Preços de hoje por <br> capitalização de mercado
            </p>
            <button @click="toggleHistorico">
                {{ mostrarHistorico ? 'Ver Populares' : 'Ver Histórico' }}
            </button>
        </div>   
        <div class="container-cripto">
           <div class="populares-cripto" v-show="!isMobile || !mostrarHistorico">
                <div class="header-cripto">
                    <span>
                        Populares
                    </span>

                    <div>
                        <span>
                            24h
                        </span>
                        <span>
                            Em alta
                        </span>
                    </div>
                </div>

                <ul class="lista-cripto">
                    <li v-for="moeda in moedas" :key="moeda.id">
                        <div>
                            <span>
                                {{ moeda.id }}
                            </span>
                            <img src="" alt="">
                            <span>
                                {{ moeda.nome }}
                            </span>
                            <span>
                                {{ moeda.sigla }}
                            </span>
                        </div>

                        <span>
                            {{ moeda.valor }}
                        </span>
                    </li>
                </ul>

            </div>
            <div class="historico-cripto" v-show="!isMobile || mostrarHistorico">
                <div class="header-cripto header-cripto-historico">
                    <span>
                        Seu Histórico
                    </span>

                    <span>
                        Recentes
                    </span>
                </div>

                <ul class="lista-cripto">
                    <li>
                        <div>
                            <span>
                                1
                            </span>
                            <img src="" alt="">
                            <span>
                                Tether
                            </span>
                            <span>
                                USDT
                            </span>
                        </div>

                        <span>
                            +0,40%
                        </span>
                    </li>
                    <li>
                        <div>
                            <span>
                                1
                            </span>
                            <img src="" alt="">
                            <span>
                                Tether
                            </span>
                            <span>
                                USDT
                            </span>
                        </div>

                        <span>
                            +0,40%
                        </span>
                    </li>
                    <li>
                        <div>
                            <span>
                                1
                            </span>
                            <img src="" alt="">
                            <span>
                                Tether
                            </span>
                            <span>
                                USDT
                            </span>
                        </div>

                        <span>
                            +0,40%
                        </span>
                    </li>
                </ul>
            </div>
            <div class="nivel-cripto">
                <h2>
                    Mercados Estratégicos
                </h2>
                <button>
                    Nível 1
                </button>
            </div>
            <div class="mercado-cripto">
                <ul class="lista-cripto">
                    <li class="item-mercado">
                        <div>
                            <span>
                                1
                            </span>
                            <span>
                                Tether
                            </span>
                            <span>
                                USDT
                            </span>
                        </div>

                        <div>
                            <span>
                                +4.40%
                            </span>
                            <span>
                                Lucro Total
                            </span>
                        </div>

                        <div>
                            <div>
                                <span>
                                    1 dia
                                </span>
                                <span>
                                    Prazo
                                </span>
                            </div>
                            <button @click="abrirModal">
                                Comprar Agora
                            </button>
                        </div>
                    </li>
                    <li class="item-mercado">
                        <div>
                            <span>
                                1
                            </span>
                            <span>
                                Tether
                            </span>
                            <span>
                                USDT
                            </span>
                        </div>

                        <div>
                            <span>
                                +4.40%
                            </span>
                            <span>
                                Lucro Total
                            </span>
                        </div>

                        <div>
                            <div>
                                <span>
                                    1 dia
                                </span>
                                <span>
                                    Prazo
                                </span>
                            </div>
                            <button @click="abrirModal">
                                Comprar Agora
                            </button>
                        </div>
                    </li>
                    <li class="item-mercado">
                        <div>
                            <span>
                                1
                            </span>
                            <span>
                                Tether
                            </span>
                            <span>
                                USDT
                            </span>
                        </div>

                        <div>
                            <span>
                                +4.40%
                            </span>
                            <span>
                                Lucro Total
                            </span>
                        </div>

                        <div>
                            <div>
                                <span>
                                    1 dia
                                </span>
                                <span>
                                    Prazo
                                </span>
                            </div>
                            <button @click="abrirModal">
                                Comprar Agora
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <ComprarCripto v-if="mostrarComprar" @fechar="mostrarComprar = false" />
        </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ComprarCripto from '~/components/index/comprar-cripto.vue'

const { data: moedas } = await useFetch('/api/moedas')
const mostrarHistorico = ref(false)
const isMobile = ref(false)
const mostrarComprar = ref(false)

function abrirModal() {
  mostrarComprar.value = true
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 550
  if (!isMobile.value) {
    mostrarHistorico.value = false
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const toggleHistorico = () => {
  if (isMobile.value) {
    mostrarHistorico.value = !mostrarHistorico.value
  }
}
</script>

<style scoped>

.div01 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.div01 > p {
    color: #A1A1A1;
    font-family: var(--font-figtree);
}

.div01 > p > br {
    display: none;
}

.div01 > button {
    display: none;
}

.container-cripto {
    height: 100%;
    display: grid;
    grid-template-areas:
    'populares populares historico historico'
    'nivel     nivel     nivel     nivel'
    'mercado   mercado   mercado   mercado';
    grid-template-rows: 1fr 30px 1fr;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.populares-cripto {
    grid-area: populares;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 30px;
    padding: 10px 15px;
    background-color: #151718;
}
.historico-cripto {
    grid-area: historico;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 30px;
    padding: 10px 15px;
    background-color: #151718;
}

.header-cripto {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 0 10px;
}

.header-cripto > span {
    font-size: 22px;
    font-family: var(--font-montserrat);
    font-weight: 500;
}

.header-cripto > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
}

.header-cripto > div > span:nth-child(1) {
    border: 1px solid #D34141;
    padding: 1px 5px;
    border-radius: 30px;
    font-family: var(--font-figtree);
}

.header-cripto > div > span:nth-child(2) {
    color: #77ED91;
    font-family: var(--font-figtree);
    font-size: 13px;
}

.header-cripto-historico > span:nth-child(2) {
    font-size: 15px;
    color: #77ED91;
    font-family: var(--font-figtree);
}

.lista-cripto {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    font-family: var(--font-figtree);
}

.lista-cripto > li {
    border-radius: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background-color: #212325;
}

.lista-cripto > li > div {
    display: flex;
    align-items: center;
    gap: 5px;
}

.lista-cripto > li > div > span:nth-child(4) {
    display: block;
    font-size: 10px;
    color: #A1A1A1;
}

.lista-cripto > li > span {
    color: #2DC24E;
    font-family: var(--font-anek);
}

.nivel-cripto {
    grid-area: nivel;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}

.nivel-cripto > h2 {
    color: white;
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: 23px;
}

.nivel-cripto > button {
    border: 1px solid white;
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 30px;
    font-family: var(--font-figtree);
}

.mercado-cripto {
    grid-area: mercado;
    border-radius: 30px;
}

.item-mercado > div:nth-child(1) {
    display: flex;
    align-items: center;
}

.item-mercado > div:nth-child(1) > span:nth-child(3) {
    display: block;
    font-size: 10px;
    color: #A1A1A1;
}

.item-mercado > div:nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.item-mercado > div:nth-child(2) > span:nth-child(1) {
    color: #2DC24E;
    font-family: var(--font-anek);
}

.item-mercado > div:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 10px;
}

.item-mercado > div:nth-child(3) > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    font-family: var(--font-figtree);
}

.item-mercado > div:nth-child(3) > div > span:nth-child(1) {
    border: 1px solid #D34141;
    border-radius: 30px;
    padding: 1px 5px;
}

.item-mercado > div:nth-child(3) > button {
    border: none;
    padding: 10px 5px;
    border-radius: 30px;
    background-color: #77ED91;
    font-family: var(--font-figtree);
    cursor: pointer;
}

@media (max-width: 550px) {

    .div01 > p > br {
        display: block;
    }

    .div01 > button {
        display: block;
        width: 90px;
        padding: 7px 0;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        font-family: var(--font-figtree);
    }

    .container-cripto {
        grid-template-areas:
    'cripto    cripto    cripto    cripto'
    'nivel     nivel     nivel     nivel'
    'mercado   mercado   mercado   mercado';
    }

    .populares-cripto {
        grid-area: cripto;
    }

    .historico-cripto {
        grid-area: cripto;
    }

    .header-cripto > div > span {
        font-size: 10px;
    }

    .header-cripto > span {
        font-size: 20px;
    }

    .lista-cripto > li > div > span {
        font-size: 14px;
    }

    .lista-cripto > li > span {
        font-size: 14px;
    }

    .nivel-cripto > h2 {
        font-size: 20px;
    }

    .item-mercado > div > span {
        font-size: 14px;
    } 

    .item-mercado > div:nth-child(2) {
        gap: 0px;
    }

    .item-mercado > div:nth-child(3) > div > span {
        font-size: 11px;
    }

    .item-mercado > div:nth-child(3) {
        flex-direction: column;
        gap: 5px;
    }

    .item-mercado > div:nth-child(3) > div {
        flex-direction: row-reverse;
        gap: 3px;
    }

    .item-mercado > div:nth-child(3) > button {
        padding: 4px 5px;
        font-size: 13px;
    }

}

</style>