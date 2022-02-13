<template>
  <div class="about">
      <h1>About the App</h1>
      <button @click="onShowModalAuth">Auth</button>
  </div>
</template>

<script>
// import ModalWindow from '../components/ModalWindow.vue'
export default {
    name: "About",
    // components: { ModalWindow },

    data(){
      return {
        modalShow: true,
        settings: {
          header: "Auth Form",
          content: "Auth"
        }
      }
    },
    methods:{
      onShowModalAuth(){
        this.$modal.show('Auth', this.settings)
      }
    }
}
</script>

<style>

</style>