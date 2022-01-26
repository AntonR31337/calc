<template>
  <div class="wrapper">
      <input placeholder="Amount" v-model="value" />
      <input placeholder="Type" v-model="category" />
      <input placeholder="Date" v-model="date" />
      <button @click="onSaveClick()">Save</button>
  </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data(){
        return {
            value: 0,
            category: "",
            date: "",
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