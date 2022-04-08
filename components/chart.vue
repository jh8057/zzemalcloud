<template>
  <div>
    <h3>chart</h3>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    trendData: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      labels: ["January", "February", "March", "April", "May", "June"],
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
          },
        ],
      };
    },
    labelData() {
      return this.trendData?.period || this.labels;
    },
    datasetData() {
      return this.trendData?.ratio || this.dataDefault;
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
    console.log("chart", this.$refs.myChart);
    console.log("char", this.chartConfig);
    const myChart = new Chart(
      document.getElementById("myChart"),
      this.chartConfig
    );
  },
};
</script>
