import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Download from '../components/Download.vue'
import Support from '../components/Support.vue'
import Tutorials from '../components/Tutorials.vue'
import System from '../components/System.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/support',
      name: 'support',
      component: Support
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: Tutorials
    },
    {
      path: '/system',
      name: 'system',
      component: System
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
