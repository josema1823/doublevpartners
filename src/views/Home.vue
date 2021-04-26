<template>
  <div class="home">
    <UserList />
    <!--
      <div class="barchart" v-if="users.length > 0">
      <BarChart :params="users" />
      </div>
    -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import UserList from "@/components/UserList.vue";
import BarChart from "@/components/BarChart.vue";

@Component({
  components: { UserList, BarChart },
  computed: {
    ...mapState("users", ["users"]),
  },
})
export default class Home extends Vue {
  bar: boolean = false;
}
</script>

<style lang="scss" scoped></style>
