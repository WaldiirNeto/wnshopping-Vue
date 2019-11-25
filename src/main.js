import Vue from 'vue'
import App from './App.vue'

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.config.productionTip = false

const Component = Vue.extend({
    // inferência de tipos habilitada
})

new Vue({
    render: h => h(App),
    Component
}).$mount('#app')