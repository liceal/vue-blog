<template>
    <div>
        <el-button class="update" @click="result">
            重新请求数据
        </el-button>

        <el-dialog
        :visible.sync="visible_dialog"
        width="70%"
        center
        append-to-body>
            <!-- <p v-html="content"></p> -->
            <span v-html="content"></span>
        </el-dialog>

        <!-- 数据 -->
        <el-table
        :data="tableData"
        stripe
        border>
            <el-table-column
             prop="id"
             label="id"
             align="center">
            </el-table-column>
            <el-table-column
             prop="title"
             label="title"
             align="center">
            </el-table-column>
            <!-- <el-table-column
             prop="content"
             label="content"
             align="center">
            </el-table-column> -->
            <el-table-column
             prop="number"
             label="number"
             align="center">
            </el-table-column>
            <el-table-column
             prop="time"
             label="time"
             align="center">
            </el-table-column>
            <el-table-column
             prop="date"
             label="date"
             align="center">
            </el-table-column>
            <el-table-column
             fixed="right"
             label="操作"
             width="150"
             align="center">
                <template slot-scope="scope">
                    <el-button @click="check(scope.row)" size="mini">查看</el-button>
                    <el-button @click="del(scope.row)" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
//marked+hjls
import marked from 'marked'
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai-sublime.css';
import config from '../config.json'
import { truncate } from 'fs';
export default {
    name:'delete',
    data(){
        return{
            tableData:[
                {id:1,title:'测试',content:'测试内容',number:1,time:'14:16:30',date:'2019-04-14'},
                {id:2,title:'测试',content:'测试内容',number:1,time:'14:16:30',date:'2019-04-14'},
                {id:3,title:'测试',content:'测试内容',number:1,time:'14:16:30',date:'2019-04-14'},
            ],
            visible_dialog:false,
            content:'',
        }
    },
    created(){
        this.result();
    },
    methods:{
        check(row){
            // console.log(row)
            this.visible_dialog = true
            this.content = marked(row['content'])
            // this.$alert(marked(row['content']),'文章内容',{
            //     dangerouslyUseHTMLString: true //允许html内容
            // })
        },
        del(row){
            // console.log(row)
            this.$http.delete(
                config['serverUrl'],
                {
                    params:{
                        'id':row['id'],
                        key:this.$cookieStore.getCookie('username')//liceal
                    }
                },
                {emulateJSON:true}
            ).then(Response => {
                console.log(Response.data)
                this.result()
            }).catch(error => {
                console.log('出错'.error)
            })
        },
        result(){
            this.$http.get(
                config['serverUrl']
            ).then(Response => {
                // console.log(Response.data)
                this.tableData = Response.data
            }).catch(error => {
                console.log('出错'.error)
            })
        }
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
.update{
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20px;
}
</style>
