<template>
    <div class="main">
        <markdown-editor v-model="content"></markdown-editor>
        <button @click="save">保存</button>
    </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
import { truncate } from 'fs';
export default {
    name:'admin',
    data(){
        return{
            content:'',
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
        markdownEditor 
    },
    methods:{
        save(){
            console.log(this.content)
        }
    }
}
</script>

<style scoped>
.main{
      width: 60%;
      margin: 0 auto;
  }
</style>
