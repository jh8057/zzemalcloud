<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: ["January", "February", "March", "April", "May", "June"],

      data: {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },

      config: {
        type: "line",
        data: data,
        options: {},
      },
    };
  },
};
</script>
