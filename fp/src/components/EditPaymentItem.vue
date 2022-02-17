<template >
  <v-form class="pa-4"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="item.value"
      label="VALUE"
      required
    ></v-text-field>

    <v-text-field
      v-model="item.date"
      label="DATE"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="item.category"
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
      <!-- <div class="">
      <h1>Edit the payment item</h1>
      <div class="">
          <span>{{ item.id}}</span>
          <input type="text" v-model="item.category">
          <input type="text" name="" id="" v-model="item.date">
          <input type="number" name="" id="" v-model="item.value">
          <button>Save</button>
      </div>
  </div> -->
  </v-form>
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
    // .EditPaymentItems{
    //     display: flex;
    //     list-style-type: none;
    //     justify-content: space-evenly;
    //     border-bottom: 1px solid;
    // }
</style>