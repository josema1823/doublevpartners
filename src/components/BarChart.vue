<script lang="ts">
import { Component, Prop, Watch } from "vue-property-decorator";
import { Bar } from "vue-chartjs";
import Vue from "vue";
import COLORS from "@/types/colors";

@Component({ extends: Bar })
export default class BarChart extends Vue {
  labels: string[] = [];
  values: any[] = [];

  @Prop()
  params!: any;

  @Prop({
    default: () =>
      ({
        legend: { position: "bottom" },
        responsive: true,
      } as any),
  })
  options: any;

  mounted() {
    this.init();
  }

  @Watch("params")
  init(params: any = this.params) {
    Object.assign(this, params);
    const datasets: any = this.values.map((v, i) => ({
      backgroundColor: COLORS[i],
      label: this.labels[i],
      data: [v],
    }));
    (this as any).renderChart({ datasets }, this.options);
  }
}
</script>
<style lang="scss" scoped></style>
