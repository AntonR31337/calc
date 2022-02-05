// import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export let localDB = fetch("https://run.mocky.io/v3/7e8a6305-f6bd-4411-b03a-6856842d7b7e");
localDB.then((res) => res.json()).then(data => localDB = data);

export default new Vuex.Store({
    state: {
        paymentsList: [localDB],
        paymentsListIDS: [],
        categoryList: []
    },
    mutations: {
        setPaymentsListData(state, payload){
            console.log(payload, 'set...')
            state.paymentsList = payload
            const newUnitObjs = payload.filter(obj => {
                return state.paymentsListIDS.indexOf(obj.id) < 0
            })
            const unitIds = newUnitObjs.map(obj => obj.id)
            state.paymentsListIDS.push(...unitIds)
        },
        addDataToPaymentsList(state, data){
            console.log(data, 'add ...')
            
            state.paymentsList.push(data)
            console.log(state.paymentsList, '/// paymentsList')
            state.paymentsListIDS.push(data.id)
            
        },
        setCategories(state, payload){
            state.categoryList = payload
        }
    },
    actions: {
        fetchData({ commit }, page){
            return new Promise((resolve) => {
                setTimeout(()=>{
                    console.log(page)
                    const items = localDB[`page${page}`]
                    resolve(items)
                }, 1500)
            }).then((res) => commit(('addDataToPaymentsList', 'setPaymentsListData'), res))
        },
        // fetchData({ commit }){
        //     return new Promise((resolve) => {
        //         setTimeout(()=>{
        //             const items = []
        //             for (let i = 1; i < 51; i++){
        //                 items.push({
        //                     date: Date.now(),
        //                     category: "Food",
        //                     id: i,
        //                     value: i 
        //                 })
        //             }
        //             resolve(items)
        //         }, 1500)
        //     }).then(res => {
        //         commit('setPaymentsListData', res)
        //     })
        // },
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
        getCategoryList: state => state.categoryList
    }
})

// let db = [];
// fetch("https://run.mocky.io/v3/7e8a6305-f6bd-4411-b03a-6856842d7b7e").then((res) => {
//     return res.json()
// }).then((data) => db = data)
