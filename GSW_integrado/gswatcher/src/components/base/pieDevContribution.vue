<template>
  <div class="chart">
    <div class="chart-wrapper" id="chart">
      <apexchart
        class="my-2"
        type="pie"
        height="300"
        width="100%"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>

export default {
  name: "pieChart",
  data: () => ({
    series: [18.7, 81.3],
    chartOptions: {
      chart: {
        width: "100%",
        type: "pie",
      },
      labels: ["DEV Robinho", "Other developers"],
      theme: {
        monochrome: {
          enabled: true,
          color: '#5F27CD',
          shadeTo: 'light',
          shadeIntensity: 0.70
        },
      },
      plotOptions: {
        pie: {
          //size: 500,
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 0.77,
          dataLabels: {
            offset: 50,
            minAngleToShowLabel: 10,
          },
        },
      },
      title: {
        text: "Project Contribution",
          style: {
            fontSize: "16px",
          },
      },
      dataLabels: {
        unable: false,
        unableOnSeries: undefined,
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
        textAnchor: "middle",
        distributed: false,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: "14px",
          fontWeight: "500",
          colors: ["black"],
        },
      },
      legend: {
        show: false,
      },
    },
  }),
};
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart {
  padding: 10px 10px 0px 10px;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 0px 0px 4px grey;
}
</style>