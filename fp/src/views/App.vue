<template>
  <div id="app">
      <!-- <div class="PaymentForm">
        <AddPaymentForm @addNewPayment="addPayment" />
      </div> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png">  -->
    <!-- <calculator msg="The Best Calculator" hidden=true />
    <DashBoard />
    <About /> -->
    <router-view />
      <div id="nav">
        <router-link to="/">Home</router-link><br>
        <router-link to="/dashboard">DashBoard</router-link><br>
        <router-link to="/calc">Calc</router-link><br>
        <router-link to="/about">About</router-link><br>
        <router-link to="/404">Err 404</router-link><br>
      </div>

      <div class="regularPayments">
        <h2>Регулярныйе платежы</h2>
        <a class="regularPayments-btn" href="/add/payment/Food?value=200">Еда</a>
        <a class="regularPayments-btn" href="/add/payment/Transport?value=50"> Транспорт</a>
        <a class="regularPayments-btn" href="/add/payment/Entertainment?value=2000">Развлечения</a>
      </div>
      <modal-window :settings="settings" v-if="modalWindowName"/>
  </div>

</template>

<script>

// import calculator from '../components/HelloWorld.vue'
// import DashBoard from '../components/DashBoard.vue'
// import About from './About.vue'
// import AddPaymentForm from "../components/AddPaymentForm.vue"
import ModalWindow from "../components/ModalWindow.vue"

export default {
  name: 'App',
  components: {
    ModalWindow,
  },
  data(){
    return {
      modalWindowName: '',
      settings: {}
    }
  },
  methods: {
    onShown(settings){
      this.modalWindowName = settings.name
      this.settings = settings
    },
    onHide(){
      this.modalWindowName = ''
      this.settings = {}
    }
  },
  created(){
    this.$modal.show()
    this.$modal.hide()
  },
  mounted(){
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  beforeDestroy(){
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('hide', this.onHide)
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
