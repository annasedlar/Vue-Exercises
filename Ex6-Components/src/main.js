import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import ServerList from './ServerList.vue'

Vue.component('header', Header)
Vue.component('server-list', ServerList)
Vue.component('footer', Footer)


new Vue({
  el: '#app',
  render: h => h(App)
})
