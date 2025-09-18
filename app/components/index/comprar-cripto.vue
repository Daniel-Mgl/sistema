<template>
    <div class="container-comprar-cripto">
        <div class="comprar-cripto">
            <div>
                <button @click="$emit('fechar')">
                    x
                </button>
            </div>
            <div>
                <div>
                    <p>
                        Tether - 1 dia
                    </p>
                    <button>
                        Buy
                    </button>
                </div>
                <span>
                    Limite
                </span>
                <div>
                    <ul>
                        <li class="item-quantidade">
                            <p>
                                Preço Limite
                            </p>
                            <span>
                                $5.00
                            </span>
                        </li>
                        <li class="item-quantidade">
                            <p>
                                Quantidade em US$
                            </p>
                            <div>
                                <span>
                                    fixo
                                </span>
                                <span>
                                    $5.00
                                </span>
                            </div>
                        </li>
                        <li>
                            <input type="range">
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <span>
                        Total
                    </span>
                    <span>
                        $5.00
                    </span>
                </div>
                <button>
                    Buy now
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['fechar'])
</script>

<style scoped>

.container-comprar-cripto {
    width: 100%;
    max-width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
}

.comprar-cripto {
    color: white;
    background-color: #151718;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 10px #77ed90;
    font-family: var(--font-figtree);
}

.comprar-cripto > div:nth-child(1) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 10px 10px 0 0;
}

.comprar-cripto > div:nth-child(1) > button {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
}

.comprar-cripto > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 10px 15px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.comprar-cripto > div:nth-child(2) > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.comprar-cripto > div:nth-child(2) > div:nth-child(1) > button {
    padding: 5px 30px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-family: var(--font-figtree);
}

.comprar-cripto > div:nth-child(2) > span:nth-child(2) {
    width: fit-content;
    background-color: white;
    color: black;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 30px;
}

.comprar-cripto > div:nth-child(2) > div:nth-child(3) > ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.item-quantidade {
    background-color: #212325;
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    border-radius: 30px;
}

.item-quantidade > span:nth-child(2) {
    font-family: var(--font-anek);
}

.item-quantidade > div > span:nth-child(2) {
    font-family: var(--font-anek);
}

.comprar-cripto > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(2) > div > span:nth-child(1) {
    color: red;
    font-size: 14px;
}

.comprar-cripto > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(3) > input {
    width: 100%;
    cursor: grab;
}

.comprar-cripto > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(3) > input:active {
    cursor: grabbing;
}

.comprar-cripto > div:nth-child(3) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    padding: 15px 10px;
}

.comprar-cripto > div:nth-child(3) > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #212325;
    padding: 15px 10px;
    border-radius: 30px;
}

.comprar-cripto > div:nth-child(3) > div > span:nth-child(2) {
    font-family: var(--font-anek);
}

.comprar-cripto > div:nth-child(3) > button {
    width: 100%;
    max-width: 200px;
    height: 35px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-family: var(--font-figtree);
}

@media (max-width: 800px) {
    .container-comprar-cripto {
        padding: 0 10px 0 65px;
    }
}

</style>