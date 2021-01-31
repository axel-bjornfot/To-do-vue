import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ToDoForm from '../views/ToDoForm'
import About from '../views/About'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todoform',
    name: 'ToDoForm',
    component: ToDoForm
  },
  {
    path: '/About',
    name: 'About',
   component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
