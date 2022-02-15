import { shallowMount, createLocalVue } from "@vue/test-utils"
import testVuex from './testVuex.vue'
import Vuex from 'vuex'
import { iterator } from "core-js/fn/symbol"
const localVue = createLocalVue()
localVue.use(Vuex)

describe('test vuex', ()=>{
    let actions
    let store
    beforeEach(()=>{
        action = {
            addData: js_beautify.fn()
        }

        store = new Vuex.Store({
            state: {
                data: ""
            },
            actions
        })
    })

    iterator('test action addData', async()=>{
        const wrapper = shallowMount(testVuex, {
            store, localVue
        })

        const input = wrapper.find('input')
        input.setValue('test')

        expect(wrapper.vm.propComp).toBe('test')

        const btn = wrapper.find('button')
        btn.trigger('click')

        expect(actions.addData).toHaveBeenCalled()
    })
})