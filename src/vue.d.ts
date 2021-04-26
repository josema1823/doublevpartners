import Vue from "vue";
import { Api } from "./plugins/api";

declare module "vue/types/vue" {
  interface Vue {
    $api: Api;
  }

  interface VueConstructor {
    $api: Api;
  }
}
