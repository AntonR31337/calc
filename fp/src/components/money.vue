<template>
  <div class="home">
    <header><h1>{{ name }}</h1></header>
    <main>
      <div class="PaymentForm">
      <MyButton class="PaymentForm__btn" :title="titleBtn" @click="addNewCost" />
      <button @click="addNewCost">ADD NEW COST +</button>
      <AddPaymentForm @addNewPayment="addPayment" />
      </div>
      TOTAL: <b>{{ getFullPaymentValue }}</b>
      <hr>
      <PaymentsDisplay class="paymentsList" :items="currentElements" />
      <!-- <Pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/> -->
      <Pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/>
    </main>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import PaymentsDisplay from "./PaymentsDisplay.vue"
import AddPaymentForm from "./AddPaymentForm.vue"
import Pagination from "./Pagination.vue"
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Money",
  components: {
    MyButton,
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
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
      n: 10
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
    addNewCost(){
      document.querySelector("#app > div.home > main > div.PaymentForm > div").classList.toggle('hidden')
    },
    addPayment(data){
      this.$store.commit('addDataToPaymentsList', data)
    },
    onChangePage(page){
      this.curPage = page
      this.fetchData(page)
    }
  },
  created(){
    this.fetchData(this.curPage)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
.hidden{
  display: none;
}

</style>
