<template>
  <div class="wrapper">
    <div class="item" v-for="item in items" :key="item.id">
        <ul class="PaymentsDisplay__list">
            <li>{{ item.id}}</li>
            <li>{{ item.date}}</li>
            <li>{{ item.category}}</li>
            <li>{{ item.value }}</li>
        </ul>
           

    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.PaymentsDisplay__list{
    list-style-type: none;
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid;
}
</style>