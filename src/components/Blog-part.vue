<template>
    <div class="main">
        <div class="part" v-for="(item,index) in items" :key="index">
            <div class="part-left" :style="{backgroundColor:color[(index+1)%5]}">
                <p>{{item.date}}</p>
                <hr style="height:1px;border:none;border-top:1px dashed #0066CC;width: 80%;" />
                <p><a @click="jump(item.id)" style="color:white;cursor:pointer">{{item.number}} 浏览</a></p>
                <hr style="height:1px;border:none;border-top:1px dashed #0066CC;width: 80%;" />
            </div>
            <div class="part-main">
                <h2> 
                    <a @click="jump(item.id)" style="color:black;cursor:pointer">{{item.title}}</a>     
                </h2>
                <p v-html="item.content"></p>
            </div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai-sublime.css';
import config from './config.json'
export default {
    name:'blog-part',
    data(){
        return{
            test:'# h1',
            items:[
                // {id:1,title:'王兰花',content:'测试内容',date:'2019-04-12',number:'999'},
            ],
            color:['#FF7F00','#FA8072','#EE7942','#EE6363','#CD6600']
        }
    },
    methods:{
        jump(id){
            //跳转到打分页面
            // console.log(id)
            const route={
                name:'article',//传递的组件name
                query:{//传递参数
                    id:id
                }
            }
            this.$router.push(route)//跳转
        },
    },
    created(){
        this.$http.get(
            config['serverUrl']
        ).then(Response => {
            // console.log(Response.data[0]['content'])
            // Response.data.forEach(element => {
            //     element['content'] = marked(element['content'])
            //     this.items.push(element)
            // });
            this.items = Response.data
        }).catch(error =>{
            console.log('出错'.error)
        })
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
    },
    
}
</script>

<style scoped>
.main{
    /* background-color: #ccc; */
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    
}
.part{
    word-wrap:break-word;
    width:48%;
    margin: 1%;
    opacity: 0.8;
    min-height: 200px;
    max-block-size: 300px;
    overflow: hidden;
    float: left;
}
.part-left{
    /* background-color: red; */
    width: 25%;
    min-height: 100%;
    float:left;
    text-align: center;
    align-items:flex-start;

}
.part-left>p{
    color: white;
}
.part-main{
    background-color: white;
    width: 75%;
    float: right;
    min-height: 100%;
}
.part-main h2{
    margin-top: 10%;
    text-align:center;
}
.part-main>p{
    margin: 10%;
    margin-top: 10%;
    text-indent:2em;
}
a{
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
</style>
