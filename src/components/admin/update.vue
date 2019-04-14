<template>
    <div>
        <div class="select">
            <el-select v-model="option" placeholder="标题" clearable @change="Otitle(option)">
                <el-option
                v-for="(item,key) in items"
                :key="key"
                :label="item.title"
                :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div class="main">
            <strong>标题：</strong><input v-model="title" class="title">
            <el-button @click="update" size="mini">修改并保存</el-button>
            <markdown-editor v-model="content"></markdown-editor>
            <p>{{msg}}</p>
        </div>
    </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
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
        this.$http.get(
            'http://vue.php.me/service.php',
        ).then(Response => {
            // console.log(Response.data)
            this.items = Response.data
        },error => {
            console.log('出错:'.error)
            this.msg = Response.data             
        })
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
                        'http://vue.php.me/service.php',
                        {
                            id:this.id,
                            title:this.title,
                            content:this.content
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
                    'http://vue.php.me/service.php',
                    {
                        params:{
                            id:id
                        }
                    },
                ).then(Response=>{
                    // console.log(Response.data)
                    this.title = Response.data[0]['title']
                    this.content = Response.data[0]['content']
                }).catch(error =>{
                    console.log(error.status)
                })
            }
        }
    },
    
}
</script>

<style scoped>
.main{
      width: 60%;
      margin: 0 auto;
}
.main strong{
    color: white;
}
.main p{
    text-align: center;
    color: #ccc;
}
.select{
    margin: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
