<template>
  <div class="projetos">
    <h1>Project Details</h1>
    <v-divider></v-divider>
    <h2 class="pa-2 font-weight-strong text-uppercase blue--text">
      {{ this.$route.params.name }}
    </h2>

    <!-- <v-container v-if="loading">
      <div class="text-xs-center">
        <v-progress-circular indeterminate :size="150" :width="8" color="green">
        </v-progress-circular>
      </div>
    </v-container> -->

    <v-container class="my-5">
      <v-divider></v-divider>
      <barChart v-bind:project="project"> </barChart>
    </v-container>

    <v-container class="my-5">
      <v-divider></v-divider>
      <lineChart v-bind:project="project"></lineChart>
    </v-container>

    <v-container class="my-5">
      <v-divider></v-divider>
      <pieChart />
    </v-container>

    <h2>Project Developers</h2>
    <v-divider></v-divider>

    <v-container class="my-5">
      <table01 v-bind:project="project"></table01>
    </v-container>

    <v-container class="my-5">
      <table02 />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import barChart from "@/components/base/barChart";
import lineChart from "@/components/base/lineChart";
import pieChart from "@/components/base/pieChart";
import table01 from "@/components/base/tableDevs01";
import table02 from "@/components/base/tableDevs02";

export default {
  name: "projetos",
  props: ["id"],
  components: {
    barChart,
    lineChart,
    pieChart,
    table01,
    table02,
  },
  data() {
    return {
      projeto: [],
    };
  },

  computed: {
    project() {
      return this.$store.state.project;
    },
  },

  mounted() {
    this.$store.dispatch("getProject", this.$route.params.id);
  },

  // methods: {
  //   fetchProjs: function () {
  //     const baseURI = "localhost:3000/api/tasks/1";
  //     this.$http.get(baseURI).then((result) => {
  //       this.projeto = result;
  //     });
  //   },
  // },
};
</script>
