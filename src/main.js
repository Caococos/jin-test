import Vue from 'vue'
import App from './App.vue'

// import { flexible } from '@/utils';
// flexible(window, document)

import 'assets/css/base.css';
import 'assets/font/iconfont.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
