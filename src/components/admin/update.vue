<template>
    <div>
        <div class="main">
            <el-select v-model="option" 
             placeholder="标题" 
             clearable 
             @change="Otitle(option)"
             @focus="select()">
                <el-option
                v-for="(item,key) in items"
                :key="key"
                :label="item.title"
                :value="item.id">
                </el-option>
            </el-select>
            <el-input v-model="title" placeholder="请输入标题"></el-input>
            <el-button @click="update">修改并保存</el-button>
            <markdown-editor v-model="content"></markdown-editor>
            <p>{{msg}}</p>
        </div>
    </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
import config from '../config.json'
export default {
    name:'update',
    data(){
        return{
            id:null,
            title:'',
            content:'',
            msg:'',
            option:'',
            items:[],
            configs: {
                spellChecker: false,// 禁用拼写检查
                toolbar:true
            }
        }
    },
    created(){
        
    },
    components:{
        markdownEditor 
    },
    methods:{
        update(){
            if(this.title && this.content){
                this.$confirm('将修改此文章,是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'warning'
                }).then(()=>{
                    this.$http.put(
                        config['serverUrl'],
                        {
                            id:this.id,
                            title:this.title,
                            content:this.content,
                            status:'article',
                        },
                        {emulateJSON:true}
                    ).then(Response => {
                        this.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                        this.msg = '修改成功!'
                    }).catch(error =>{
                        console.log('出错'.error)
                        this.msg = '修改出错!'
                    })
                    
                }).catch(()=>{
                    this.$message({
                        type: 'info',
                        message: '已取消修改'
                    }); 
                    this.msg = '修改失败!'
                })
            } else {
               this.msg = '标题或者内容输入有误..'
            }
        },
        Otitle(id){
            if(id){
                this.id = id
                this.$http.get(
                    config['serverUrl'],
                    {
                        params:{
                            id:id
                        }
                    },
                ).then(Response=>{
                    // console.log(Response.data)
                    if(Response.data[0]['title']){
                        this.title = Response.data[0]['title']
                    }
                    if(Response.data[0]['content']){
                        this.content = Response.data[0]['content']
                    }
                }).catch(error =>{
                    console.log(error.status)
                })
            }
        },
        select(){
            // alert(1111);
            this.$http.get(
                config['serverUrl'],
            ).then(Response => {
                console.log("更新数据成功！")
                this.items = Response.data
            },error => {
                console.log('出错:'.error)
                this.msg = Response.data             
            })
        }
    },
    
}
</script>

<style scoped>
.main{
      width: 60%;
      margin: 0 auto;
}
.main p{
    text-align: center;
    color: #ccc;
}
.select{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.el-input{
    width: 150px;
}
</style>
