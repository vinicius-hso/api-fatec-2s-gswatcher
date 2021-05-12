<template>
  <div>
    <br />
    <h1>Developer</h1>
    <v-divider></v-divider>
    <h2 class="pa-2 font-weight-strong text-uppercase blue--text">
      {{ this.$route.params.name }} {{ this.$route.params.sobrenome }}
    </h2>
    <!-- Gráfico de barras -->
    <v-container>
      <h3>Tasks per Project</h3>
      <v-divider></v-divider>
      <barDevProjs />
    </v-container>
    <!-- VISUALIZAÇÃO DOS PROJETOS EM CARDS -->
    <v-container>
      <h3>Projects</h3>
      <v-btn @click="treatCycle(info, devProjects)"></v-btn>
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
            v-for="devProject in info"
            :key="devProject.name"
            :devProject="devProject"
          >
            <v-flex>
              <v-layout row wrap>
                <v-flex xs12 lg12>
                  <v-card
                    :loading="loading"
                    :class="`mx-auto my-4 devProject ${devProject.name}`"
                    width="420"
                  >
                    <v-card-title class="title">{{
                      devProject.name
                    }}</v-card-title>
                    <v-card-text>
                      <div>
                        <span
                          >Total Tasks: {{ devProject.data.totalTasks }}</span
                        >
                      </div>
                      <div>
                        <span
                          >Complete Tasks:
                          {{ devProject.data.tasksCompletas }}</span
                        >
                      </div>
                      <div>
                        <span
                          >Incomplete Tasks:
                          {{ devProject.data.tasksIncompletas }}</span
                        >
                      </div>
                      <div>
                        <span>Total Hours: {{ devProject.data.horas }}</span>
                      </div>
                      <div>
                        <span
                          >Start Date: {{ devProject.data.dataInicio }}</span
                        >
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
import barDevProjs from "@/components/base/barDevProjs";

export default {
  name: "DevDetails",
  components: {
    barDevProjs,
  },
  data: function () {
    return {
      projs: [],
      info: {},
    };
  },
  methods: {
    treatCycle(info, projs) {
      let devProjTasks = [];
      let devProjs = this.devProjectsSet(projs);

      console.log(devProjs);

      devProjs.forEach((elem) => {
        let data = this.dataStats(elem, projs);
        devProjTasks.push({
          name: elem,
          data: data,
        });
      });
      console.log(devProjTasks);
      this.info = devProjTasks;
    },

    // *** DEV PROJECTS ***
    // Retorna um array com os projetos de um dev

    devProjectsSet(projectObject) {
      // console.log(projectObject) //entrada
      var p = [];
      var projetos = [];

      projectObject.forEach((elem, index) => {
        p[index] = projectObject[index].projeto_nome;
        if (projetos.includes(p[index]) == false) {
          projetos.push(p[index]);
        }
      });
      return projetos;
    },

    // *** DATA STATS***
    // Retorna o total de tasks (completas) de um projeto
    // Retorna o total de horas de um dev em um projeto
    // Retorna a data da task mais antiga de um projeto

    dataStats(projectName, projectObject) {
      var menor = projectObject[0].inicio;
      var horas = 0;
      var t = 0;
      var c = 0;
      var ic = 0;
      projectObject.forEach((elem) => {
        if (elem.projeto_nome == projectName) {
          if (elem.horas != null) {
            c++;
            horas += elem.horas;
          } else if (elem.horas == null) {
            ic++;
          }
          t++;
          if (elem.inicio < menor) {
            menor = elem.inicio;
          }
        }
      });
      return {
        totalTasks: t,
        tasksCompletas: c,
        tasksIncompletas: ic,
        horas: horas,
        dataInicio: menor,
      };
    },
  },

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