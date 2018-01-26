import Vue from 'vue'
import App from './App.vue'

// Because we want siblings to talk, we'd either have to have Server 
// emit a custom event to Servers to App
// OR set up an Event Bus (mini State-store) like below
export const serverBus = new Vue({

})

new Vue({
  el: '#app',
  render: h => h(App)
})
