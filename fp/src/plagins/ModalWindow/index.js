export default {
    install(Vue){
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$modal = {
            EventBus: new Vue(),
            show(){
                console.log("show")
            },
            hide(){
                console.log("hide")
            }
        }
    }
}