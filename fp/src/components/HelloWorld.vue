<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="number" v-model.number.lazy="operand1" name="operand1">
    <input type="number" v-model.number.lazy="operand2" name="operand2">
    = {{ result }}
    <hr>
    <button @click="result = operand1 + operand2" name="+">+</button>
    <button @click="result = operand1 - operand2" name="-">-</button>
    <button @click="multiply(operand1, operand2)" name="*">*</button>
    <button @click="divide(operand1, operand2)" name="/">/</button>
    <button @click="exponent(operand1, operand2)" name="^">^</button>
    <button @click="integerDivision(operand1, operand2)" name="%">%</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
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
    divide(op1,op2){
     if ((op1 && op2) == 0) {
      alert('Недопустимая операция')
    } else {
    this.result = op1 / op2;
    }
    },
    multiply(op1,op2){
    if ((op1 && op2) == 0) {
      alert('Недопустимая операция')
    } else {
      this.result = op1 * op2;
    }
    },
    exponent(op1,op2)
    {
    this.result = Math.pow(op1,op2)
    },
    integerDivision(op1, op2){
      this.result = op1 % op2;
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
