<template>
    <div class="main">
        <el-col :span="14" >
           <div class="article">
                <el-input v-model="title" placeholder="请输入标题"></el-input>
                <el-button @click="save">保存</el-button>
                <markdown-editor v-model="content"></markdown-editor>
                <p>{{msg}}</p>
            </div>
        </el-col>
        <el-col :span="10">
            <div class="imgList">
                <upload></upload>
            </div>
        </el-col>
    </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
import upload from './upload'
import config from '../config.json'
export default {
    name:'add',
    data(){
        return{
            title:'',
            content:'',
            msg:'',
            configs: {
                spellChecker: false,// 禁用拼写检查
                toolbar:true
            }
        }
    },
    created(){
        // var simplemde = new SimpleMDE({
        //     element: document.getElementById("md")
        // });
    },
    components:{
        markdownEditor,
        upload
    },
    methods:{
        save(){
            if(this.title && this.content){
                this.$http.post(
                    config['serverUrl'],
                    {
                        title:this.title,
                        content:this.content,
                        key:this.$cookieStore.getCookie('username')//liceal
                    },
                    {emulateJSON:true}
                ).then(Response => {
                    console.log(Response.data)
                    this.msg = Response.data
                    if (Response.data == '插入成功！'){
                            this.title = ''
                            this.content = ''
                    }
                }).catch(error => {
                    console.log(error.status)
                })
           } else {
               this.msg = '标题或者内容输入有误..'
           }
        }
    }
}
</script>

<style scoped>
.main{
      width: 90%;
      margin: 0 auto;
}
.article p{
    text-align: center;
    color: #ccc;
}
.article{
    /* float: left; */
 
}
.imgList{
    /* float: right */
}
.el-input{
    width: 150px;
}
</style>
