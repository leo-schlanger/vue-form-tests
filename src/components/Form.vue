<template>
  <form class="pa-14">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="Nome"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

     <v-text-field
      v-model="age"
      :error-messages="ageErrors"
      label="Idade"
      required
      @input="$v.age.$touch()"
      @blur="$v.age.$touch()"
    ></v-text-field>

    <div class="d-flex direction-row mt-4">
      <v-btn
        class="mr-4"
        @click="submit"
      >
        Salvar
      </v-btn>
      <v-btn @click="clear">
        Limpar formulário
      </v-btn>
    </div>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength, email, numeric, minValue } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, minLength: minLength(5) },
      email: { required, email },
      age: {required, numeric, minValue: minValue(1) }
    },

    data: () => ({
      name: '',
      email: '',
      age: 1
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('O nome deve ter no mínimo 5 caracteres.')
        !this.$v.name.required && errors.push('Campo de nome obrigatório.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('O e-mail precisa estar em um formato válido.')
        !this.$v.email.required && errors.push('Campo de e-mail obrigatório.')
        return errors
      },
      ageErrors () {
        const errors = []
        if (!this.$v.age.$dirty) return errors
        !this.$v.age.numeric && errors.push('A idade precisa ser numérico.')
        !this.$v.age.minValue && errors.push('A idade mínima precisa ser maior que 1.')
        !this.$v.age.required && errors.push('Campo de idade obrigatório.')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.$store.commit('updateUserList', { 
            name: this.name,
            email: this.email,
            age: this.age,
          });
          console.log(this.$store.state.users)
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
      },
    },
  }
</script>

<codepen-resources lang="json">
  {
    "js": [
      "https://cdn.jsdelivr.net/npm/vuelidate/dist/vuelidate.min.js",
      "https://cdn.jsdelivr.net/npm/vuelidate/dist/validators.min.js"
    ]
  }
</codepen-resources>

<codepen-additional>
  const { required, maxLength, email } = validators
  const validationMixin = vuelidate.validationMixin

  Vue.use(vuelidate.default)
</codepen-additional>