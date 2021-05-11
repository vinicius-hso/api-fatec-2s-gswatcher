<template>
  <div>
    <h1>DEV Robinho</h1>
    <!-- Gráfico de barras -->
    <v-container>
      <h3>Tasks per Project</h3>
      <v-divider></v-divider>
      <barDevProjs />
    </v-container>
    <!-- VISUALIZAÇÃO DOS PROJETOS EM CARDS -->
    <v-container>
      <h3>Projects</h3>
      <v-btn @click="log(devProjects)"></v-btn>
      <v-divider></v-divider>
      <!-- BOTÕES DE ORDENAÇÃO  -->
      <v-container class="my-5">
        <v-layout row class="mb-3">
          <!-- <v-btn small flat color="grey" @click="sortBy('nome')">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">Project</span>
          </v-btn>
          <v-btn small flat color="grey" @click="sortBy('total')">
            <v-icon left small>mdi-list-status</v-icon>
            <span class="caption text-lowercase">Total Tasks</span>
          </v-btn>
          <v-btn small flat color="grey" @click="upload(projects)">
            <v-icon left small>mdi-timer</v-icon>
            <span class="caption text-lowercase">Total Hours</span>
          </v-btn>
          <v-btn small flat color="grey" @click="sortBy('id')">
            <v-icon left small>mdi-calendar</v-icon>
            <span class="caption text-lowercase">Started At</span>
          </v-btn> -->
        </v-layout>
      </v-container>
      <!-- CARDS DOS PROJETOS -->
      <v-container>
        <v-row>
          <v-col
            v-for="devProject in devProjects"
            :key="devProject.projeto_id"
            :devProject="devProject"
          >
            <v-flex>
              <v-layout row wrap>
                <v-flex xs12 lg12>
                  <v-card
                    :loading="loading"
                    :class="`mx-auto my-4 devProject ${devProject.projeto_id}`"
                    width="420"
                  >
                    <v-card-title class="title">{{
                      devProject.projeto_nome
                    }}</v-card-title>
                    <v-card-text>
                      <div>
                        <span>Total Tasks: {{ devProject.task_id }}</span>
                      </div>
                      <div>
                        <span>Total Hours: {{ devProject.task_id }}</span>
                      </div>
                      <div>
                        <span>Start Date: {{ devProject.task_id }}</span>
                      </div>
                    </v-card-text>
                    <v-card-actions class="my-0">
                      <v-btn :to="`/totalhoursdev/`" outlined text>
                        Details
                        <v-icon>mdi-google-analytics</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
// import DataService from "../services/DataService";
import barDevProjs from "@/components/base/barDevProjs";

export default {
  name: "DevDetails",
  components: {
    barDevProjs,
  },
  data: function () {
    return {
      projs: [],
    };
  },
  methods: {
    log(data) {
      console.log("Objeto");
      console.log(typeof data);
      console.log(data);
    },

    // log(data) {
    //   console.log("data");
    //   console.log(data.id);
    // },
    // sortBy(prop) {
    //   this.projs.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    //   console.log(this.projs);
    // },
    // retrieveProjs() {
    //   DataService.getAllProjs()
    //     .then((response) => {
    //       this.projs = response.data.map(this.getDisplayProjs);
    //       // console.log(response.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    // getDisplayProjs(proj) {
    //   return {
    //     id: proj.projeto_id,
    //     nome: proj.projeto_nome,
    //     total: proj.total_de_task,
    //   };
    // },
  },
  // mounted() {
  //   this.retrieveProjs();
  // },

  computed: {
    devProjects() {
      return this.$store.state.devProjects;
    },
  },
  mounted() {
    this.$store.dispatch("getDevProjects", this.$route.params.id);
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