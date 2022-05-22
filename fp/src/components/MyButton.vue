<template>
    <button class="PaymentForm__btn" @click="clicked"> {{ title }} </button>
</template>
    
<script>
    export default {
        name: "MyButton",
        props:[
            'title',
        ],
        data(){
            return {
                //
            }
        },
        methods: {
            clicked(){
                this.$emit('onSaveClick')
            }
        }
    }


</script>

<style>
.PaymentForm__btn{
    margin: 15px 0;
    width: 150px;
    background-color: #7fecff;
    align-self: end;
}
</style>
