<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <calculator msg="The Best Calculator" hidden=true />
    <money/>
  </div>
  

</template>

<script>
import calculator from './components/HelloWorld.vue'
import money from './components/money.vue'

export default {
  name: 'App',
  components: {
    calculator,
    money
  },
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
