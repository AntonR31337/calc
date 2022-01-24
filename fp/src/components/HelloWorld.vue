<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="number" v-model.number.lazy="operand1">
    <input type="number" v-model.number.lazy="operand2">
    = {{ result }}
    <hr>
    <button class="operators" v-for="(item, index) in operators" @click="calculate(item)" :key="index">{{ item }}</button>
    <hr>
      <label for="checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" v-model="disabled"> Отобразить экранную клавиатуру </label>
        <br>
        <div v-show="disabled" class="keyboard__wrapper">
          <button class="keyboard__item" v-for="item in operands" :key="item" @click="inputNum(item)">{{ item }}</button>
          <button class="keyboard__item" @click="eraseOne()">E</button>
          <button class="keyboard__item" disabled="true">C</button>
          <br>
          <label for=""><input checked="true" type="radio" name="operand" value="1" v-model="operch" />Операнд 1</label>
            <br>
          <label for=""><input type="radio" name="operand" value="2" v-model="operch" />Операнд 2 </label>
        </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      result: 0,
      operand1: 0,
      operand2: 0,
      operators: ['+', '-', '*', '/', '^', '%'],
      operands: [9,1,2,3,4,5,6,7,8,0],
      disabled: false,
      operch: "",
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
      if (this.operand1 && this.operand2 === 0){
        alert('Недопустимая операция')
      } else {
      this.result = this.operand1 / this.operand2;
      }
    },
    exponent(){
      this.result = Math.pow(this.operand1,this.operand2)
    },
    integerDivision(){
      this.result = this.operand1 % this.operand2
    },
    inputNum(el){
      const {operch} = this
      const input = operch === "1" ? "operand1": "operand2";
      this[input] = +(this[input] += String(el))
    },
    eraseOne(){
      const {operch} = this
      const input = operch === "1" ? "operand1": "operand2";
      this[input] =+String(this[input]).slice(0, -1)
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
.operators{
  margin: 5px;
}
.keyboard__wrapper{
  width: 130px;
  margin: 15px auto;
}
.keyboard__item{
  margin: 5px;
}
</style>
