<template>
    <div class="main">
        <el-transfer
         v-model="ash"
         :data="data"
         :titles="titles"
         :button-texts="buttons"
         filterable>
        </el-transfer>
    </div>
</template>

<script>
export default {
    name:'show',
    data(){
        return{
            data: this.generateDate(),
            ash:[1,4],
            titles:['文章列表','展示列表'],
            buttons:['移除','展示']
        }
    },
    methods:{
        generateDate(){
            const data = []
            for (let i = 1;i <=15;i++){
                data.push({
                    key:i,
                    label:'备选项'+i,
                })
            }
            return data;
        }
    },
    watch:{
        ash:function(value){
            console.log(value)
            // console.log(value)
        }
    }
}
</script>

<style scoped>
.main{
      width: 60%;
      /* text-align: center; */
}
</style>
