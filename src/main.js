import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Work from './components/Work.vue'
import Reader from './components/Reader.vue'
import Book from './components/Book.vue'
import CNNode2 from './components/CNNode2.vue'
import Register from './components/Register.vue'
import Index from './components/Index.vue'

const routes = [
  {
    path:"/",
    component:Index
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/work",
    component:Work
  },
  {
    path:"/reader",
    component:Reader
  },
  {
    path:"/book",
    component:Book
  },
  {
    path:"/cnnode",
    component:CNNode2
  },
  {
    path:"/register",
    component:Register
  }

]

const router = new VueRouter({
  routes
})


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
