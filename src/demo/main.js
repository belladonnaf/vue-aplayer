/**
 * Created by Doma on 2016/11/22.
 */
import Vue from 'vue'
import VueAPlayer from '../vue-aplayer.vue'
// VueAPlayer.disableVersionBadge = true

import App from './App.vue'
Vue.config.devtools = true
new Vue({
  el: '#app',
  render: h => h(App)
})
