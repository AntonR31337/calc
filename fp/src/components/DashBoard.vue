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
          min-width="50"
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
      <v-row>
        <v-col>
          <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
            <v-dialog v-model="dialog" width="500">
              <template #activator="{ on }">
                <v-btn color="teal" dark v-on="on">Add new cost <v-icon>mdi-plus</v-icon> </v-btn> 
              </template>

              <v-card>
                <add-payment-form @onAdd="dialog=false" @toCloseWindow="toCloseWindow"/>
              </v-card>

            </v-dialog>

          <PaymentsDisplay class="paymentsList" :items="paymentsList" />
          <!-- <Pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/> -->

        </v-col>
        <v-col>
          CHART
          <canvas ref="canvas"></canvas>
        </v-col>
      </v-row>
    </v-container>
    </v-main>
  </v-app>
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
import {Pie} from 'vue-chartjs'

export default {
  name: "Money",
  extends: Pie,
  components: {
    PaymentsDisplay: ()=> import('./PaymentsDisplay.vue'),
    // Pagination: ()=> import('./Pagination.vue'),
    AddPaymentForm: () => import('./AddPaymentForm.vue')
  },
  props: {
    // msg: String,
    actionTitle: String
  },
  data() {
    return {
      name: "My personal costs",
      titleBtn: 'ADD NEW COST +',
      curPage: 1,
      n: 10,
      dialog: false,
      isVisible: false,
    };
  },
  computed: {
    ...mapGetters([
      'getFullPaymentValue',
      'getCategoryList'
    ]),
    paymentsList(){
      return this.$store.getters.getPaymentsList
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
    // currentElements(){
    //   return this.paymentsList.slice(this.n * (this.curPage -1 ), this.n * (this.curPage -1 ) + this.n)
    // }
  },
  methods: {
    toCloseWindow(){
      this.dialog = false
    },
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
  mounted(){
    this.renderChart({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    })
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
