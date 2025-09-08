<template>
  <div class="screener" ref="screenerContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const screenerContainer = ref(null)

onMounted(() => {
  if (screenerContainer.value) {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
    script.async = true

    script.innerHTML = JSON.stringify({
      width: '100%',
      height: '100%',
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'dark',
      locale: 'br'
    })

    screenerContainer.value.appendChild(script)
  }
})
</script>

<style scoped>

.screener {
  height: 100%;
}

</style>
