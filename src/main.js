import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Vuetify);
Vue.prototype.$http = axios;

new Vue({
    vuetify: Vuetify,
    render: h => h(App)
}).$mount('#app')