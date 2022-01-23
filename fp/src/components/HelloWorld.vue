<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="number" v-model.number.lazy="operand1">
    <input type="number" v-model.number.lazy="operand2">
    = {{ result }}
    <hr>
    <button @click="calculate('+')">+</button>
    <button @click="calculate('-')">-</button>
    <button @click="calculate('*')">*</button>
    <button @click="calculate('/')">/</button>
    <button @click="calculate('^')">^</button>
    <button @click="calculate('%')">%</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      result: 0,
      operand1: 0,
      operand2: 0,
    }
  },
  methods: {
    calculate(operation="+"){
      switch(operation){
        case '+':
            this.sum()
            break;
        case '-':
            this.subtraction()
            break;
        case '*':
            this.multiply()
            break;
        case '/':
            this.divide()
            break;
        case '^':
            this.exponent()
            break;
        case '%':
            this.integerDivision()
            break;
      }
    },
    sum(){
      return this.result = this.operand1 + this.operand2;
    },
    subtraction(){
      return this.result = this.operand1 - this.operand2;
    },
    multiply(){
      this.result = this.operand1 * this.operand2;
    },
    divide(){
      this.result = this.operand1 / this.operand2;
    },
    exponent(){
      this.result = Math.pow(this.operand1,this.operand2)
    },
    integerDivision(){
      this.result = this.operand1 % this.operand2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
