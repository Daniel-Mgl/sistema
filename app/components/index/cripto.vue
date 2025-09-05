<template>
        <p>
            Preços de hoje por capitalização de mercado
        </p>    
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

p {
    color: #A1A1A1;
    margin-bottom: 10px;
}

.container-cripto {
    height: 100%;
    display: grid;
    grid-template-areas:
    'populares populares historico historico'
    'nivel     nivel     nivel     nivel'
    'mercado   mercado   mercado   mercado';
    grid-template-rows: 1fr 40px 1fr;
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
}

.header-cripto > div > span:nth-child(2) {
    color: #77ED91;
}

.header-cripto-historico > span:nth-child(2) {
    font-size: 12px;
    color: #77ED91;
}

.lista-cripto {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
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
    padding: 5px 10px;
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
    color: #A1A1A1;
}

.item-mercado > div:nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.item-mercado > div:nth-child(2) > span:nth-child(1) {
    color: #2DC24E;
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
}

@media (max-with: 500px) {

}

</style>