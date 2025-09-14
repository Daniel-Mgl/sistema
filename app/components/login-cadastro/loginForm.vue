<template>

  <form action="#">

    <h1>
      Seja Bem-Vindo
    </h1>

    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" type="email" placeholder="Informe seu e-mail"  required>
    </div>

    <div class="form-group">
      <label for="senha">Senha</label>
      <input id="senha" type="password" placeholder="Informe sua senha" required>
    </div>

    <button type="submit" class="btn-form-login">
      Entrar
    </button>

    <div class="cadastrar">

      <p>
        Ainda não possui uma conta?
      </p>

      <NuxtLink to="/cadastro" class="btn-cadastrar">
        Criar uma conta
      </NuxtLink>

    </div>

  </form>

</template>

<script setup lang="ts">
  
</script>

<style scoped>

  form {
    width: 100%;
    max-width: 350px;
    height: fit-content;
    padding: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border: 2px solid #77ED91;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border-radius: 10px;
  }

  form > h1 {
    font-family: var(--font-montserrat);
    font-size: 25px;
    font-weight: 600;
  }

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .form-group > label {
    font-family: var(--font-figtree);
  }

  .form-group > input {
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    padding-left: 5px;
    font-size: 16px;
    font-family: var(--font-figtree);
  }

  .btn-form-login {
    width: 100%;
    height: 35px;
    background-color: #77ED91;
    border: none;
    border-radius: 30px;
    font-size: 17px;
    cursor: pointer;
    font-family: var(--font-figtree);
  }

  .cadastrar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
  }

  .cadastrar > p {
    font-size: 15px;
    font-family: var(--font-figtree);
  }

  .btn-cadastrar {
    border: 1px solid black;
    padding: 4.5px;
    border-radius: 5px;
    font-size: 15px;
    color: black;
    font-family: var(--font-figtree);
  }

</style>