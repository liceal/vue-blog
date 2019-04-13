<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <blog-head></blog-head>
    <blog-option></blog-option>
    <router-view/>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHead from "./components/Blog-head"
import blogOption from "./components/Blog-option"
import blogFooter from "./components/Blog-footer"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    blogHead,
    blogOption,
    blogFooter
  }
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  
}
body{
  background: url("./assets/home.png") no-repeat center top fixed;
  background-size: cover; 
  margin: 0px;
  padding: 0px;
}
</style>
