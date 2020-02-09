import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../views/article/Article'
import Item from '../views/item/Item'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const Pay = () => import('../views/pay/Pay')


// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/pay',
    component: Pay
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: Article,
    props: true
  },
  {
    path: '/items/:id',
    name: 'item',
    component: Item,
    props: true
  }
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
