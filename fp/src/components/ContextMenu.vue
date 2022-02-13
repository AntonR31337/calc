<template>
  <div class="context" v-if="isShow">
      <div class="context__item" v-for="(item, idx) in items" :key="idx" @click="onClickAction(item)">{{ item.text }}</div>
  </div>
</template>

<script>
export default {
    name: 'ContextMenu',
        data() {
            return {
                isShow: false,
                items: [],
            }
        },
        methods: {
            onClickAction(item){
                item.action()
                this.$context.close()
            },
            onShow(items){
                this.isShow = true
                this.items = items
            },
            onHide(){
                this.isShow = false
                this.items = []
            }
        },
        mounted(){
            this.$context.EventBus.$on('show', this.onShow)
            this.$context.EventBus.$on('hide', this.onHide)
        },
        beforeDestroy(){
            this.$context.EventBus.$off('show', this.onShow)
            this.$context.EventBus.$off('hide', this.onHide)
        }
    }
</script>

<style lang="scss" scoped>
.context{
    position: absolute;
    background: #eee;
    cursor: pointer;
}

</style>