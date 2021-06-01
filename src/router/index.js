import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'

//路由的配置数组
//path:路由路径 必须以/开头
//component:对应的路由组件
//name：路由名称
const routes = [
  {
    path: '/',//首页
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'Home',
    //按需引入
    //如果没有访问/about 就不回加载这个组件 节约性能
    component: () => import( '../views/Home.vue')
    
  },
  {
    path: '/about',
    name: 'About',
    //按需引入
    //如果没有访问/about 就不回加载这个组件 节约性能
    component: () => import( '../views/About.vue')
    
  },
  {
    path: '/detail',
    name: 'Detail',
    //按需引入
    //如果没有访问/about 就不回加载这个组件 节约性能
    component: () => import( '../views/Detail.vue')
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
