<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="new-user-form">
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Input placeholder="Idade" />
      <button type="submit">Salvar</button>
    </div>
  </div>
</template>

<script>
import Input from './components/Input.vue'

export default {
  name: 'App',
  components: {
    Input
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font: 400 1rem "Roboto", sans-serif;
  width: 100vw;
  height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e1e1e6;
  background: #121214;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.new-user-form {
  width: 100%;
  max-width: 760px;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;

  button {
    width: 15%;
    height: 32px;
    font-size: 16px;
    background-color: green;
    color: #e1e1e6;
    border: 0;
    border-radius: 8px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
}
</style>
