<template>
  <div class="chart">
    <div class="barChart">
      <div id="chart" class="chart-wrapper">
        <apexchart
          class="my-8"
          type="bar"
          height="300"
          width="100%"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "barChart",
  props: ["project"],

  data() {
    return {
      series: [
        {
          data: [0, 0, 0, 0, 0, 0, 0],
        },
      ],
      // array 'series' trata dos valores de cada status dentro do projeto
      //"FOR_TEST","DONE","RELEASE_TO_PROD","QA_TESTING","IN_PROGRESS","PROD_DEPLOYING","QA_DEPLOYING",
      chartOptions: {
        chart: {
          width: "100%",
          height: "100%",
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        title: {
          text: "Tasks by Status",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val; /*original: + " tasks"*/
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#1976d2"],
          },
        },

        xaxis: {
          categories: [
            "FOR_TEST",
            "DONE",
            "RELEASE_TO_PROD",
            "QA_TESTING",
            "IN_PROGRESS",
            "PROD_DEPLOYING",
            "QA_DEPLOYING",
          ],
          position: "bottom",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val;
            },
          },
        },
        colors: ["#304758"],
      },
    };
  },
  mounted() {
    console.log("BarChart mounted!");
    this.count(this.project);
  },

  methods: {
    count(project) {
      const counts = {};
      let status = [];
      let statusValue = [];

      project.forEach((r) => {
        counts[r["status_nome"]] = (counts[r["status_nome"]] || 0) + 1;
      });

      for (const key in counts) {
        console.log(`${key} : ${counts[key]}`);
        status.push(key);
        statusValue.push(counts[key]);
      }

      console.log(status);
      console.log(statusValue);

      this.series = [
        {
          data: statusValue,
        },
      ];
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: status,
          },
        },
      };
    },
  },
};
</script>


<style>
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