<!-- renderezia HTMl, baseado no HTML 5 coma tag <template>-->
<template>
  <!-- DIV principal recebe a class do proprio component-->
  <div class="Login">
    <h1>{{msg}}</h1>
    <div>
      <b-container class="bv-example-row">
        <form @submit.prevent="submit">
          <b-row>
            <b-col></b-col>
            <b-col>
              <b-card
                title="LOGIN"
                img-src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                fluid
                alt="Responsive image"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-row class="my-1">
                  <b-form-input v-model="form.user" placeholder="Digite seu usuário"></b-form-input>
                </b-row>
                <b-row class="my-1">
                  <b-form-input
                    v-model="form.password"
                    placeholder="Digite sua senha"
                    type="password"
                  ></b-form-input>
                </b-row>
                <div class="mt-2">Texto: {{form.user}}</div>

                <b-button type="submit" variant="primary">Entrar</b-button>
              </b-card>
            </b-col>
            <b-col></b-col>
          </b-row>
        </form>
      </b-container>
    </div>
  </div>
</template>
<!-- Declara o nome do component-->
<script>
import { required } from "vuelidate/lib/validators";
export default {
  props: {
    //recebe do pai
    msg: String
  },

  data() {
    return {
      form: {
        user: "",
        password: ""
      }
    };
  },

  validations: {
    form: {
      name: { required },
      email: { required }
    }
  },

  methods: {
    submit() {
        console.log(this.$v.form.$touch());
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      // to form submit after this
      alert("Form submitted");
    }
  }
};
</script>