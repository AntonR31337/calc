<template>
  <div class="AddPaymentForm-wrapper hidden">
      <input class="AddPaymentForm-input" placeholder="Amount" v-model="value" />
      <input class="AddPaymentForm-input" placeholder="Type" v-model="category" />
      <input class="AddPaymentForm-input" placeholder="Date" v-model="date" />
      <button @click="onSaveClick()" class="PaymentForm__btn" >Save</button>
      <MyButton @click="onSaveClick()" :title="titleBtn" />
  </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
    name: "AddPaymentForm",
    components: {
        MyButton
    },
    data(){
        return {
            value: 0,
            category: "",
            date: "",
            titleBtn: 'ADD'
        };
    },
    computed: {
        getCurrentDate(){
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    },
    methods: {
        onSaveClick(){
            const {value, category} = this
            const data = {
                id: Date.now(),
                value,
                category,
                date: this.date || this.getCurrentDate
            };
            this.$emit('addNewPayment', data)
            console.log(data)
        },
    }
}
</script>

<style lang="scss" scoped>


</style>