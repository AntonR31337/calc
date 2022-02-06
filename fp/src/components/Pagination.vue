<template>
    <div class="paginationList_wrapper">
        <button @click="onClick(cur - 1)">-</button>
        <ul class="paginationList">
            <li class="paginationList__item" v-for="page in amount" :key="page" :class="{'active': cur === page}" @click="onClick(page)">
                {{ page }}
            </li>
        </ul>
        <button @click="onClick(cur + 1)">+</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        length: Number,
        cur: Number,
        n: Number
    },
    computed: {
        amount(){
            return Math.ceil(12 / 3)
        }
    },
    methods: {
        onClick(page){
            if (page < 1 || page > this.amount || page === this.cur){
                return
            }
            this.$emit('paginate', page)
        }
    }
}
</script>

<style>
.paginationList_wrapper{
    display: flex;
    justify-content: center;
}
.paginationList{
  display: flex;
  list-style-type: none;
}
.paginationList__item{
  margin: 5px;
}
.active {
    color: red;
}
</style>