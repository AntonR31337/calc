<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="../assets/logo.png">  -->
    <!-- <calculator msg="The Best Calculator" hidden=true />
    <DashBoard />
    <About /> -->
    <router-view />
    <router-link to="/index">Home</router-link><br>
    <router-link to="/dashboard">DashBoard</router-link><br>
    <router-link to="/calc">Calc</router-link><br>
    <router-link to="/about">About</router-link><br>
    <router-link to="/404">Err 404</router-link><br>
  </div>

  

</template>

<script>

// import calculator from '../components/HelloWorld.vue'
// import DashBoard from '../components/DashBoard.vue'
// import About from './About.vue'

export default {
  name: 'App',
  components: {
    // calculator,
    // DashBoard,
    // About
  },
  created(){
    
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: unset;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
