<template>
  <div class>
    <h3>Completed Tasks</h3>
    <v-divider></v-divider>
    <v-card class="my-8">
      <v-card-title>
        <v-icon>mdi-account-search</v-icon>
        <v-text-field
          single-line
          hide-details
          hide-default-header
        ></v-text-field>
      </v-card-title>
      <v-data-table
        height="250"
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "table01",
  // props: ["project"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Completed Tasks", value: "completedTasks" },
        { text: "Start Date", value: "startDate" },
        { text: "Total Hours", value: "totalHours" },
      ],
      desserts: [
        {
          name: "Ana Júlia",
          completedTasks: 159,
          startDate: 159,
          totalHours: 6.0,
        },
      ],
    };
  },

    methods: {
    treatCycle(projs) {

      // let counts = {}
      // let devIds = []
      // let statusValue = []
      // projs.forEach((r) => {
      //     counts[r["dev_id"]] = (counts[r["dev_id"]] || 0) + 1
      // })

      // for (const key in counts) {
      //   // console.log(`${key} : ${counts[key]}`);
      //   devIds.push(key);
      //   statusValue.push(counts[key]);
      // }



      // projs.forEach((e1) => devIds.forEach((e2) => {
      //   if(e1 === e2){}
      // }))


console.log(projs)
      var devs = {};
      projs.forEach(function(e) {
        if (!devs[e.dev_id]) 
          devs[e.dev_id] = [e];
        else
          devs[e.dev_id].push(e);
      });
      // console.log(devs)


      for (const element in devs) {
        // if (!devs.hasOwnProperty(element)) continue;
        let horas = []
        let obj = devs[element]
        // console.log(obj)
        obj.forEach((e) =>{
          if(e.horas) {
            horas.push(e.horas)
          }

        })
        
        let total = horas.reduce((total, currentElement) => total + currentElement)
        let totalCompletas = horas.length

        devs[element].horasGerais = [horas];
        devs[element].tasksCompletas = totalCompletas;
        devs[element].totalHoras = total;
        
        
      }

      // devs.forEach(element => {
      //   let horas = []
      //   element.forEach((e) =>{
      //     if(e.horas) {
      //       horas.push(e.horas)
      //     }

      //   })
      //   devs[element.totalHoras] = [horas];
      // });
      console.log(devs)
      // let totalHorasDev = []
      // devs.forEach(element => {
      //   let total = devs.reduce((total, currentElement) => total + currentElement)
      //   let totalCompletas = devs.length
      // });





      let devProjTasks = [];
      let devProjs = this.devProjectsSet(projs);

      // console.log(devProjs);

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

    // dataStats(projectName, projectObject) {
    //   var menor = projectObject[0].inicio;
    //   var horas = 0;
    //   var t = 0;
    //   var c = 0;
    //   var ic = 0;
    //   var id = "";
    //   projectObject.forEach((elem) => {
    //     if (elem.projeto_nome == projectName) {
    //       if (elem.horas != null) {
    //         c++;
    //         horas += elem.horas;
    //       } else if (elem.horas == null) {
    //         ic++;
    //       }
    //       t++;
    //       if (elem.inicio < menor) {
    //         menor = elem.inicio;
    //         menor = new Date(menor);
    //         const options = {
    //           weekday: "long",
    //           year: "numeric",
    //           month: "long",
    //           day: "numeric",
    //         };
    //         menor = menor.toLocaleDateString(undefined, options);
    //       }
    //     }
    //     id = elem.projeto_id;
    //   });
    //   return {
    //     id: id,
    //     totalTasks: t,
    //     tasksCompletas: c,
    //     tasksIncompletas: ic,
    //     horas: horas.toFixed(2),
    //     dataInicio: menor,
    //   };
    // },
  },

  computed: {
    project() {
      return this.$store.state.project;
    },
  },

  mounted() {
    this.$store.dispatch("getProject", this.$route.params.id);
  },

  watch: {
    project() {
      this.treatCycle(this.project);
    },
  },
  
};
</script>