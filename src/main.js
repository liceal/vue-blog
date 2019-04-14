// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//iconfont 阿里巴巴矢量图标
import '@/assets/css/iconfont.css'

//跨域
import VueResource from 'vue-resource'

//md
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueSimplemde);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next)=>{
  // console.log(to)
  // console.log(from)
  // console.log(next)
  // console.log(window.sessionStorage)
  // if(to.meta['needLogin']){
    
  // }else{
  //   //允许跳转
  //   next()
  // }
})
