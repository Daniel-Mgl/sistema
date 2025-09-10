<template>

    <div class="container-tabela">
        <h3>
            Total
        </h3>
        <table>
            <thead>
                <tr>
                    <th>
                        Dados
                    </th>
                    <th>
                        Nivel 1
                    </th>
                    <th>
                        Nivel 2
                    </th>
                    <th>
                        Nivel 3
                    </th>
                    <th>
                        Total
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Comissão
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                </tr>
                <tr>
                    <td>
                        Número de <br> Investidores
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                </tr>
                <tr>
                    <td>
                        Número de <br> Depositantes
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                </tr>
                <tr>
                    <td>
                        Usuários <br> Registrados
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                    <td>
                        $1.00
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script setup>

</script>

<style scoped>

h3 {
    color: white;
    font-size: 25px;
    margin-bottom: 10px;
    font-family: var(--font-abeezee);
}

table {
    color: white;
    width: 100%;
    height: 250px;
    border-collapse: collapse;
}

thead {
    height: 40px;
    background-color: #1A1D1E;
    font-family: var(--font-akaya);
}

th, td {
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: left;
    padding-left: 10px;
}

td {
    font-family: var(--font-abeezee);
}

td > br {
    display: none;
}

@media (max-width: 600px) {

    h3 {
        font-size: 20px;
        margin-bottom: 5px;
    }

    thead {
        height: 30px;
    }

    table {
        height: 235px;
    }

    th, td {
        font-size: 13px;
    }

    td {
        font-size: 11px;
    }

    td > br {
        display: block;
    }

}

</style>