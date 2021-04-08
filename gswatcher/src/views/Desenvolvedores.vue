<template>
  <div class="desenvolvedores">
    <h1>Desenvolvedores</h1>

    <v-container class="my-5">
      
      <v-card class="pa-3" flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md1>
            <div class="caption grey--text">Picture</div>
            <v-icon left small>mdi-account</v-icon>
          </v-flex>
          <v-flex xs6 sm4 md6>
            <div class="caption grey--text">Developer</div>
            <div>{{ project.person }}</div>
          </v-flex>
         <!-- <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex> -->
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Tasks</div>
            <div>{{ project.status }}</div>
          </v-flex> 
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Desenvolvedores',
  data(){
      return {
          projects: [
        { title: 'TESTE', person: 'nome 1', due: '10 Abr 2021', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'TESTE', person: 'nome 2', due: '15 Abr 2021', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'TESTE', person: 'nome 3', due: '20 Mai 2021', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'TESTE', person: 'nome 4', due: '20 Jun 2021', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
      }
  }
 
}
</script>


<style>

/* .project.complete {
    border-left: 4px solid #3cd1c2;
}
.project.ongoing {
    border-left: 4px solid orange;
}
.project.overdue {
    border-left: 4px solid tomato;
} */

</style>