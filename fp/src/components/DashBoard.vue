<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 mb-8">{{ msg="My personal costs" }}</div>
        <v-btn>Add new cost <v-icon>mdi-plus</v-icon></v-btn>

        <PaymentsDisplay class="paymentsList" :items="currentElements" />
        <Pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/>
      </v-col>
      <v-col>
        CHART
      </v-col>
    </v-row>
  </v-container>
  <!-- <div class="home">
    <header><h1>{{ name }}</h1></header>
    <main>
      <div class="PaymentForm">
      </div>
      TOTAL: <b>{{ getFullPaymentValue }}</b>
      <br>
      <button @click="onShowModal">Add/Hide</button>
      <hr>
    </main>
  </div> -->
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
