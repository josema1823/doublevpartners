<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <v-toolbar-title>Double V Partners</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/scss/main.scss";
html,
body {
  overflow: auto;
  * {
    box-sizing: border-box;
  }
}
</style>
