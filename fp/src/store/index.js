import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
    },
    mutations: {
        setPaymentsListData(state, payload){
            state.paymentsList = payload
        },
        addDataToPaymentsList(state, data){
            state.paymentsList.push(data)
        },
        setCategories(state, payload){
            state.categoryList = payload
        }
    },
    actions: {
        fetchData({ commit }){
            return new Promise((resolve) => {
                setTimeout(()=>{
                    const items = []
                    for (let i = 1; i < 51; i++){
                        items.push({
                            date: Date.now(),
                            category: "Food",
                            id: i,
                            value: i 
                        })
                    }
                    resolve(items)
                }, 1500)
            }).then(res => {
                commit('setPaymentsListData', res)
            })
        },
        loadCategories({ commit }){
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Food', 'Transport', 'Education', 'Entertiment', 'Sport', 'Other'])
                }, 1000)
            }).then(res => {
                commit('setCategories', res)
            })
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0) 
        },
        getCategoryList: state => state.categoryList,
    }
})