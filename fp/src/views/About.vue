<template>
  <div class="about">
      <h1>About the App</h1>
      <modal-window :settings="settings" v-if="modalShow" />
  </div>
</template>

<script>
import ModalWindow from '../components/ModalWindow.vue'
export default {
    name: "About",
    components: { ModalWindow },

    data(){
      return {
        modalShow: true,
        settings: {
          header: "Auth Form",
          content: "Auth"
        }
      }
    },
}
</script>

<style>

</style>