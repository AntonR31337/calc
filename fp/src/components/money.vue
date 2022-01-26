<template>
  <div class="home">
    <header><h1>{{ name }}</h1></header>
    <main>
      <MyButton />
      <AddPaymentForm @addNewPayment="addPayment" />
      <PaymentsDisplay :items="PaymentsList" />
    </main>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import PaymentsDisplay from "./PaymentsDisplay.vue"
import AddPaymentForm from "./AddPaymentForm.vue"

export default {
  name: "Money",
  components: {
    MyButton,
    PaymentsDisplay,
    AddPaymentForm
  },
  props: {
    msg: String,
  },
  data() {
    return {
      name: "My personal costs",
      PaymentsList: [],
    };
  },
  methods: {
    addPayment(data){
      this.PaymentsList = [...this.PaymentsList, data]
    },
    fetchData(){
      return [
         {
        id: 1,
        date: '28.03.2020',
        category: 'Food',
        value: 169,
      },
      {
        id: 2,
        date: '24.03.2020',
        category: 'Transport',
        value: 360,
      },
      {
        id: 3,
        date: '24.03.2020',
        category: 'Food',
        value: 532,
      },
      ]
    }
  },
  created(){
    this.PaymentsList = this.fetchData()
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
</style>
