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

      <div class="regularPayments">
        <h2>Регулярныйе платежы</h2>
        <router-link to="/add/payment/Food?value=200">
          <button class="regularPayments-btn">Еда</button>
        </router-link>
        <router-link to="/add/payment/Transport?value=50">
          <button class="regularPayments-btn">Транспорт</button>
        </router-link>
        <router-link to="/add/payment/Entertainment?value=2000">
          <button class="regularPayments-btn">Развлечения</button>
        </router-link>
      </div>
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
