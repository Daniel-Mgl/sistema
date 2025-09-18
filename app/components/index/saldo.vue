<template>
  <div class="container-saldo">
    <div>
      <div class="saldo-atual">
        <span>
          Saldo Atual
          <button @click="toggleCss">
            <img :src="ativarCss ? olhoFechado : olhoAberto" alt="ícone olho" />
          </button>
        </span>
        <span>
          Disponível
        <span :class="{ oculto: ativarCss}">
          0
        </span>
        </span>
      </div>

        <button>
          + Add Fundos
        </button>
      
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'

import olhoAberto from '@/assets/img/img-index/icone-olho-aberto.svg'
import olhoFechado from '@/assets/img/img-index/icone-olho-fechado.svg'

const ativarCss = ref(false)

function toggleCss() {
  ativarCss.value = !ativarCss.value
}

</script>

<style scoped>

.container-saldo > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.saldo-atual {
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: white;
}

.saldo-atual > span:nth-child(1) {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #E1E1E1;
  font-family: var(--font-figtree);
}

.saldo-atual > span:nth-child(1) > button {
  background-color: transparent;
  border: none;
  display: flex;
  cursor: pointer;
}

.saldo-atual > span:nth-child(1) > button > img {
  width: 20px;
}

.saldo-atual > span:nth-child(2) {
  font-size: 20px;
  font-family: var(--font-montserrat);
  font-weight: 500;
}

.saldo-atual > span:nth-child(2) > span {
  display: inline-block;
  height: 0;
  padding: 0 3px;
  background-color: transparent;
  border-radius: 3px;
  font-family: var(--font-anek);
  transition: height 0.4s ease, background-color 0.3s ease;
}

.saldo-atual > span:nth-child(2) > span.oculto {
  height: 22px;
  user-select: none;
  background-color: white;
}

.container-saldo > div > button {
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  cursor: pointer;
  background-color: #77ED91;
  font-family: var(--font-figtree);
}

@media (max-width: 550px) {

  .container-saldo > div {
    padding: 10px 0;
  }

  .container-saldo > div > button {
    padding: 8px 10px;
  }

}

</style>