<template>

    <div class="login-cadastro-layout">
        <header>
            Logo
        </header>
        <div>
            <div class="img-login-cadastro">
                <img src="../assets/img/img-login-cadastro/undraw_investment-data_frxx.svg" alt="Imagem do login e cadastro">
            </div>
            <div class="container-login-cadastro">
                <slot />
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

    .login-cadastro-layout {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    header {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        color: white;
        font-size: 25px;
    }

    .login-cadastro-layout > div {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .img-login-cadastro {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #212325;
        padding: 0 15px;
    }

    .img-login-cadastro > img {
        width: 100%;
        max-width: 600px;
    }

    .container-login-cadastro {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    @media (max-width: 800px) {

        .img-login-cadastro {
            display: none;
        }

        .login-cadastro-layout > div {
            grid-template-columns: 1fr;
        }

    }

</style>