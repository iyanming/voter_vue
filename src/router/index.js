import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slider from '@/components/plugin/slider/slider'
import Login from '@/components/users/login/login'
import Register from '@/components/users/register/register'
import Poll from '@/components/vote/poll/poll'
import Pollmanage from '@/components/vote/poll/pollmanage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Hello
  },
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
    },
    {
      path: '/poll',
      name: 'Poll',
      component: Poll
    },
    {
      path: '/pollmanage',
      name: 'Pollmanage',
      component: Pollmanage
    }
  ]
})
