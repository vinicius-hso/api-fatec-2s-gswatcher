<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12\" flat="true" height="120">
              <div><v-img src="../assets/gswatcher-logo.png"></v-img></div>
            </v-card>

            <v-card class="elevation-12\" flat="true">
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    prepend-icon="email"
                    name="email"
                    label="Email"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    prepend-icon="lock"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-row align="center" justify="space-around">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    dark
                    color="cyan darken-4"
                    to="#"
                    v-on:click="getEmail(), getPassword()"
                    >Login</v-btn
                  >
                  <v-btn dark color="cyan darken-4" to="/register"
                    >Register</v-btn
                  >
                </v-card-actions>
              </v-row>

              <v-row align="center" justify="space-around">
                <v-text
                  ><br /><a href="#"><p>Forgot your password?</p></a></v-text
                >
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String,
  },
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    getEmail() {
      var e = this.email;
      console.log(e);
    },
    getPassword() {
      var p = this.password;
      console.log(p);
    },
  },
};
</script>

<style scoped>
</style>


