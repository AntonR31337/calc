<template>
  <div id="app">
      <router-view />

      <!-- <div class="PaymentForm">
        <AddPaymentForm @addNewPayment="addPayment" />
      </div> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png">  -->
    <!-- <calculator msg="The Best Calculator" hidden=true />
    <DashBoard />
    <About /> -->

      <!-- <div id="nav">
        <router-link to="/">Home</router-link><br>
        <router-link to="/vuetify">Vuetify</router-link><br>
        <router-link to="/dashboard">DashBoard</router-link><br>
        <router-link to="/calc">Calc</router-link><br>
        <router-link to="/about">About</router-link><br>
        <router-link to="/404">Err 404</router-link><br>
      </div> -->

      <!-- <div class="regularPayments">
        <h2>Регулярныйе платежы</h2>
        <a class="regularPayments-btn" href="/add/payment/Food?value=200">Еда</a>
        <a class="regularPayments-btn" href="/add/payment/Transport?value=50"> Транспорт</a>
        <a class="regularPayments-btn" href="/add/payment/Entertainment?value=2000">Развлечения</a>
      </div> -->
      <transition name="fade">
        <modal-window :settings="settings" v-if="modalWindowName"/>
      </transition>
      <transition name="fade">
        <context-menu />
      </transition>
  </div>

</template>

<script>
import ContextMenu from '../components/ContextMenu.vue'

export default {
  components: { ModalWindow: ()=> import(/* webpackChunkName: "ModalWindow" */ '../components/ModalWindow.vue'), ContextMenu},
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
.fade-enter-active, .fade-leave-active{
  transition: opacity .3s;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
