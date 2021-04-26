<template>
  <div class="userlist">
    <v-container class="search">
      <div class="form">
        <v-form
          @submit.prevent="submit()"
          v-model="valid"
          lazy-validation
          ref="form"
          class="form"
        >
          <div class="form-input">
            <v-text-field
              class="search"
              label="Buscar Usuario"
              :rules="rules.user"
              v-model="form.user"
              required
            ></v-text-field>
            <v-btn
              class="ma-2"
              type="submit"
              outlined
              color="primary"
              :disabled="!valid"
            >
              <v-icon>mdi-magnify</v-icon>
              Buscar
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-container>
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex xs12 sm4 md3 v-for="(user, i) in users" :key="i">
          <v-layout column d-flex>
            <v-card
              elevation="4"
              :href="'/users/' + user.login"
              target="_blank"
            >
              <v-card-title class="title">
                <h2>{{ user.login }}</h2>
              </v-card-title>
              <v-card-text class="text">
                <p><b>id:</b> {{ user.id }}</p>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState("users", ["users"]),
  },
})
export default class UserList extends Vue {
  valid: boolean = false;
  form: any = {};
  rules = {
    user: [
      (v: any) => !!v || "Debe Ingresar Usuario",
      (v: any) => (v && v.length >= 4) || "Mínimo 4 Caracteres",
      (v: any) => (v && v.split(" ").length <= 1) || "Espacios en Blanco",
    ],
  };

  async submit() {
    const validationResult = (this.$refs.form as any).validate();
    if (!validationResult || this.form.user === "doublevpartners") {
      this.$toast.success("Error", {
        message: "No Permitido",
        position: "top-right",
        type: "error",
        duration: 2000,
      });
      return;
    }
    await this.$store.dispatch("users/loadUsers", this.form.user);
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;

  .form-input {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 50vw;
    margin-top: 2rem;
    align-items: center;
  }
}

.full-height .flex {
  display: flex;
}
.v-card {
  box-shadow: 0px 0px 3px black;
  margin: 5px;
  border-radius: 7px;
  transition: all 0.2s ease-in-out;
  min-height: 10rem;
  background-repeat: repeat;
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%239C92AC' fill-opacity='0.19'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  .title {
    display: flex;
    justify-content: center;
  }
}
.v-card:hover {
  transform: scale(1.01);
}

.container {
  padding-top: 0;
}
</style>
