<template>
  <div>
    <h3>chart</h3>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    trendData: { type: Array, default: () => [] },
  },
  data() {
    return {
      labelsDefault: ["January", "February", "March", "April", "May", "June"],
      dataDefault: [0, 10, 5, 2, 20, 30, 45],
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.labelData,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: this.datasetData,
          },
        ],
      };
    },
    labelData() {
      return this.trendData?.map((data) => data.period) || this.labelsDefault;
    },
    datasetData() {
      return this.trendData?.map((data) => data.ratio) || this.dataDefault;
    },
    chartConfig() {
      return {
        type: "line",
        data: this.chartData,
        options: {},
      };
    },
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    chartConfig(v) {
      console.log("Chart Data changed!", v);
      this.renderChart();
    },
  },
  methods: {
    renderChart() {
      // chart reset
      let chartStatus = Chart.getChart("myChart"); // <canvas> id
      if (chartStatus != undefined) {
        chartStatus.destroy();
      }

      // make chart
      const myChart = new Chart(
        document.getElementById("myChart"),
        this.chartConfig
      );
    },
  },
};
</script>
