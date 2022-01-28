import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: []
    },
    mutations: {
        setPaymentsListData(state, payload){
            state.paymentsList = payload
        },
        addDataToPaymentsList(state, data){
            state.paymentsList.push(data)
        },
        // editPaymentItem(state, payload){
        //     Vue.set(state.paymentsList, 0, payload)
        // }
    },
    actions: {
        fetchData({commit}){
            return new Promise((resolve) => {
                setTimeout(()=>{
                    const items = []
                    for (let i = 1; i < 101; i++){
                        items.push({
                            date: new Date.now(),
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
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0) 
        }
    }
})