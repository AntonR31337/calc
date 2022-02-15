<template>
  <div class="AddPaymentForm-wrapper">
      <button @click="addNewCost">ADD NEW COST +</button>
      <div class="" v-if="isVisible">
                <input class="AddPaymentForm-input" placeholder="Amount" v-model.number="value" />
      <div class="select">
          <select v-model="category">
              <option v-for="(option, idx) in options" :key="idx">{{ option }}</option>
          </select>
      </div>
      <input class="AddPaymentForm-input" placeholder="Date" v-model="date" />
      <button @click="onSaveClick" class="PaymentForm__btn" >Save</button>
      <!-- <MyButton @click="onSaveClick()" :title="titleBtn" /> -->
      </div>
  </div>
</template>

<script>
// import MyButton from './MyButton.vue'

export default {
    name: "AddPaymentForm",
    components: {
        // MyButton
    },
    data(){
        return {
            value: 0 ,
            category: "",
            date: "",
            titleBtn: 'ADD',
            isVisible: false
        };
    },
    computed: {
        getCurrentDate(){
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        },
        options(){
            return this.$store.getters.getCategoryList
        }
    },
    methods: {
        addNewCost(){
            if (this.isVisible === false){
                this.isVisible = true
                } else {
            this.isVisible = false
            }
        },
        onSaveClick(){
            const {value, category} = this
            const data = {
                id: Date.now(),
                value,
                category,
                date: this.date || this.getCurrentDate
            };
            this.$emit('addNewPayment', data)
            // this.$store.commit('addDataToPaymentsList', data)
        },
    },
    async created(){
        if (!this.options.length){
            await this.$store.dispatch('loadCategories')
        }
        this.category = this.options[0]

    },
    mounted(){
        if (this.$route.params.category){
            this.category = this.$route.params.category
        }

        if (this.$route.query.value){
            this.value = Number(this.$route.query.value)
        }

        if (this.value && this.category) {
            this.date = this.getCurrentDate
            const data = {
                category: this.category,
                date: this.date,
                id: Date.now(),
                value: this.value
            }
            this.$store.commit('addDataToPaymentsList', data)
        }
    }
}
</script>

<style lang="scss" scoped>


</style>