import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'
import article from '@/components/article/Blog-article'
import add from '@/components/admin/add'
import update from '@/components/admin/update'
import admin from '@/components/admin/admin'
import login from '@/components/admin/login'
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
      path:'/admin',
      name:'admin',
      component:admin,
      meta:{
        needLogin: false
      }
    },
    {
      path:'/login',
      name:'login',
      component:login,
      meta:{
        user:'',
        password:''
      }
    }
  ]
})
