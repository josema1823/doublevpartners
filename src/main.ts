import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import Api from "./plugins/api";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.config.productionTip = false;
Vue.use(VueToast);
Vue.use(VueAxios, axios);
Vue.use(Api, {
  onError: () => {
    const message = "Sin Resultados";
    Vue.$toast.warning(message, { message, position: "top-right" });
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
