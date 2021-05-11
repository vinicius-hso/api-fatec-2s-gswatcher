<template>
  <div>
    <h1>DEV Robinho</h1>
    <!-- gráfico de barras -->
    <v-container>
      <HoursBarChart />
    </v-container>
  </div>
</template>   

<script>
import DataService from "../services/DataService";
import HoursBarChart from "@/components/base/HoursBarChart";

export default {
  name: "TotalHoursDev",
  components: {
    HoursBarChart,
  },
  data: function () {
    return {
      projs: [],
    };
  },
  methods: {
    log(data) {
      console.log("data");
      console.log(data.id);
    },
    sortBy(prop) {
      this.projs.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
      console.log(this.projs);
    },
    retrieveProjs() {
      DataService.getAllProjs()
        .then((response) => {
          this.projs = response.data.map(this.getDisplayProjs);
          // console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDisplayProjs(proj) {
      return {
        id: proj.projeto_id,
        nome: proj.projeto_nome,
        total: proj.total_de_task,
      };
    },
  },
  mounted() {
    this.retrieveProjs();
  },
};
</script>


<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
