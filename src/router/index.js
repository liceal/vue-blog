import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'
import article from '@/components/article/Blog-article'
import admin from '@/components/admin/admin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog
    },
    {
      path:'/article/:id(\\d+)',
      name:'article',
      component:article
    },
    {
      path:'/admin',
      name:'admin',
      component:admin,
      
    }
  ]
})
