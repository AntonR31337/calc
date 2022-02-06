import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export let localDB = fetch("https://run.mocky.io/v3/7e8a6305-f6bd-4411-b03a-6856842d7b7e");
// localDB.then((res) => res.json()).then(data => localDB = data);

export const localDB = {
    page1: [
      { id: 1, date: "20.03.2020", category: "Food", value: 169 },
      { id: 2, date: "21.03.2020", category: "Navigation", value: 50 },
      { id: 3, date: "22.03.2020", category: "Sport", value: 450 },
      { id: 13, date: "22.03.2020", category: "Sport", value: 455 }
    ],
    page2: [
      { id: 4, date: "23.03.2020", category: "Entertaiment", value: 969 },
      { id: 5, date: "24.03.2020", category: "Education", value: 1500 },
      { id: 6, date: "25.03.2020", category: "Food", value: 200 }
    ],
    page3: [
        { id: 7, date: "20.03.2020", category: "Food", value: 280 },
        { id: 8, date: "21.03.2020", category: "Navigation", value: 40 },
        { id: 9, date: "22.03.2020", category: "Sport", value: 250 }
      ],
    page4: [
        { id: 10, date: "23.03.2020", category: "Entertaiment", value: 1969 },
        { id: 11, date: "24.03.2020", category: "Education", value: 2500 },
        { id: 12, date: "25.03.2020", category: "Food", value: 300 }
      ]
    }

export default new Vuex.Store({
    state: {
        paymentsList: [],
        paymentsListIDS: [],
        categoryList: []
    },
    mutations: {
        setPaymentsListData(state, payload){
            // state.paymentsList = payload
            const newUnitObjs = payload.filter(obj => {
                return state.paymentsListIDS.indexOf(obj.id) < 0
            })
            
            const unitIds = newUnitObjs.map(obj => obj.id)

            state.paymentsListIDS.push(...unitIds)
            state.paymentsList.push(...newUnitObjs)
        },
        addDataToPaymentsList(state, data){
            // if(state.paymentsList[(state.paymentsList.length) - 1] !== 3) {
            //     console.log(state.paymentsList, '123')
                
            // }
            console.log(state.paymentsList)            
            // console.log(state.paymentsList[state.paymentsList.length - 1])
            state.paymentsList.push(data)
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
                    const items = localDB[`page${page}`]
                    resolve(items)
                }, 1500)
            }).then((res) => commit('setPaymentsListData', res))
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

// let arr = [
//     {name: 1},
//     {name: 2},
//     {name: 3},
//     {name: 4},
//     {name: 5}
// ]

// // const arr2 = arr.filter((el) => {
// //     if (el.name === 2) {
// //         return el
// //     }
// // })

// // console.log(11 + "11")
