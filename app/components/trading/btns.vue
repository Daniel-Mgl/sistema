<template>

    <div>

        <button>
            + Add Moedas
        </button>
        <button>
            Compartilhar
        </button>
        <button>
            Opções
        </button>

    </div>

</template>

<script setup>

</script>

<style scoped>

div {
    color: white;
    display: flex;
    justify-content: end;
    gap: 10px;
    padding: 0 0 10px 0;
}

div > button {
    padding: 5px 10px;
    border-radius: 30px;
    border: none;
    color: white;
    background-color: #1A1D1E;
    cursor: pointer;
    font-family: var(--font-figtree);
}

</style>