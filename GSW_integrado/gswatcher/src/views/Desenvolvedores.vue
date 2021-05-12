<template>
  <div>
    <h1>Developers</h1>
    <v-divider></v-divider>

    <v-container class="pa-5">
      <v-row align="align">
        <v-col>


<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="arr"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
          
          <!-- <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Tasks</th>
                  <th class="text-left">Detalhes</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in developers" :key="item.nome">
                  <td>{{ item.nome }} {{ item.sobrenome }}</td>
                  <td>{{ item.dev_id }}</td>
                  <td> 
                    <v-btn :to="{ name: 'devdetails', params: { id: dev.id, name: dev.nome, sobrenome: dev.sobrenome }}" outlined text>
                
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table> -->



        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Desenvolvedores",
  data () {
      return {
        search: '',
        arr: [],
        jso: {},
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
          },
        ],
      }
    },
    methods: {
      setArray(){
        this.developers.forEach((elem) =>{
          this.jso = {
            nome: elem.nome + elem.sobrenome,
            dev_id: elem.dev_id,
            email: elem.email
          }
          this.arr.push(this.jso)
        })
      }

    },
  computed: {
    developers() {
      return this.$store.state.developers;
    },
  },
  mounted() {
    this.$store.dispatch("getDevelopers");
  },
};
</script>


<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
</style>