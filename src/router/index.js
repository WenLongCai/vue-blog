import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import WriteArticle from '@/components/page/WriteArticle'
import ArticleDetail from '@/components/page/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Home'}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/wtArt',
      name: 'wtArt',
      component: WriteArticle
    },
    {
      path: '/artDetail',
      name: 'artDetail',
      component: ArticleDetail
    }
  ]
})
