<template>
  <v-simple-table dark class="table-container">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            E-mail
          </th>
          <th class="text-left">
            Idade
          </th>
          <th class="text-left">
            Opções
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in users"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.age }}</td>
          <td>
            <button>Editar</button>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'Table',

    computed: mapState([
      'users'
    ])
  }
</script>

