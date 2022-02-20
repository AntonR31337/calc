<template>
  <div class="home">
    <header><h1>{{ name }}</h1></header>
    <main>
      <div class="PaymentForm">
      <MyButton class="PaymentForm__btn" :title="titleBtn" @onSaveClick="addNewCost" />
      <AddPaymentForm @addNewPayment="addPayment" />
      </div>
      <PaymentsDisplay class="PaymentsList" :items="PaymentsList" />
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
    actionTitle: String
  },
  data() {
    return {
      name: "My personal costs",
      PaymentsList: [],
      titleBtn: 'ADD NEW COST +',
      disabled: false
    };
  },
  methods: {
    addNewCost(){
      document.querySelector("#app > div.home > main > div.PaymentForm > div").classList.toggle('hidden')
      console.log(this.$emit)
    },
    addPayment(data){
      this.PaymentsList = [...this.PaymentsList, data]
    },
    fetchData(){
      return [
         {
        id: 1643385818120,
        date: '28.03.2020',
        category: 'Food',
        value: 169,
      },
      {
        id: 1643385829382,
        date: '24.03.2020',
        category: 'Transport',
        value: 360,
      },
      {
        id: 1643385820482,
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
.wrapper{
  width: 500px;
}
.PaymentsList{
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
