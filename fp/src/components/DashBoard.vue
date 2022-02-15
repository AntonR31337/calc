<template>
  <div class="home">
    <header><h1>{{ name }}</h1></header>
    <main>
      <div class="PaymentForm">
      <!-- <AddPaymentForm @addNewPayment="addPayment" /> -->
      </div>
      TOTAL: <b>{{ getFullPaymentValue }}</b>
      <br>
      <button @click="onShowModal">Add/Hide</button>
      <hr>
      <PaymentsDisplay class="paymentsList" :items="currentElements" />
      <!-- <Pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/> -->
      <Pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/>
        
      <!-- <div class="regularPayments">
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
      </div> -->
    </main>
  </div>
</template>

<script>

import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Money",
  components: {
    PaymentsDisplay: ()=> import('./PaymentsDisplay.vue'),
    Pagination: ()=> import('./Pagination.vue')
  },
  props: {
    msg: String,
    actionTitle: String
  },
  data() {
    return {
      name: "My personal costs",
      titleBtn: 'ADD NEW COST +',
      curPage: 1,
      n: 10,
      isVisible: false,
    };
  },
  computed: {
    ...mapGetters([
      'getFullPaymentValue'
    ]),
    paymentsList(){
      return this.$store.getters.getPaymentsList
    },
    currentElements(){
      return this.paymentsList.slice(this.n * (this.curPage -1 ), this.n * (this.curPage -1 ) + this.n)
    }
  },
  methods: {
    ...mapMutations({
      myMutation: 'setPaymentsListData'
    }),
    ...mapActions([
      'fetchData'
    ]),
    addPayment(data){
      this.$store.commit('addDataToPaymentsList', data)
    },
    onChangePage(page){
      this.curPage = page
      // this.fetchData(page)
    },
    onShowModal(){
      this.$modal.show('AddPaymentForm', {
        header: "Add payment form",
        content: "AddPaymentForm"
      },)
    }
  },
  created(){
    const { page } = this.$route.params
    if (page) {
      this.curPage = Number(page)
    }
    this.fetchData(this.curPage)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
.wrapper{
  width: 500px;
}
.paymentsList{
  margin-top: 15px;
}
.AddPaymentForm-wrapper{
    display: flex;
    flex-direction: column;
    width: 350px;
}
.AddPaymentForm-input{
  margin-top: 15px;
}
.regularPayments{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.regularPayments-btn{
  width: 200px;
}
</style>
