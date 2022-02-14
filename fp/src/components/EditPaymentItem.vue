<template>
  <div class="">
      <h1>Edit the payment item</h1>
      <div class="">
          <span>{{ item.id}}</span>
          <input type="text" v-model="item.category">
          <input type="text" name="" id="" v-model="item.date">
          <input type="number" name="" id="" v-model="item.value">
          <button>Save</button>
            <!-- <ul class="EditPaymentItems">
                <li>{{ item.id}}</li>
                <li>{{ item.date}}</li>
                <li>{{ item.category}}</li>
                <li>{{ item.value }}</li>
            </ul> -->
      </div>
  </div>
</template>

<script>

export default {
    name: "Edit",
    props: {
        item: Object
    },

}
</script>
<style lang="scss" scoped>
    .EditPaymentItems{
        display: flex;
        list-style-type: none;
        justify-content: space-evenly;
        border-bottom: 1px solid;
    }
</style>