<template>
    <div class="container-saldo">
          <div>
             <div class="saldo-atual">
                  <span>
                      Saldo Atual
                      <button @click="toggleCss">
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
  padding: 15px 0 15px 0;
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
}

.saldo-atual > span:nth-child(1) > button {
  width: 20px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
}

.saldo-atual > span:nth-child(2) {
  font-size: 20px;
}

.saldo-atual > span:nth-child(2) > span {
  display: inline-block;
  height: 0;
  padding: 0 3px;
  background-color: transparent;
  border-radius: 3px;
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
}

</style>