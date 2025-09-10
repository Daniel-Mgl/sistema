<template>

    <div class="container-carteira">

        <h2>
            Total de Ativos ( USDT )
        </h2>

        <div>
            <span>
                $1.00
            </span>
            <span>
                $1.0 (10,6%)
            </span>
        </div>

        <div>

            <button>
                Retirada
            </button>
            <button>
                Deposito
            </button>

        </div>

    </div>

</template>

<script setup>

</script>

<style scoped>

.container-carteira {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: white;
    padding: 30px 0;
}

.container-carteira > h2 {
    font-family: var(--font-roboto);
}

.container-carteira > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--font-roboto);
}

.container-carteira > div:nth-child(2) > span:nth-child(1) {
    font-size: 36px;
}

.container-carteira > div:nth-child(2) > span:nth-child(2) {
    font-size: 14px;
    color: #5ECCA3;
}

.container-carteira > div:nth-child(3) {
    display: flex;
    gap: 10px;
}

.container-carteira > div:nth-child(3) > button {
    width: 200px;
    height: 35px;
    font-size: 16px;
    border: none;
    border-radius: 30px;
    color: white;
    background-color: #279646;
    cursor: pointer;
    font-family: var(--font-roboto);
}

@media (max-width: 600px) {

    .container-carteira > h2 {
        font-size: 20px;
    }

    .container-carteira > div:nth-child(2) > span:nth-child(1) {
        font-size: 30px;
    }

    .container-carteira > div:nth-child(2) > span:nth-child(2) {
        font-size: 13px;
    }

    .container-carteira > div:nth-child(3) > button {
        width: 130px;
    }

}

</style>