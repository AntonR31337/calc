<template>
    <v-app>
    <v-app-bar
      app
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
        <v-btn to="/">Home</v-btn><br>
        <v-btn to="/dashboard">DashBoard</v-btn><br>
        <v-btn to="/calc">Calc</v-btn><br>
        <v-btn to="/about">About</v-btn><br>
        <v-btn to="/404">Err 404</v-btn><br>
      <v-spacer></v-spacer>

    </v-app-bar>
    <v-main>
      <v-container>
      <router-view/>
      <div class="about">
      <h1>About the App</h1>
      <!-- <button @click="onShowModalAuth">Auth</button> -->
            <v-dialog width="500">
              <template #activator="{ on }">
                <v-btn color="teal" dark v-on="on">Auth<v-icon>mdi-login</v-icon> </v-btn> 
              </template>

              <!-- <v-card>
                <ModalWindow @onAdd="dialog=false" @toCloseWindow="toCloseWindow"/>
              </v-card> -->

            </v-dialog>
  </div>
  </v-container>
    </v-main>
  </v-app>

</template>

<script>
// import ModalWindow from '../components/ModalWindow.vue'
export default {
    name: "About",
    components: { 
      // ModalWindow: ()=> import('../components/ModalWindow.vue') 
      },

    data(){
      return {
        modalShow: true,
        settings: {
          header: "Auth Form",
          content: "Auth",
          dialog: false,
        }
      }
    },
    methods:{
      toCloseWindow(){
      this.dialog = false
    },
      onShowModalAuth(){
        this.$modal.show('Auth', this.settings)
      }
    }
}
</script>

<style>

</style>