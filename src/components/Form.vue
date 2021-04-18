<template>
  <v-form class="d-flex direction-row align-center justify-space-between pa-6">
    <Input  placeholder="Nome" />
    <Input  placeholder="E-mail" />
    <Input  placeholder="Idade" />
    <v-btn>Salvar</v-btn>
  </v-form>
</template>

<script>
  export default {
    name: 'Form',
  }
</script>
