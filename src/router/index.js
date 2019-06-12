import Vue from 'vue'
import Router from 'vue-router'
import BaseTransition from '@/view/BaseTransition'
import Index from '../view/Loan.vue';
import Robot from '../view/Robot';
import Chat from '../view/Chat.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseTransition',
      component: BaseTransition,
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: '/chat',
          name: 'chat',
          component: Chat
        },
        {
          path: '/robot',
          name: 'Robot',
          component: Robot
        }
      ]
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // }
  ]
})
