<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Date
          </th>
          <th class="text-left">
            Category
          </th>
          <th class="text-left">
            Value
          </th>
          <th class="text-left">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td><v-icon @click="onShowContextMenu($event, item)">mdi-border-color</v-icon></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations(["deleteFromPaymentsList", "editItemFromPaymentsList"]),
    editItem(item) {
      // console.log(item, 'editItem')

      this.$modal.show("EditPaymentItem", {
        header: "Edit the payment item",
        content: "EditPaymentItem",
        item,
      });
    },
    onShowContextMenu(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delet",
          action: () => {
            console.log(item.id);
            this.$store.commit("deleteFromPaymentsList", item.id);
          },
        },
      ];
      this.$context.show({ event, items });
    },
  },
};
</script>

<style>

</style>