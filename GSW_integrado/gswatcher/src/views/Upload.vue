<template>
  <div class="time">
    <h1>Upload</h1>

    <!-- <v-container>
          <v-btn @click="upload()">Upload</v-btn>
    </v-container> -->

         <div class="pt-10 ma-2">
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="alert" dark v-bind="attrs" v-on="on">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon class="white--text">mdi-file-upload</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="white--text"
                      >Upload</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Upload de Arquivo</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <div class="container">
                    <div class="large-12 medium-12 small-12 cell">
                      <label
                        >File
                        <input
                          type="file"
                          id="file"
                          ref="file"
                          v-on:change="handleFileUpload()"
                        />
                      </label>

                    </div>
                  </div>
                </v-container>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="handleFileUpload()">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>


  

  </div>


</template>

<script>
// @ is an alias to /src
import Upload from '../services/upload'

//objetivo final é transformar esse caminho em um modal

export default {
  data(){
    return{
      dialog: false,
      file: "",
    }
  },
  name: 'Upload',
  methods: {
    upload(){
      console.log("TESTE");
      Upload.retornarArquivo();
    },
    handleFileUpload() {
      this.dialog = false;
      this.file = this.$refs.file.files[0];
    },
  }
 
}
</script>
