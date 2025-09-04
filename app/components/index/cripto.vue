<template>
        <div class="container-cripto">
           <div class="populares-cripto">
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
            <div class="historico-cripto">
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
                    Mercado Estratégicos
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
                            <button>
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
                            <button>
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
                            <button>
                                Comprar Agora
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>

.container-cripto {
    height: 100%;
    display: grid;
    grid-template-areas:
    'populares populares historico historico'
    'nivel     nivel     nivel     nivel'
    'mercado   mercado   mercado   mercado';
    grid-template-rows: 1fr 50px 1fr;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.populares-cripto {
    border: 1px solid white;
    grid-area: populares;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 30px;
    padding: 10px 15px;
}
.historico-cripto {
    border: 1px solid white;
    grid-area: historico;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 30px;
    padding: 10px 15px;
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
}

.header-cripto > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
}

.header-cripto > div > span:nth-child(1) {
    border: 1px solid white;
    padding: 1px 5px;
    border-radius: 30px;
}

.lista-cripto {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
}

.lista-cripto > li {
    border: 1px solid white;
    border-radius: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}

.lista-cripto > li > div {
    display: flex;
    align-items: center;
    gap: 5px;
}

.lista-cripto > li > div > span:nth-child(4) {
    display: block;
    font-size: 10px;
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
}

.nivel-cripto > button {
    border: 1px solid white;
    background-color: black;
    color: white;
    padding: 10px 15px;
    border-radius: 30px;
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
}

.item-mercado > div:nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;
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
}

.item-mercado > div:nth-child(3) > button {
    border: none;
    padding: 10px 5px;
    border-radius: 30px;
    background-color: #77ED91;
}

</style>