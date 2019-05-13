import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/index.js'
import * as VueGoogleMaps from 'vue2-google-maps'
//import vSelect from 'vue-select'


Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA3TfUM6sZJ06-DTmtriEDFjP6tlln0gi4',
        libraries: "places"
    }
});
Vue.config.productionTip = false;
//Vue.component('v-select', vSelect);


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

