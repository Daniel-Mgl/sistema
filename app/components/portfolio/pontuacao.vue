<template>
  <div class="container-pontuacao">
        <div>
            <div>
                <img :src="medalha" alt="medalha" />
                <ul>
                    <li>
                    <span>8%</span>
                    <span>Nível 1</span>
                    <span>Reinvestimento: 4%</span>
                    </li>
                    <li>
                    <span>8%</span>
                    <span>Nível 1</span>
                    <span>Reinvestimento: 4%</span>
                    </li>
                    <li>
                    <span>8%</span>
                    <span>Nível 1</span>
                    <span>Reinvestimento: 4%</span>
                    </li>
                </ul>
            </div>

            <ul>
                <li>
                    <span>
                        Total de Depósitos
                    </span>
                    <span>
                        2.52% (+$324.82)
                    </span>
                </li>
                <li>
                    <span>
                        Total Investido
                    </span>
                    <span>
                        2.52% (+$324.82)
                    </span>
                </li>
                <li>
                    <span>
                        Comissões
                    </span>
                    <span>
                        2.52% (+$324.82)
                    </span>
                </li>
            </ul>
        </div>

        <div>
            <button>
            Copiar link de indicação
            </button>
            
            <button>
                Regras
            </button>
        </div>

  </div>
</template>

<script setup>
import medalha from '../../assets/img/img-portfolio/medalha.png'
</script>

<style scoped>

.container-pontuacao {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px 0 30px 0;
}

.container-pontuacao > div:nth-child(1) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 0 20px 0;
}

.container-pontuacao > div:nth-child(1) > div:nth-child(1) {
    display: flex;
    gap: 20px;
    padding: 0 20px 0 0;
    border-right: 1px solid white;
}

.container-pontuacao > div:nth-child(1) > div:nth-child(1) > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.container-pontuacao > div:nth-child(1) > div:nth-child(1) > ul > li {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.container-pontuacao > div:nth-child(1) > div:nth-child(1) > ul > li > span {
    font-family: var(--font-anek);
}

.container-pontuacao > div:nth-child(1) > div:nth-child(1) > ul > li > span:nth-child(1) {
    font-size: 24px;
}

.container-pontuacao > div:nth-child(1) > div:nth-child(1) > ul > li > span:nth-child(3) {
    font-size: 14px;
    font-family: var(--font-figtree);
}

.container-pontuacao > div:nth-child(1) > div:nth-child(1) > img {
    width: 60px;
    height: fit-content;
    object-fit: cover;
}

.container-pontuacao > div:nth-child(1) > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 20px;
}

.container-pontuacao > div:nth-child(1) > ul > li {
    display: flex;
    flex-direction: column;
    font-family: var(--font-figtree);
}

.container-pontuacao > div:nth-child(1) > ul > li > span:nth-child(1) {
    font-size: 13px;
}

.container-pontuacao > div:nth-child(1) > ul > li > span:nth-child(2) {
    color: #2DC24E;
}

.container-pontuacao > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.container-pontuacao > div:nth-child(2) > button:nth-child(1) {
    border: none;
    height: 40px;
    border-radius: 30px;
    font-size: 17px;
    font-family: var(--font-figtree);
}

.container-pontuacao > div:nth-child(2) > button:nth-child(2) {
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 30px;
    margin-left: auto;
    font-size: 17px;
    background-color: #A29CFF;
    font-family: var(--font-figtree);
}

@media (max-width: 1150px) {

    .container-pontuacao > div:nth-child(1) {
        grid-template-columns: 1fr;
        gap: 3px;
    }

    .container-pontuacao > div:nth-child(1) > div:nth-child(1) {
        padding: 0;
        border: none;
        gap: 0px;
    }

    .container-pontuacao > div:nth-child(1) > div:nth-child(1) > img {
        width: 50px;
    }

    .container-pontuacao > div:nth-child(1) > ul {
        padding-left: 51px;
    }

    .container-pontuacao > div:nth-child(1) > ul > li > span:nth-child(1) {
        font-size: 14px;
    }

    .container-pontuacao > div:nth-child(1) > ul > li > span:nth-child(2) {
        font-size: 15px;
    }
    
}

@media (max-width: 500px) {

    .container-pontuacao {
        padding: 10px 0 10px 0;
    }

    .container-pontuacao > div:nth-child(1) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0;
    }

    .container-pontuacao > div:nth-child(1) > div:nth-child(1) {
        align-items: center;
        flex-direction: column;
        gap: 0px;
        padding: 0;
        border-right: 1px solid white;
    }

    .container-pontuacao > div:nth-child(1) > div:nth-child(1) > img {
        display: none;
    }

    .container-pontuacao > div:nth-child(1) > div:nth-child(1) > ul {
        flex-direction: column;
        gap: 5px;
    }

    .container-pontuacao > div:nth-child(1) > div:nth-child(1) > ul > li > span {
        font-size: 13px;
    }

    .container-pontuacao > div:nth-child(1) > div:nth-child(1) > ul > li > span:nth-child(3) {
        font-size: 11px;
    }

    .container-pontuacao > div:nth-child(1) > ul {
        flex-direction: column;
        padding: 0;
    }

    .container-pontuacao > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
    }

    .container-pontuacao > div:nth-child(2) > button:nth-child(1) {
        height: fit-content;
        padding: 5px 10px;
        font-size: 14px;
    }

    .container-pontuacao > div:nth-child(2) > button:nth-child(2) {
        width: fit-content;
        height: fit-content;
        padding: 5px 10px;
        font-size: 14px;
        background-color: #A29CFF;
    }

}

</style>