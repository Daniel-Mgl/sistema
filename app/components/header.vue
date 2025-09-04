<template>
    <header>

        <div class="cabecalho">

            <div class="separador01">
                <h1>
                    Dashboard
                </h1>
                <span>
                    Atualizado: 26/08/2025 ás 8:17
                </span>
            </div>

            <div class="separador02">
               <button class="btn-notificacao">
                    <img src="../assets/img/img-index/notification-bing.png" alt="Icone sino de notificação">
                    <span></span>
               </button>
               <div class="usuario">
                    <div class="foto-usuario">
                        
                    </div>
                    <span>
                        Administrador
                    </span>
                    <span>></span>
               </div>
            </div>

        </div>

    </header>
</template>

<script setup>

</script>

<style scoped>

header {
    width: 100%;
    padding: 20px 0 0 0;
}

.cabecalho {
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}

.separador01 > h1 {
    font-size: 32px;
}

.separador02 {
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn-notificacao {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background-color: #151718;
}

.btn-notificacao > span {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 6px;
    right: 10px;
    border-radius: 50%;
    background-color: red;
}

.usuario {
    display: flex;
    align-items: center;
    gap: 10px;
}

.foto-usuario {
    border: 1px solid white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.usuario > span:nth-child(2) {
    font-size: 17px;
}

.usuario > span:nth-child(3) {
    transform: rotate(90deg);
}

</style>