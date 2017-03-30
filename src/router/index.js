import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slider from '@/components/plugin/slider/slider'
import Login from '@/components/users/login/login'
import Register from '@/components/users/register/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
