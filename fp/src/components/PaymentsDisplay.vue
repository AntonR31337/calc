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
    methods:{
      editItem(item){
        console.log(item, 'editItem')
      },
      onShowContextMenu(item){
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
            }
          }
        ]
        this.$context.show(items)
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