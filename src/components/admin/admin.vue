<template>
    <div class="main">
        <el-tabs v-model="handle" class="tabs" type="card">
            <el-tab-pane 
            v-for="(item,key) in items"
            :key="key" 
            :label="item">
            <add v-if="key==0"></add>
            <update v-if="key==1"></update>
            <delete v-if="key==2"></delete>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import add from './add'
import update from './update'
import Delete from './Delete'

export default {
    name:'admin',
    data(){
        return{
            items:['文章增加','文章修改','文章删除|查询'],
            handle:''
        }
    },
    created(){
        let username = this.$cookieStore.getCookie('username')
        if(!username){
            const route = {
                name:'login',
            }
            this.$router.push(route)
        }
    },
    components:{
        add,
        update,
        Delete
    },
    methods:{
        
    },
}
</script>

<style scoped>
.main{
    margin: 0 auto;
}
.tabs{
    margin: 0 auto;
    background-color: white;
    opacity: .8;
    min-height: 600px;
}
</style>
