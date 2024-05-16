import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/**! 创建窗口后再跳转页面就会导致样式没有生效所以不能使用懒加载路由的方式，有些页面需要快速响应的就不需要懒加载 */
const { BASE_URL } = import.meta.env
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-window/Login.vue')
  }
]

// 创建路由
const router: any = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})
export default router
