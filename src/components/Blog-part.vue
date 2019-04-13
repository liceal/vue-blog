<template>
    <div class="main">
        <div class="part" v-for="(item,index) in items" :key="index">
            <div class="part-left" :style="{backgroundColor:color[(index+1)%5]}">
                <p>{{item.date}}</p>
                <hr style="height:1px;border:none;border-top:1px dashed #0066CC;width: 80%;" />
                <p><a :href="'#/article/'+item.id" style="color:white">{{item.number}} 浏览</a></p>
                <hr style="height:1px;border:none;border-top:1px dashed #0066CC;width: 80%;" />
            </div>
            <div class="part-main">
                <h2>  
                    <a :href="'#/article/'+item.id" style="color:black">{{item.title}}</a>     
                </h2>
                <p>{{item.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'blog-part',
    data(){
        return{
            items:[
                {id:1,title:'王兰花',content:'测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',date:'2019-04-12',number:'999'},
                {id:2,title:'测试标题',content:'测试内容',date:'2019-04-12',number:'999'},
                {id:3,title:'测试标题',content:'测试内容',date:'2019-04-12',number:'999'},
                {id:4,title:'测试标题',content:'测试内容',date:'2019-04-12',number:'999'},
                {id:5,title:'测试标题',content:'测试内容',date:'2019-04-12',number:'999'},
                {id:6,title:'测试标题',content:'测试内容',date:'2019-04-12',number:'999'},
            ],
            color:['#FF7F00','#FA8072','#EE7942','#EE6363','#CD6600']
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.main{
    /* background-color: #ccc; */
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    
}
.part{
    word-wrap:break-word;
    width:48%;
    margin: 1%;
    opacity: 0.8;
    min-height: 200px;
    float: right;
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
