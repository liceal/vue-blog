<template>
    <div class="main">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
        <el-button @click="login">登陆</el-button>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            cookieTime:60*60,//cookie存在的时间 秒
        }
    },
    created(){ //创建前判断cookie是否存在
        let username = this.$cookieStore.getCookie('username') 
        if(username){
            this.jump(username)
        }
    },
    methods:{
        login(){
            //只允许用户名为liceal 密码为675024132账户登陆
            if(this.username == 'liceal' && this.password == '675024132'){
                //设置cookie
                this.$cookieStore.setCookie('username',this.username,this.cookieTime)
                this.jump(this.username)
            }else{
                // alert('帐户名或密码错误')
                console.log("帐户名或者密码错误")
            }
            console.log(this.$cookieStore.getCookie('username'))
            //
            
        },
        jump(username){
            const route = {
                name:'admin',
                query:{
                    username:username,
                }
            }
            this.$router.push(route)
        }
    },
    
}
</script>

<style scoped>
.el-input{
    width: 200px;
}
.main{
    width:10%;
    height: 500px;
    margin: 0 auto;
}
</style>
