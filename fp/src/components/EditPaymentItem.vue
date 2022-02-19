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
      @click="isVisibl"
    >
      Close
    </v-btn>
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

</style>