import Vue from 'vue'
import App from './App'
import store from '../store'


/* eslint-disable no-new */
new Vue({
  el: '#root',
  store, 
  render: h => h(App)
})

console.log("Hello there!!!")