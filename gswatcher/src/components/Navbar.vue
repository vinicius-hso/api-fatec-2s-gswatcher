<template>
    <nav>
        <v-app-bar dense app>
            <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-dark">GSWatcher</span>
                <span class="font-weight-light text-uppercase grey--text"> - Gerenciador de Projetos</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
             <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn to="/perfil" flat>
                <!-- <router-link to="/perfil"></router-link> -->
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            <!-- <v-btn flat color="grey">
                <span>Log Out</span>
                <v-icon right>mdi-exit_to_app</v-icon>
            </v-btn> -->
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" color="red darken-4">
            <v-list dense nav>
               <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                   <v-list-item-icon>
                         <v-icon >{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title >{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav> 
</template>

<script>
// @ is an alias to /src

export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'Projetos', route: '/projetos' },
                { icon: 'mdi-account', text: 'Time', route: '/time' },
            ]
            
        }

    }
    
 
}
</script>
