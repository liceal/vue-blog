<template>
    <div class="main">
        <el-tabs v-model="handle" class="tabs" type="card">
            <el-tab-pane 
            v-for="(item,key) in items"
            :key="key" 
            :label="item">
            <add v-if="key==0"></add>
            <update v-if="key==1"></update>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import add from './add'
import update from './update'
export default {
    name:'admin',
    data(){
        return{
            items:['文章增加','文章修改','文章删除','文章查询'],
            handle:''
        }
    },
    components:{
        add,
        update
    }
}
</script>

<style scoped>
.main{
    margin: 0 auto;
}
.tabs{
    margin: 0 auto;
}
</style>
