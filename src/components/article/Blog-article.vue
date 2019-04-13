<template>
    <div>
        <div id="content" class="content">
            <h1 class="title">{{title}}</h1>
            <p>{{content}}</p>
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
