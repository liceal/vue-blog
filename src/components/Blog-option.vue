<template>
    <div class="main">
        <a @click="jump('blog')" class="iconfont">&#xe7c6;首页</a>
        <a href="http://linxianao.com" class="iconfont">&#xe7ce;简介</a>
        <a @click="jump('login')" class="iconfont">&#xe791;管理</a>
    </div>
</template>

<script>
export default {
    name:'blog-option',
    data(){
        return{
            
        }
    },
    methods:{
        jump(name){
            const route = {
                name:name
            }
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
.iconfont{
    margin-left:20px;
    color: rgb(32, 32, 32);
    text-decoration: none;
}
.main{
    margin: 50px;
    display: flex;
    justify-content: center;
}
.iconfont:hover{
    background-color: black;
    color: white;
    border-radius: 5px;
    /* box-shadow: 0px 0px 5px black; */
    animation: clear 2s infinite linear;
}
@keyframes clear {
    0%{
        box-shadow: 0px 0px 0px rgb(107, 0, 66);
    }
    70%{
        box-shadow: 0px 0px 20px rgb(0, 136, 214);
    }
    100%{
        box-shadow: 0px 0px 0px rgb(107, 0, 66);
    }
}
</style>
