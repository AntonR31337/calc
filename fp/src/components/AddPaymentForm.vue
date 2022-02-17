
<template>
  <v-form class="pa-4"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="value"
      label="VALUE"
      required
    ></v-text-field>

    <v-text-field
      v-model="date"
      label="DATE"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="category"
      :rules="[v => !!v || 'Item is required']"
      label="CATEGORY"
      required
    ></v-select>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="onSaveClick"
    >
      Save
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="isVisible"
    >
      Close
    </v-btn>
  </v-form>

<!-- //   <div class="AddPaymentForm-wrapper">
//       <button @click="addNewCost">ADD NEW COST +</button>
//       <div class="" v-if="isVisible">
//                 <input class="AddPaymentForm-input" placeholder="Amount" v-model.number="value" />
//       <div class="select">
//           <select v-model="category">
//               <option v-for="(option, idx) in options" :key="idx">{{ option }}</option>
//           </select>
//       </div>
//       <input class="AddPaymentForm-input" placeholder="Date" v-model="date" />
//       <button @click="onSaveClick" class="PaymentForm__btn" >Save</button>
//       </div>
//   </div> -->
</template>



<script>

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
            isVisible: true
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