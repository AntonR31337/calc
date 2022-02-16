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
        <v-btn to="/vuetify">Vuetify</v-btn><br>
        <v-btn to="/dashboard">DashBoard</v-btn><br>
        <v-btn to="/calc">Calc</v-btn><br>
        <v-btn to="/about">About</v-btn><br>
        <v-btn to="/404">Err 404</v-btn><br>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <div class="page404">
      <h1>Page not Found <b>404</b></h1>
      <img src="https://ylianova.ru/wp-content/uploads/stranica-ne-najdena-404_25.jpg" alt="">
  </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: "404"
}
</script>

<style>

</style>