<template>
  <div class="user">
    <v-card
      :loading="loading"
      class="mx-auto my-12 animate__animated animate__slideInDown"
      elevation="6"
      max-width="374"
    >
      <v-img height="250" v-bind:src="user.avatar_url"></v-img>

      <v-card-title>{{ user.name }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-1">- {{ user.login }}</div>
        </v-row>

        <div class="my-4">
          <b>Locación: </b> {{ user.location || "No Aplica" }}
        </div>

        <div><b>Biografía: </b>{{ user.bio || "No Aplica" }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User } from "@/models/user";

@Component({})
export default class UserDetail extends Vue {
  user: User[] = [];
  loading = false;

  async created() {
    const user = await this.$store.dispatch(
      "users/detailUser",
      this.$route.params.id
    );
    this.user = user;
  }
}
</script>

<style lang="scss" scoped></style>
