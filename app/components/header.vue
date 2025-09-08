<template>
    <header>

        <div class="cabecalho">

            <div class="separador01">
                <div>
                    <h1>
                        {{ titulo }}
                    </h1>

                    <div v-if="extra">
                        {{ extra }}
                    </div>
                </div>
                <span>
                    <strong>Atualizado:</strong>
                    26/08/2025 ás 8:17
                </span>
            </div>

            <div v-if="!hideUser" class="separador02">
               <button class="btn-notificacao">
                    <img src="../assets/img/img-index/notification-bing.png" alt="Icone sino de notificação">
                    <span></span>
               </button>
               <div class="usuario">
                    <div class="foto-usuario">
                        
                    </div>
                    <div>
                        <span>
                            Administrador
                        </span>
                        <span>></span>
                    </div>
               </div>
            </div>

        </div>

    </header>
</template>

<script setup>

defineProps({
  titulo: {
    type: String,
    required: true
  },
  extra: {
     type: String,
     required: false
  },
  hideUser: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

header {
    width: 100%;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid rgb(255, 255, 255, 0.3);
}

.cabecalho {
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}

.separador01 > div {
    display: flex;
    align-items: center;
    gap: 15px;
}

.separador01 > div > div {
    background-color: #F92727;
    padding: 3px 5px;
    border-radius: 30px;
}

.separador01 > div > h1 {
    font-size: 32px;
    font-family: var(--font-abeezee);
}

.separador01 > span {
    color: #909093;
    font-size: 14px;
    font-family: var(--font-abeezee);
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

.usuario > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 5px;
}

.usuario > div:nth-child(2) > span {
    font-family: var(--font-abeezee);
}

.usuario > div:nth-child(2) > span:nth-child(2) {
    font-size: 17px;
}

.usuario > span:nth-child(3) {
    transform: rotate(90deg);
}

@media (max-width: 550px) {

    .separador01 > div {
        padding: 0;
    }

    .separador01 > div > h1 {
        font-size: 25px;
    }

    .separador01 > span {
        display: flex;
        flex-direction: column;
        line-height: 13px;
    }

    .separador01 > span > br {
        display: block;
        line-height: px;
    }

    .separador02 {
        position: relative;
    }

    .btn-notificacao {
        position: absolute;
        top: 0;
        right: 0;
    }

    .usuario {
        flex-direction: column;
        align-items: start;
        gap: 2px;
    }

    .foto-usuario {
        width: 40px;
        height: 40px;
    }
}

</style>