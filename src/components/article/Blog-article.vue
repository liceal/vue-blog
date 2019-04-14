<template>
    <div>
        <div id="content" class="content">
            <h1 class="title">{{title}}</h1>
            <p v-html="content"></p>
            <div class="note">
                <div class="note_content">
                    <ul>
                        <li><strong>本文作者：</strong>{{writer}}</li>
                        <li><strong>文本链接：</strong>{{link}}</li>
                        <li><strong>版权声明：</strong>{{flag}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//marked+hjls
import marked from 'marked'
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai-sublime.css';
export default {
    name:"Blog-article",
    data(){
        return{
            title:'测试标题',
            content:'测试内容！测试内容！测试内容！测试内容！测试内容！',
            writer:'liceal',
            link:'http://........',
            flag:'本博客以及文章由个人编写，提供员工，供大家参考！'
        }
    },
    created(){
        // console.log(this.$route.params.id);
        this.$http.get(
            'http://vue.php.me/service.php',
            {
                params:{
                    id:this.$route.params.id
                }
            }
        ).then(Response => {
            // console.log(Response.data)
            this.title = Response.data[0]['title']
            //md解析
            this.content = marked(Response.data[0]['content'])
            
        },error => {
            console.log('出错:'.error)               
        })
        this.link = window.location.href
    },
    mounted(){
      marked.setOptions({
          renderer: new marked.Renderer(),
          highlight: function(code) {
            return hljs.highlightAuto(code).value;
          },
          pedantic: false,
          gfm: true,
          tables: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false
        }
      );
    }
}
</script>

<style scoped>
.content{
    margin: 0 auto;
    max-width: 50%;
    min-height: 700px;
    background-color:white;
    padding: 60px;
    padding-bottom: 30px;
    padding-top: 30px;
}
.content>p{
    min-height:550px; 
}
.title{
    text-align: center;
}
.note{
    width: 70%;
    min-height: 100px;
    margin: 0 auto;
    background-color: red;
}
.note_content{
    width: 93%;
    height: 100px;
    background-color: #f9f9f9;
    float: right;
    padding-right: 3%;
    padding-left: 3%;
}
.note_content ul{
    list-style-type:none;
    margin-top: 10px;
    margin-left: -20px;
}
</style>
