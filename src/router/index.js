import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import BuyHall from '@/views/buyHall'
import Activity from '@/views/activity'
import Mobile from '@/views/mobile'
import HelpGuide from '@/views/helpGuide'
import UULive from '@/views/uuLive'
import K3 from '@/views/lottery/k3'
import Syx5 from '@/views/lottery/syx5'
import Ssc from '@/views/lottery/ssc'
import Pk10 from '@/views/lottery/pk10'
import Howtoplay from '@/views/howtoplay/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/buyHall',
      name: 'buyHall',
      component: BuyHall
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    },
    {
      path: '/helpGuide',
      name: 'helpGuide',
      component: HelpGuide
    },
    {
      path: '/UULive',
      name: 'uuLive',
      component: UULive
    },
    {
      path: '/lottery',
      component: K3,
      children: [
        {
          path: 'k3/:id',
          component: K3
        }
      ]
    },
    // {
    //   path: '/lottery/k3/:id',
    //   component: K3
    // }
    {
      path: '/lottery',
      component: Syx5,
      children: [
        {
          path: 'syx5/:id',
          component: Syx5
        }
      ]
    },
    {
      path: '/lottery',
      component: Ssc,
      children: [
        {
          path: 'ssc/:id',
          component: Ssc
        }
      ]
    },
    {
      path: '/lottery',
      component: Pk10,
      children: [
        {
          path: 'pk10/:id',
          component: Pk10
        }
      ]
    },
    // {
    //   path: '/ssc',
    //   component: Ssc,
    //   children: [
    //     {
    //       path: 'ssc/:id',
    //       component: Ssc
    //     }
    //   ]
    // },
    {
      path: '/howtoplay',
      name: 'howtoplay',
      component: Howtoplay
    }
  ]
})