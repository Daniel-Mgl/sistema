<template>

    <div class="container-disponivel">

        <h2>
            Moedas Disponiveis
        </h2>

        <div>
            <p>
                Está área é gerenciada por uma empresa terceirizada em ativos de criptomoedas
            </p>
        </div>

        <div>
            <p>
                Disponivel:
                <span>
                    $0.00
                </span>
            </p>
        </div>

    </div>

</template>

<script setup>

</script>

<style scoped>

.container-disponivel {
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
}

.container-disponivel > h2 {
    font-size: 26px;
}

.container-disponivel > div:nth-child(2) {
    background-color: #F92727;
    width: fit-content;
    padding: 5px 8px;
    border-radius: 30px;
    margin: 5px 0 10px 0;
}

.container-disponivel > div:nth-child(3) > p > span {
    font-size: 24px;
}

</style>