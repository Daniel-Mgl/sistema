<template>

    <div class="container-disponivel">

        <h2>
            Moedas Disponiveis
        </h2>

        <div>
            <p>
                Está área é gerenciada por uma empresa <br> terceirizada em ativos de criptomoedas
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
    gap: 10px;
    padding: 5px 0 10px 0;
}

.container-disponivel > h2 {
    font-size: 26px;
    font-family: var(--font-montserrat);
    font-weight: 600;
}

.container-disponivel > div:nth-child(2) {
    background-color: #F92727;
    width: fit-content;
    padding: 5px 8px;
    border-radius: 30px;
    font-family: var(--font-figtree);
}

.container-disponivel > div:nth-child(2) > p > br {
    display: none;
}

.container-disponivel > div:nth-child(3) > p {
    font-family: var(--font-montserrat);
    font-size: 20px;
    font-weight: 500;
}

.container-disponivel > div:nth-child(3) > p > span {
    font-size: 24px;
    font-family: var(--font-anek);
}

@media (max-width: 600px) {

    .container-disponivel {
        gap: 5px;
    }

    .container-disponivel > h2 {
        font-size: 22px;
    }

    .container-disponivel > div:nth-child(2) {
        padding: 5px 10px;
        font-size: 12px;
    }

    .container-disponivel > div:nth-child(2) > p > br {
        display: block;
    }

}

</style>