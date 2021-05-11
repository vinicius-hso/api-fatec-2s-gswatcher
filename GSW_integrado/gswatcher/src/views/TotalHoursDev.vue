<template>
  <div>
    <h1> DEV Robinho </h1>
    <v-divider></v-divider>
    <br />
    
     <h2 class="pa-2 font-weight-light text-uppercase grey--text">
      [Batista, Moreira and Pereira LTDA] - Monitored multi-state installation
    </h2>

    <!-- gráfico de linhas -->
    <v-container class="my-5">
      <lineTotalHours />
    </v-container>

    <!-- gráfico de pizza -->
     <v-container class="my-5">
      <pieDevContribution />
    </v-container>
  </div>
</template>   

<script>

import lineTotalHours from "@/components/base/lineTotalHours";
import pieDevContribution from "@/components/base/pieDevContribution";

import DataService from "../services/DataService";

export default {
  name: "TotalHoursDev",
  components: {
    lineTotalHours,
    pieDevContribution,
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
