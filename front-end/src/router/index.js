import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home/Home.vue'
import Recommend from '../views/Recommend/Recommend.vue'
import Search from '../views/Search/Search.vue'
import Chat from '../views/Chat/Chat.vue'
import Me from '../views/Me/Me.vue'

// 首页板块二级路由
import Hot from '../views/Home/Children/Hot/Hot.vue'
import Dress from '../views/Home/Children/Dress'
import Box from '../views/Home/Children/Box'
import Mbaby from '../views/Home/Children/Mbaby'
import General from '../views/Home/Children/General'
import Food from '../views/Home/Children/Food'
import Shirt from '../views/Home/Children/Shirt'
import Man from '../views/Home/Children/Man'
import Ele from '../views/Home/Children/Ele'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      // component: () => import('../views/Home/Home.vue')
      component: Home,
      children: [
        // 热门板块
        {path: 'hot', component: Hot},
        // 服饰板块
        {path: 'dress', component: Dress},
        // 鞋包板块
        {path: 'box', component: Box},
        // 母婴板块
        {path: 'mbaby', component: Mbaby},
        // 百货板块
        {path: 'general', component: General},
        // 食品板块
        {path: 'food', component: Food},
        // 内衣板块
        {path: 'shirt', component: Shirt},
        // 男装板块
        {path: 'man', component: Man},
        // 电器板块
        {path: 'ele', component: Ele},
        // 其他板块切换
        {path: '/home', redirect: '/home/hot'}
      ]
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
