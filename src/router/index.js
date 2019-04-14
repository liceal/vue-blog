import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'
import article from '@/components/article/Blog-article'
import add from '@/components/admin/add'
import update from '@/components/admin/update'
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
      path:'/article/:id(\\w+)',
      name:'article',
      component:article
    },
    {
      path:'/add',
      name:'add',
      component:add,
    },
    {
      path:'/update',
      name:'update',
      component:update
    },
    {
      path:'/admin',
      name:'admin',
      component:admin
    },
  ]
})
