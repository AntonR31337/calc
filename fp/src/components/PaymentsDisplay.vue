<template>
  <div class="wrapper">
    <div class="item" v-for="item in items" :key="item.id">
        <ul class="PaymentsDisplay__list">
            <li>{{ item.id}}</li>
            <li>{{ item.date}}</li>
            <li>{{ item.category}}</li>
            <li>{{ item.value }}</li>
            <li class="onShowContextMenu" @click="onShowContextMenu($event, item)"> ... </li>
        </ul>
    </div>
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "PaymentsDisplay",
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    data(){
      return {

      }
    },
    computed:{

    },
    methods:{
      ...mapMutations([
        'deleteFromPaymentsList'
      ]),
      editItem(item){
        console.log(item, 'editItem')
      },
      onShowContextMenu(event, item){
        const items = [
          {
            text: "Edit",
            action: ()=>{
              this.editItem(item)
            }
          },
          {
            text: "Delet",
            action: ()=> {
              console.log(item.id)
              this.$store.commit('deleteFromPaymentsList', item.id)
            }
          }
        ]
        this.$context.show({event, items})
      }
    },
}
</script>

<style>
.PaymentsDisplay__list{
    list-style-type: none;
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid;
}
.onShowContextMenu:hover {
  color: red;
  transition: 0.3s;
  transform: scale(1.3);
}
</style>